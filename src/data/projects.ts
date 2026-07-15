export interface SnapshotField {
	label: string;
	value: string;
}

export interface DeliveryPhase {
	period: string;
	title: string;
	description: string;
}

export interface DeliveryHighlight {
	title: string;
	description: string;
}

export interface Project {
	name: string;
	title: string;
	tagline: string;
	period?: string;
	sector?: string;
	status: 'Active' | 'Beta' | 'Archived' | 'Ongoing';
	summary: string;
	snapshot?: SnapshotField[];
	deliveryArc?: DeliveryPhase[];
	highlights?: DeliveryHighlight[];
	tech: string[];
	features?: string[];
}

export const projects: Project[] = [
	{
		name: 'the-work-project',
		title: 'The Work Project',
		tagline: 'Platform partnership — SALTO, native mobile, Dexus Place',
		period: 'Jun 2024 → ongoing 2026',
		sector: 'Proptech / coworking (international)',
		status: 'Ongoing',
		summary:
			'A ~2-year platform partnership with The Work Project (TWP) — premium coworking across Singapore, Hong Kong, the UK, and Dexus Place in Australia. Rescued a legacy Rails monolith, re-architected to an API-first platform with a native mobile app and digital key, integrated SALTO smart-access, modernised payments, and launched a second booking platform on the same stack.',
		snapshot: [
			{
				label: 'Client',
				value:
					'The Work Project (TWP) — premium coworking / flexible-office operator (Singapore, Hong Kong, UK; and Dexus Place, Australia).',
			},
			{
				label: 'Sector',
				value: 'Proptech / coworking (international).',
			},
			{
				label: 'What',
				value:
					'~2-year platform partnership (formal engagement Jun 2024 → ongoing 2026). Legacy rescue → API-first platform, native mobile + digital key, SALTO, payments modernisation, and Dexus Place on the same stack.',
			},
			{
				label: 'Team model',
				value:
					'Lean pod (≈1 PM, 1 designer, 1–3 developers) sustaining multi-region delivery with a weekly sprint cadence.',
			},
			{
				label: 'Submitted by',
				value: 'Shortcut Asia Sdn. Bhd.',
			},
		],
		deliveryArc: [
			{
				period: 'Jun–Sep 2024',
				title: 'Takeover & stabilisation',
				description:
					'Inherited an end-of-life Rails 5 / Ruby 2.6 monolith (no security patches since 2022, MongoDB, a Redis single-point-of-failure that had taken the live site down). Assessed tech debt, hardened the platform, and set an API-first, mobile-first direction — run in parallel with the legacy app to de-risk.',
			},
			{
				period: 'Oct–Dec 2024',
				title: 'API platform bootstrap',
				description:
					'Built a production API layer from scratch (auth, users, cities/locations, workspaces, bookings, payments, visitors, perks) to back web, mobile, and third-party integrations.',
			},
			{
				period: 'Late 2024 → 2025',
				title: 'SALTO smart-access + mobile',
				description:
					'Native iOS/Android app with digital key, from beta through global launch (SG/HK/UK, Nov 2025).',
			},
			{
				period: '2025 → Jun 2026',
				title: 'Dexus Place platform',
				description:
					'A full second platform built on the same stack — UAT through production launch June 2026.',
			},
			{
				period: '2025–26',
				title: 'Advanced features & stabilisation',
				description:
					'Day Pass, My Centre, recurring bookings, campaigns CMS, SEO, and zero-downtime deploys.',
			},
		],
		highlights: [
			{
				title: 'SALTO KS smart door-access',
				description:
					'Federated auth via OpenID Connect — extended TWP’s backend into an OIDC identity provider so SALTO authenticates against TWP identity. Built the SALTO Connect API client (user + site sync, access-group automation, remote lock/unlock) with NFC / Bluetooth-LE offline unlock across 6+ sites in three countries — including a legacy on-premise SALTO site handled separately.',
			},
			{
				title: 'Legacy rescue & re-architecture',
				description:
					'EOL Rails 5 monolith → API-first platform; NoSQL MongoDB → PostgreSQL on AWS; Redis failover to remove the single point of failure; zero-downtime deploys (~10 min → <1 min).',
			},
			{
				title: 'Native mobile app',
				description:
					'iOS + Android with digital key, bookings, visitor management and payments; alpha + usability tested; phased global rollout.',
			},
			{
				title: 'Payments modernisation',
				description:
					'Stripe Charges → PaymentIntent; pragmatic per-location customer workaround with a documented path to Stripe Connect; GST handling, refunds, credit notes, and immutable invoicing.',
			},
			{
				title: 'Dexus Place (Australia)',
				description:
					'Replaced Dexus’s proprietary ASP.NET ThoughtStudio with Node / TypeScript / React / PostgreSQL — bookings, invoicing (auto-generation, GST, credit notes, immutability), catering, Stripe payments, admin + financial reports (JDE consolidation), and a legacy data migration (Access / SQL Server → PostgreSQL) with integrity validation. Production June 2026.',
			},
			{
				title: 'Security hardening',
				description:
					'AWS WAF (bot control, IP-reputation, admin protection), reCAPTCHA v3, rate-limiting, and audit logging on sensitive booking/invoice changes.',
			},
			{
				title: 'Web & growth',
				description:
					'Landing-page revamp, location-scoped blog CRUD with campaign tracking, video galleries, campaigns CMS, SEO programme, and transactional email (AWS SES) split from marketing email.',
			},
			{
				title: 'Delivery discipline',
				description:
					'Weekly sprints, PC/QC review with confidence scoring and client sign-off, a release-tracking log (from Jul 2024), Trello-tracked tickets.',
			},
		],
		tech: [
			'Ruby on Rails',
			'Node / TypeScript',
			'React',
			'React Native',
			'PostgreSQL',
			'AWS',
			'Stripe',
			'SALTO',
			'OpenID Connect',
		],
	},
	{
		name: 'dexus-place',
		title: 'Dexus Place',
		tagline: 'Booking, billing & membership platform for Australian flexible office',
		period: '2025 → ongoing 2026',
		sector: 'Proptech / flexible office (Australia)',
		status: 'Ongoing',
		summary:
			'Replaced Dexus Place’s proprietary ASP.NET ThoughtStudio with a modern booking and billing platform — workspace & meeting-room booking, membership entitlements, GST-aware invoicing, Stripe payments, catering, and admin/finance reporting (JDE). Built on Next.js, Payload CMS v3, and PostgreSQL; cut over from Microsoft Access / SQL Server with a validated legacy data migration. UAT through production launch June 2026; post-launch catch-up for membership billing, hours, and historical payments.',
		snapshot: [
			{
				label: 'Client',
				value:
					'Dexus Place (operated by The Work Project) — premium meeting rooms, event spaces, and flexible workspace across Sydney, Melbourne, Perth, and Brisbane CBDs.',
			},
			{
				label: 'Sector',
				value: 'Proptech / flexible office (Australia).',
			},
			{
				label: 'What',
				value:
					'Full platform replacement: bookings, memberships & company-hours entitlements, invoices/credit notes, Stripe, catering extras, admin ops, and JDE-ready financial export — plus legacy SQL Server → PostgreSQL migration with integrity validation.',
			},
			{
				label: 'Team model',
				value:
					'Lean pod shared with the TWP platform partnership (≈1 PM, 1 designer, 1–3 developers); weekly sprint cadence through UAT, cutover, and post-launch stabilisation.',
			},
			{
				label: 'Submitted by',
				value: 'Shortcut Asia Sdn. Bhd.',
			},
		],
		deliveryArc: [
			{
				period: 'Early–mid 2025',
				title: 'Discovery & foundation',
				description:
					'Mapped legacy ThoughtStudio (ASP.NET + SQL Server / Access) domains — orgs, rooms, bookings, payments, packages/memberships — and stood up the greenfield stack: Next.js App Router, Payload CMS v3, PostgreSQL, S3, better-auth.',
			},
			{
				period: 'Mid–late 2025',
				title: 'Core booking & payments',
				description:
					'Timezone-aware availability and checkout; dual booking/payment status; Stripe PaymentIntents; direct-transfer and admin hold flows; catering/extras; discount codes; immutable tax invoices with GST and credit notes.',
			},
			{
				period: 'Late 2025 → early 2026',
				title: 'Memberships, entitlements & admin',
				description:
					'Organisation memberships, monthly company hours / credit wallet, recurring membership billing, expenses, multi-room shared checkout, reschedule with entitlement return, and admin/member portals.',
			},
			{
				period: 'Q1–Q2 2026',
				title: 'UAT, migration & cutover',
				description:
					'Module UAT (auth → search → booking → payments → refunds → admin reporting), parallel observation of legacy vs new stack, phased ETL from SQL Server with dry-runs and rollback scripts, production launch June 2026.',
			},
			{
				period: 'Jun–Jul 2026',
				title: 'Post-launch catch-up & hardening',
				description:
					'Org/membership billing catch-up, cancelled-booking payments, recurring services, company-hours backfill, JDE accounting-code export, access hardening on financial APIs, and operational billing (finance-triggered cycles).',
			},
		],
		highlights: [
			{
				title: 'Legacy platform replacement',
				description:
					'Retired proprietary ASP.NET ThoughtStudio in favour of Node / TypeScript / Next.js / Payload CMS / PostgreSQL on AWS — same operational surface (bookings, members, finance) with a maintainable CMS-backed architecture.',
			},
			{
				title: 'Booking & checkout',
				description:
					'Member and admin booking across cities → properties → workspaces; slot hold; card (Stripe) vs direct transfer; multi-room shared invoice; catering/extras; vouchers and admin discount overrides; cancel/reschedule with policy-driven fees and entitlement return.',
			},
			{
				title: 'Invoicing & payments',
				description:
					'Auto-generated immutable tax invoices, GST calculation, credit notes / amendment credits, refunds, expenses and ad-hoc membership charges, Stripe webhook reconciliation, and dual status (booking vs payment).',
			},
			{
				title: 'Memberships & entitlements',
				description:
					'Package/suite/address memberships, monthly rent + deposit billing, recurring services, company-hours pools and credit wallets, and checkout that draws entitlements before or alongside cash.',
			},
			{
				title: 'Finance & JDE reporting',
				description:
					'Admin financial reports with JDE consolidation — payment-line export using property accounting codes + catalogue payment codes for finance hand-off.',
			},
			{
				title: 'Legacy data migration',
				description:
					'Phased SQL Server / Access → PostgreSQL ETL (orgs, rooms, bookings, payments, memberships, invoices) with integrity checks, apply/rollback SQL artefacts, and post-cutover catch-up scripts for billing, hours, and historical payment gaps.',
			},
			{
				title: 'Delivery & cutover discipline',
				description:
					'PRD-aligned UAT by module, migration dry-runs, parallel observation (not dual-write), then traffic cutover — followed by targeted catch-up rather than a big-bang rewrite of history.',
			},
		],
		tech: [
			'Next.js',
			'Payload CMS v3',
			'TypeScript',
			'React',
			'PostgreSQL',
			'AWS (EB / ECR / S3 / SES)',
			'Stripe',
			'better-auth',
			'Python (ETL)',
		],
		features: [
			'Workspace & meeting-room booking',
			'Membership billing & entitlements',
			'GST invoices, credit notes & refunds',
			'Stripe + direct-transfer payments',
			'Catering & extras catalogue',
			'Admin, member & public portals',
			'JDE-ready financial export',
			'Legacy SQL Server migration',
		],
	},
	{
		name: 'cineklik-dayu',
		title: 'CineKlik',
		tagline: 'Box-office collections, reconciliation & film-finance platform for Malaysian distribution',
		period: '2025 → ongoing 2026',
		sector: 'Film distribution / cinema analytics (Malaysia · ASEAN)',
		status: 'Ongoing',
		summary:
			'Built CineKlik for D’Ayu Pictures — a distributor/producer ops platform that turns fragmented cinema-chain daily and weekly box-office PDFs into structured collections, reconciles weekly reports against daily data, and runs multi-party revenue waterfalls through to P&L views and cinema invoicing. Greenfield on Next.js, Payload CMS v3, and PostgreSQL; Malaysia-first chain parsers (GSC, TGV, MBO, and more) with ASEAN go-to-market positioning.',
		snapshot: [
			{
				label: 'Client',
				value:
					'D’Ayu Pictures Sdn Bhd — Malaysian film distributor and co-producer; operationalised as the CineKlik product (cineklik.co / app.cineklik.com).',
			},
			{
				label: 'Sector',
				value: 'Film distribution / cinema analytics (Malaysia · ASEAN).',
			},
			{
				label: 'What',
				value:
					'End-to-end cinema collections platform: PDF/OCR ingestion for daily & weekly reports, chain-specific parsers, weekly-vs-daily reconciliation, cinema share rules & partnerships, film cost tracking, four-layer finance waterfalls with role-based P&L, dashboards, and cinema-collection invoicing (PDF + email).',
			},
			{
				label: 'Team model',
				value:
					'Lean delivery pod (Shortcut Asia) with product, design, and engineering cadence from domain foundation through OCR, finance, and ops hardening.',
			},
			{
				label: 'Submitted by',
				value: 'Shortcut Asia Sdn. Bhd.',
			},
		],
		deliveryArc: [
			{
				period: 'Mid–late 2025',
				title: 'Discovery & domain foundation',
				description:
					'Stood up the greenfield stack (Next.js App Router, Payload CMS v3, PostgreSQL, S3, better-auth) and modelled core domains — films, cinemas & locations, daily collections, partnerships, and share rules — replacing spreadsheet-centric tracking.',
			},
			{
				period: 'Late 2025 → early 2026',
				title: 'OCR ingestion & multi-chain parsers',
				description:
					'PDF text extraction and chain templates for daily uploads; weekly parsers for major Malaysian exhibitors (TGV, GSC, MBO, 10 STAR, LFS, AE, Mega, Paragon, One Cineplex, MMC); film-title matching and preview-to-bulk-create flows.',
			},
			{
				period: 'Early 2026',
				title: 'Reconciliation, finance & invoicing',
				description:
					'Weekly-as-truth reconciliation (by-day and by-location for GSC/LFS); accept/reject diffs and bulk correction; film financials aggregation; four-layer waterfall (cinema → film costs → distributor → producer/partners); invoice generation, PDF export, and email.',
			},
			{
				period: 'Spring–summer 2026',
				title: 'Ops polish & hardening',
				description:
					'Reconciliation UX, manual weekly checks, sample formats, share-rule overrides, budget-vs-actual costs with audit trail, access control, DAL consolidation, and distributor/producer-facing dashboards.',
			},
		],
		highlights: [
			{
				title: 'Chain fragmentation as software',
				description:
					'Malaysian exhibitors issue non-standard daily/weekly PDFs. CineKlik encodes chain-specific parsers and templates so ops staff upload reports instead of re-keying GBO, admissions, and tax into spreadsheets.',
			},
			{
				title: 'Weekly-as-truth reconciliation',
				description:
					'Daily collections are ingested fast; weekly cinema reports remain the source of truth. By-day or by-location comparison flags variances, supports accept/reject, and bulk-updates daily records.',
			},
			{
				title: 'Partnerships & cinema share rules',
				description:
					'Film–cinema–location partnerships with weekly share percentages and overrides — so producer share is computed from GAT and cinema take, not ad-hoc formulas.',
			},
			{
				title: 'Four-layer film finance waterfall',
				description:
					'GBO → tax/cinema share → film production/distribution/marketing costs → distributor fees → producer/partner splits, with role-gated P&L views for admin, producer, distributor, and partner.',
			},
			{
				title: 'Collections → invoices',
				description:
					'Cinema-collection invoices generated from reconciled numbers, rendered as PDF, emailed from CineKlik, with payment status tracked in-platform.',
			},
			{
				title: 'Productised brand (CineKlik)',
				description:
					'Client ops for D’Ayu shaped a marketable ASEAN platform — public site and admin portal under CineKlik, with Malaysia-depth OCR/finance as the proven core.',
			},
		],
		tech: [
			'Next.js 15',
			'Payload CMS v3',
			'TypeScript',
			'React 19',
			'PostgreSQL',
			'better-auth',
			'TanStack Query',
			'Tailwind CSS 4 / shadcn',
			'pdf-parse (OCR)',
			'@react-pdf/renderer',
			'S3 / MinIO',
			'Resend / Nodemailer',
			'Docker (ECS / Render)',
		],
		features: [
			'Daily & weekly box-office PDF upload',
			'10+ Malaysian cinema-chain parsers',
			'Weekly-vs-daily reconciliation',
			'Cinema partnerships & share rules',
			'Film costs (budget vs actual)',
			'Multi-party P&L / finance waterfall',
			'Dashboards (GBO, GAT, admissions, health)',
			'Cinema invoicing (PDF + email)',
			'Role-based finance visibility',
			'Payload CMS admin portal',
		],
	},
	{
		name: 'midas',
		title: 'Midas',
		tagline: 'Short-link payment gateway for multi-tenant wellness checkout',
		period: 'Oct → Dec 2023',
		sector: 'Digital health / corporate wellness payments (Malaysia · Singapore · SEA)',
		status: 'Archived',
		summary:
			'Built Midas (Team Phoenix) — a NestJS payment microservice that turns sponsor-tied checkout requests into short payment links, orchestrates Stripe PaymentIntents, brands the flow per tenant, and syncs status via webhooks. Greenfield backend paired with midas-ui; MYR/SGD/USD; deployed to AWS ECS with Liquibase/Prisma on PostgreSQL. Domained around sponsor-funded wellness enrollments rather than generic e-commerce.',
		snapshot: [
			{
				label: 'Client',
				value:
					'SEA mental-health & corporate wellness platform — operationalised as the Midas payment service with companion Payment UI (midas-ui).',
			},
			{
				label: 'Sector',
				value: 'Digital health / corporate wellness payments (Malaysia · Singapore · SEA).',
			},
			{
				label: 'What',
				value:
					'End-to-end payment orchestration API: create short payment URLs, redirect into a themed checkout UI, initiate/retrieve Stripe PaymentIntents, handle webhooks for payment status, expose tenant themes, and proxy subscription lookups for sponsor-code context.',
			},
			{
				label: 'Team model',
				value:
					'Lean delivery (Suria Labs / Team Phoenix): product engineering on the NestJS service and Stripe integration, with platform CI/CD and Docker/ECS hardening in parallel.',
			},
			{
				label: 'Submitted by',
				value: 'Suria Labs.',
			},
		],
		deliveryArc: [
			{
				period: 'Late Oct 2023',
				title: 'Scaffold & domain foundation',
				description:
					'Stood up NestJS + Fastify, Prisma/PostgreSQL, and core modules — payments, short URLs, and webhooks — replacing ad-hoc payment wiring with a dedicated payment microservice.',
			},
			{
				period: 'Early–mid Nov 2023',
				title: 'URL faucet, themes & dev deploy',
				description:
					'Create/redirect payment URLs, Liquibase migrations, tenant theme configs for midas-ui white-labeling, and GitHub Actions → ECR → ECS (dev-midas) on AWS ap-southeast-1.',
			},
			{
				period: 'Mid–late Nov 2023',
				title: 'Stripe checkout & observability',
				description:
					'Pluggable Stripe gateway (PaymentIntents + signed webhooks), currency support (MYR/SGD/USD), payment_gateway_record_id, short-URL reuse windows, Pino logging, and Swagger at /api.',
			},
			{
				period: 'Late Nov → mid Dec 2023',
				title: 'Sponsor domain & subscriptions BFF',
				description:
					'Renamed subscription_id → sponsor_code to match wellness funding language; proxied user/sponsor subscription reads; Terminus health checks; ops fixes for port, axios, and Stripe secrets.',
			},
		],
		highlights: [
			{
				title: 'Short-link payment faucet',
				description:
					'APIs mint nanoid short codes that 302 into midas-ui with tenant, payment, sponsor, and return-URL context — so product surfaces only need a link, not a full Stripe integration.',
			},
			{
				title: 'Sponsor-tied wellness checkout',
				description:
					'Payments carry sponsor_code (evolved from subscription_id), tying money collected to employer/sponsor offerings rather than anonymous cart checkout.',
			},
			{
				title: 'Multi-tenant branded UI',
				description:
					'Tenant themes (palette + fonts) stored and served by API so the same Payment UI white-labels per tenant without redeploying the frontend.',
			},
			{
				title: 'Pluggable Stripe gateway',
				description:
					'PaymentGateway interface with Stripe PaymentIntent initiate/status and webhook-driven success — structured for additional gateways without rewriting the payment domain.',
			},
			{
				title: 'Idempotent URL reuse',
				description:
					'Same user/tenant/sponsor in a processing window reuses the existing short link (≈15 minutes), avoiding duplicate checkout URLs during retries.',
			},
			{
				title: 'Platform-native deploy',
				description:
					'AWS ECS + ECR, Secrets Manager, reusable GitHub workflows, dual Prisma/Liquibase migrations on a shared payment database — Team Phoenix ops patterns from day one.',
			},
		],
		tech: [
			'NestJS 10',
			'Fastify',
			'TypeScript 5',
			'Prisma 5',
			'PostgreSQL',
			'Liquibase',
			'Stripe SDK 14',
			'Axios / @nestjs/axios',
			'nestjs-pino',
			'@nestjs/terminus',
			'@nestjs/swagger',
			'nanoid',
			'Jest / Supertest',
			'Yarn 4 (Berry)',
			'Docker → AWS ECR / ECS (ap-southeast-1)',
			'GitHub Actions (reusable workflows)',
		],
		features: [
			'Create payment + short URL (POST /payments/url)',
			'Short-link redirect to Payment UI',
			'Idempotent URL reuse (processing window)',
			'Stripe PaymentIntent initiate & status',
			'Stripe webhook (payment_intent.succeeded)',
			'Multi-currency (MYR, SGD, USD)',
			'Tenant theme API (palette + fonts)',
			'Payment history by user',
			'Subscriptions proxy (user / sponsor_code)',
			'Pluggable payment-gateway interface',
			'Swagger API docs',
			'Structured Pino logging',
			'Terminus + Prisma health checks',
			'Liquibase + Prisma migrations',
			'Dev CI/CD to ECS',
		],
	},
];

export function getProjectByName(name: string): Project | undefined {
	return projects.find((project) => project.name === name);
}
