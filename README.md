# Sri Sun Solar — Website

Brand-new Node.js website for **Sri Sun Solar Energiser Pvt Ltd** (Chennai), rebuilt from [srisunsolar.com](https://srisunsolar.com/) with cleaned content, SEO, and an admin CMS.

## Stack

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS 4
- **Prisma** + **PostgreSQL**
- **Admin auth** via JWT cookie (`jose` + `bcryptjs`)
- SEO: metadata API, canonical URLs, `sitemap.xml`, `robots.txt`, JSON-LD
- Deploy: **Render** Blueprint (`render.yaml`)

## Local setup

```bash
# 1. Start Postgres
docker compose up -d

# 2. Configure env
cp .env.example .env
# DATABASE_URL should already match docker-compose

# 3. Install, migrate, seed
npm install
npm run db:setup

# 4. Dev server
npm run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

### Default local admin

| Field | Value |
| --- | --- |
| Email | `admin@srisunsolar.com` |
| Password | `Admin@12345` |

## Deploy on Render

1. Push this repo to GitHub.
2. In [Render Dashboard → Blueprints](https://dashboard.render.com/blueprints), connect the repo (uses `render.yaml`).
3. Apply the Blueprint (creates **sun-solar-web** + **sun-solar-db**).
4. After the first deploy succeeds, open the web service → **Environment**:
   - Copy `SEED_ADMIN_PASSWORD` (auto-generated) for the first admin login
   - Confirm `NEXT_PUBLIC_SITE_URL` matches the live hostname (default `https://sun-solar-web.onrender.com`)
5. Visit `/admin/login` with `SEED_ADMIN_EMAIL` + `SEED_ADMIN_PASSWORD`, then change the password.

**Notes**

- Free web services sleep after idle; first request can be slow.
- Free Postgres expires after **30 days** — upgrade for real production.
- Migrations + seed run on start (`npm run start:prod`) because free plans skip Pre-Deploy Command.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `start` | Production build & serve |
| `npm run start:prod` | Migrate + seed + start (Render) |
| `npm run db:setup` | Generate client, migrate, seed |

## Admin CMS

Manage enquiries, blog, products/categories, projects, testimonials, CMS pages, and site settings.

## Content fixes vs old site

- Tagline **HARCEST → Harvest**
- Process copy aligned to survey → design → install
- Removed **ZingBox** leftovers
- Subsidy uses **PM Surya Ghar** rates: ₹30,000 / ₹60,000 / ₹78,000
- Products / Projects / Terms pages filled in

Source scrape notes: `content/CONTENT_INVENTORY.md`.

## Legal note

Privacy Policy and Terms include draft wording for DPDP Act compliance. Have counsel review before go-live.
