import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders CMS long-form text. Accepts either HTML (sanitised, rendered as-is) or a light
 * markdown dialect: `##` headings, `-` / `1.` lists, `| a | b |` tables, **bold** and
 * [text](url) links. Markdown is rendered as React elements, never as raw HTML.
 */

const HTML_PATTERN =
  /<\/?(p|h[1-6]|ul|ol|li|div|br|img|a|table|strong|em|blockquote|span)\b/i;

/** Defence in depth for admin-authored HTML: drop active content and inline handlers. */
function sanitizeHtml(html: string): string {
  return html
    .replace(/<(script|style|iframe|object|embed|form|link|meta)\b[\s\S]*?<\/\1\s*>/gi, "")
    .replace(/<(script|style|iframe|object|embed|form|link|meta)\b[^>]*>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, '$1="#"');
}

type Block =
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; header: string[]; rows: string[][] };

const UL_ITEM = /^\s*[-*\u2022]\s+(.*)$/;
const OL_ITEM = /^\s*\d+[.)]\s+(.*)$/;
const TABLE_SEPARATOR = /^\|?[\s:|-]+\|?$/;

function splitRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function parseBlocks(source: string): Block[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (line.trim() === "") {
      flushParagraph();
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      const depth = heading[1].length;
      blocks.push({
        type: "heading",
        level: depth <= 2 ? 2 : depth === 3 ? 3 : 4,
        text: heading[2].trim(),
      });
      continue;
    }

    if (line.trim().startsWith("|")) {
      flushParagraph();
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i += 1;
      }
      i -= 1;
      const rows = tableLines.filter((row) => !TABLE_SEPARATOR.test(row.trim()));
      if (rows.length > 0) {
        const [header, ...body] = rows.map(splitRow);
        blocks.push({ type: "table", header, rows: body });
      }
      continue;
    }

    if (UL_ITEM.test(line) || OL_ITEM.test(line)) {
      flushParagraph();
      const ordered = OL_ITEM.test(line);
      const matcher = ordered ? OL_ITEM : UL_ITEM;
      const items: string[] = [];
      while (i < lines.length && matcher.test(lines[i])) {
        items.push((lines[i].match(matcher) as RegExpMatchArray)[1].trim());
        i += 1;
      }
      i -= 1;
      blocks.push({ type: ordered ? "ol" : "ul", items });
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  return blocks;
}

const SAFE_HREF = /^(https?:\/\/|mailto:|tel:|\/|#)/i;

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts
    .filter((part) => part !== "")
    .map((part, index) => {
      const bold = part.match(/^\*\*([^*]+)\*\*$/);
      if (bold) return <strong key={index}>{bold[1]}</strong>;

      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const [, label, href] = link;
        if (!SAFE_HREF.test(href)) return label;
        if (href.startsWith("/") || href.startsWith("#")) {
          return (
            <Link key={index} href={href}>
              {label}
            </Link>
          );
        }
        return (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
      }
      return part;
    });
}

function renderBlock(block: Block, index: number): ReactNode {
  switch (block.type) {
    case "heading": {
      const Tag = `h${block.level}` as "h2" | "h3" | "h4";
      return <Tag key={index}>{renderInline(block.text)}</Tag>;
    }
    case "paragraph":
      return <p key={index}>{renderInline(block.text)}</p>;
    case "ul":
      return (
        <ul key={index}>
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index}>
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div key={index} className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                {block.header.map((cell, i) => (
                  <th key={i} scope="col">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>{renderInline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function RichContent({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  if (HTML_PATTERN.test(content)) {
    return (
      <div
        className={cn("prose-site", className)}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
      />
    );
  }

  return (
    <div className={cn("prose-site", className)}>
      {parseBlocks(content).map(renderBlock)}
    </div>
  );
}
