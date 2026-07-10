**VISUALGV.COM**

*SaaS Platform for the Outdoor Advertising Industry*

Project Document v2 — Executive Report, Module Reference & Version Planning

**Owner: Gerardo Velázquez Carmona**

Domain: visualgv.com  |  Version 2.0  |  June 2026

**PART 1 — EXECUTIVE REPORT**

# **1\. What Is visualgv.com?**

visualgv.com is a multi-tenant B2B Software-as-a-Service platform built specifically for the outdoor advertising industry. It functions as an end-to-end operational command center that unifies digital asset creation, file authorization, printing, physical installation, GPS-verified proof-of-completion, and campaign reporting — in a single traceable workflow.

The platform bridges the gap between the creative world (digital files, artwork, layouts) and the physical reality of outdoor advertising (billboards, buses, screens, walls). Every step from a creative brief to the photo evidence of a completed installation is logged, authorized, and reportable.

## **1.1 The Problem It Solves**

Outdoor advertising agencies and brands currently operate across fragmented tools: shared folders for artwork, WhatsApp threads for approvals, spreadsheets for asset inventories, and manual PDFs for client reporting. This creates:

* No single source of truth for which artwork is approved and where it is installed

* Approval chaos — versions, forwards, screenshots — with no audit trail

* Files shared via WhatsApp or Telegram are lost in chat history and never organized

* No digital-to-physical linkage: which artwork version ended up on which billboard?

* Manual, error-prone reporting with no real-time visibility for clients or management

## **1.2 The Solution**

visualgv.com gives advertising agencies and brands a structured, role-aware system where files flow from briefing → creation (optionally with AI) → authorization → printing → installation → GPS evidence → matched to a physical asset → fully reportable. Every actor in the chain — creative, approver, printer, installer, client — has a defined role and a clear view of what they need to act on.

## **1.3 Killer Features**

* **Messaging app file intake:** Users can send files to the platform directly from WhatsApp or Telegram, without logging in. Files land in their account automatically, organized by campaign. This is the \#1 friction-reducer for field teams.

* **Authorization Chat:** A WhatsApp-style chat built into each file, with a formal Authorize button. Every approval is timestamped, attributed, and immutable — replacing screenshot-based approval chains.

* **Match Zone:** The only system that formally links a digital file to the specific physical surface it was installed on, creating a legally defensible proof-of-execution record.

* **AR Installation Verification (Roadmap):** During installation, the installer scans a QR code on the physical asset with their phone. Augmented reality overlays the approved artwork on the live camera view — instantly confirming the correct material is being installed on the correct surface.

* **White-label Marketplace (Roadmap):** Asset owners can list their physical advertising spaces for rent, and agencies can book them directly through the platform. visualgv.com earns a commission on each transaction.

# **2\. Key Facts at a Glance**

| Industry Focus Outdoor Advertising (OOH) | Business Model B2B SaaS \+ Marketplace Commission |
| :---- | :---- |
| Total Modules **18 (12 MVP \+ 6 roadmap)** | User Roles **5 distinct roles** |
| Pricing Tiers **4 (Starter → Enterprise)** | MVP Timeline **14–15 working days** |
| Infrastructure **DigitalOcean VPS \+ Docker \+ Cloudflare** | Domain Owner **Gerardo Velázquez Carmona** |

# **3\. Business Model & Revenue Streams**

visualgv.com has multiple revenue streams that grow together as the platform scales. More users means more campaigns, more file transactions, more assets managed, and more marketplace bookings — every growth metric amplifies revenue.

| Revenue Stream | How It Works | Who Pays | Est. Margin |
| :---- | :---- | :---- | :---- |
| **SaaS Subscriptions** | Monthly/annual platform fees across 4 tiers (Starter → Enterprise) | Agencies & brands | \~85% gross margin |
| **Marketplace Commission** | 10% fee on every advertising space booking made through the White-label Marketplace | Asset owners (sellers) | \~95% gross margin |
| **Storage Overage** | Charge per GB above plan limit | All subscribers | \~90% gross margin |
| **Enterprise Contracts** | Custom pricing, SLA, onboarding, dedicated support | Large clients | Negotiated |
| **WhatsApp/Telegram Credits** | Usage-based API cost pass-through for high-volume messaging | Pro/Enterprise tiers | \~30% margin |
| **AI Feature Upsell** | AI file creation, smart match, report narratives available as add-ons | Pro/Enterprise tiers | \~80% margin |

The network effect is significant: as more asset owners list their inventory in the Marketplace, more agencies are attracted to the platform. As more agencies use the platform, more asset owners want their inventory visible to them. The SaaS subscription revenue is recurring and predictable; the marketplace commission is variable and scales with transaction volume.

# **4\. Pricing Tiers**

| Feature | Starter | Intermediate | Pro | Enterprise |
| :---- | :---- | :---- | :---- | :---- |
| **Price** | $29/mo | $49/mo | $79/mo | Custom |
| **Organizations** | 1 | 1 | 5 | Unlimited |
| **Users** | 1 | 3 | 15 | Unlimited |
| **Storage** | 5 GB | 20 GB | 100 GB | Unlimited |
| **Campaigns** | 5 | 15 | Unlimited | Unlimited |
| **Telegram Bot** | — | ✓ | ✓ | ✓ |
| **WhatsApp Bot** | — | — | ✓ | ✓ |
| **AI File Creation** | — | — | Beta | ✓ |
| **AR Module** | — | — | ✓ (roadmap) | ✓ |
| **Marketplace Access** | — | — | ✓ | ✓ |
| **Priority Support** | — | — | Email | Dedicated SLA |

⚠  *The Starter tier validates product-market fit. Intermediate and Pro cover the majority of agency use cases. Enterprise pricing is negotiated directly with large clients or multi-agency groups.*

# **5\. User Roles & Personas**

The platform is role-aware from the ground up. Every action is governed by the user's role within a specific organization. Roles are scoped per organization — the same person can be an Owner in one organization and a Viewer in another.

| Role | Responsibilities | Key Permissions |
| :---- | :---- | :---- |
| **Master Admin (Owner)** | Creates org, invites users, manages billing, sees all data | Full CRUD on all modules \+ billing |
| **Brand Manager** | Uploads artwork, creates campaigns, manages personas, approves files via chat | Upload, authorize, manage campaigns & files |
| **Print Operator** | Receives print orders, updates print status, sends to installation | Read print queue, update print status |
| **Installer** | Receives installation orders, captures GPS photo evidence on mobile | Read install queue, upload evidence \+ GPS |
| **Client / Guest** | View-only on specific campaigns they have been invited to | Read-only on assigned campaigns |

# **6\. The Core Operational Workflow**

Every campaign follows this end-to-end pipeline. The table below defines each step, the key activities performed, and who is responsible.

| \# | Step | Description | Key Activities | Actor |
| :---- | :---- | :---- | :---- | :---- |
| 1 | **Create Organization & Campaign** | Set up the tenant, invite team members, assign roles, create campaign with name, dates and budget. | Name org, upload logo, set plan. Create campaign brief with client, dates, budget allocation. | Master Admin |
| 2 | **File Work Order (Briefing / Layout Brief)** | Before any file exists, create a brief describing what needs to be produced — the equivalent of an advertising agency briefing or layout brief. | Define file name, format, dimensions, campaign, assigned designer. Add creative brief text. Status: TO BE CREATED. | Brand Manager |
| 3 | **File Creation** | The file is produced — by a designer working externally, by uploading an existing file, or by an AI agent generating the creative. | Upload via drag-and-drop, paste external URL (Google Drive / Dropbox), receive via Telegram or WhatsApp bot, or trigger AI creation agent. Thumbnail is auto-generated. | Brand Mgr / Designer |
| 4 | **File Adaptation** | Adapt the master file to the technical specifications of each printing process (e.g. billboard vs. bus shelter vs. digital screen — different DPI, bleed, colour profile). | Select target print format. Apply format preset (dimensions, bleed, DPI, colour space). Generate adapted version as a new file version. | Brand Mgr / Designer |
| 5 | **Authorization Chat & Versioning** | Collaborate in the per-file chat to reach agreement on the artwork. Multiple versions can be uploaded and discussed before the formal authorization. | Post messages with comments. Upload a revised version (increments version counter). Tag team members. Client can view if given guest access. | Team / Client |
| 6 | **Formal Authorization** | Click the Authorize button. This is the official, timestamped approval — equivalent to a signed-off proof in traditional advertising production. | Review final version. Click Authorize. System records who authorized, which version, and when. File status changes to AUTHORIZED. Notification sent to Print Operator. | Brand Manager / Authorizer |
| 7 | **Print Work Order** | Create a print order with all technical specifications needed by the print shop. | Select printing machine, substrate material, dimensions (width x height cm), quantity, finishes (lamination, mounting), notes. Status: PENDING. | Brand Manager |
| 8 | **Printing** | Print Operator manages the print job through its production stages. | Update status: PENDING → IN\_PROGRESS → PRINTED. Add printing notes (colour calibration, incidents). Click 'Send to Install' when complete. | Print Operator |
| 9 | **Installation Work Order** | An installation order is created automatically when the print order is sent to install. The installer receives it in their queue. | Review installation details. Assign to specific physical asset from Inventory. Update status: PENDING → IN\_PROGRESS. Add site notes. | Installer |
| 10 | **AR Verification on Site (Roadmap)** | During installation, the installer scans the QR code on the physical asset. The AR module overlays the approved artwork on the camera view to confirm correct material and placement. | Open AR module on mobile. Scan asset QR code. Camera displays live AR overlay of the approved artwork. Screen shows CORRECT / MISMATCH confirmation. | Installer |
| 11 | **Match Zone** | Formally link the digital file to the physical asset it was installed on. This creates the permanent digital-to-physical record. | Select file from left panel. Select physical asset from right panel (or drag-and-drop). Confirm match. File status → MATCHED. Asset status → OCCUPIED. | Admin / Installer |
| 12 | **Evidence Upload** | Installer photographs the completed installation from their mobile device. Photos are GPS-tagged and timestamped. | Open camera or file picker on mobile. Upload 1–N photos. GPS coordinates captured automatically. Photos attached to Installation record. Status → WITH\_EVIDENCE. | Installer |
| 13 | **Reporting** | All campaign data aggregates into the Reports module. Clients and management see real-time KPIs and can export deliverables. | View pipeline funnel chart, asset utilization, evidence coverage. Filter by campaign, date, asset. Export PDF campaign report or CSV raw data. | Admin / Client |

# **7\. Technology Stack**

| Layer | Technology | Purpose |
| :---- | :---- | :---- |
| **Frontend** | Next.js 14+ (App Router) \+ TypeScript | SSR, routing, API routes in one monorepo |
| **UI** | Tailwind CSS \+ shadcn/ui | Design system, accessible components |
| **State** | Zustand \+ React Query | Global state \+ server-state caching |
| **Forms** | React Hook Form \+ Zod | Validation and form management |
| **Auth** | NextAuth.js v5 | Google OAuth \+ email magic link \+ sessions |
| **ORM / DB** | Prisma \+ PostgreSQL 16 | Type-safe DB access, migrations, multi-tenancy |
| **Cache** | Redis 7 | Session cache, background job queues (BullMQ) |
| **File Storage** | AWS S3 / DigitalOcean Spaces | All uploaded files, thumbnails, evidence photos |
| **Email** | Resend.com | Transactional emails, invitations, notifications |
| **Real-time** | Pusher | Authorization chat live messaging |
| **Maps** | Google Maps API | Asset location pins, GPS capture, live tracking |
| **Billing** | Stripe | Subscriptions, webhooks, invoices |
| **Infrastructure** | DigitalOcean VPS Ubuntu 24.04 | Docker \+ Nginx \+ PM2, 2 vCPU / 4 GB RAM |
| **CI/CD** | GitHub Actions → SSH deploy | Auto-deploy on push to main branch |
| **Monitoring** | Sentry \+ UptimeRobot | Error tracking \+ uptime alerts |
| **CDN / DNS** | Cloudflare free tier | DDoS protection, SSL, caching |
| **Messaging** | Telegram Bot API \+ WhatsApp (Phase 2\) | File intake from field messaging apps |
| **AR (Roadmap)** | WebXR API / AR.js | On-site AR overlay for installation verification |

# **8\. Product Versions & Roadmap**

The platform is planned across four major versions. Each version is a fully releasable product — not just a set of features. The table below shows which modules are included at each stage.

### **Version Summary**

* **v1 — MVP (Now Building):** The core operational workflow from file creation to matched evidence. Telegram Bot. Stripe billing. Target: agencies and brands who need to replace WhatsApp-based approvals and spreadsheet tracking.

* **v2 — Growth:** WhatsApp integration, AI file creation beta, AR beta, Portuguese language. Target: expanding to Brazil and other LatAm markets.

* **v3 — Scale:** GPS live tracking, full AR, White-label Marketplace beta, mobile app, AI auto-categorization, full 5-language support. Target: mid-market agencies managing 100+ assets.

* **v4 — Enterprise:** AI report generation, geofencing, Adobe integration, dedicated support SLA, custom languages. Target: regional and global OOH media companies.

| Module / Feature | v1 — MVP | v2 — Growth | v3 — Scale | v4 — Enterprise |
| :---- | :---- | :---- | :---- | :---- |
| **Authentication (email \+ Google OAuth)** | ✓ | ✓ | ✓ | ✓ |
| **Organizations & member management** | ✓ | ✓ | ✓ | ✓ |
| **Campaigns & sub-folders** | ✓ | ✓ | ✓ | ✓ |
| **Personas (CRM)** | ✓ | ✓ | ✓ | ✓ |
| **File upload \+ work orders** | ✓ | ✓ | ✓ | ✓ |
| **Authorization chat (real-time)** | ✓ | ✓ | ✓ | ✓ |
| **File versioning** | ✓ | ✓ | ✓ | ✓ |
| **File adaptation (print formats)** | Basic | Full | Full | Full |
| **Printing module** | ✓ | ✓ | ✓ | ✓ |
| **Installation module** | ✓ | ✓ | ✓ | ✓ |
| **Physical Asset Inventory** | ✓ | ✓ | ✓ | ✓ |
| **Match Zone** | ✓ | ✓ | ✓ | ✓ |
| **Evidence capture (GPS photo)** | ✓ | ✓ | ✓ | ✓ |
| **Reports \+ PDF/CSV export** | ✓ | ✓ | ✓ | ✓ |
| **Telegram Bot file intake** | ✓ | ✓ | ✓ | ✓ |
| **WhatsApp file intake** | — | ✓ | ✓ | ✓ |
| **Stripe billing** | ✓ | ✓ | ✓ | ✓ |
| **Landing page / marketing site** | ✓ | ✓ | ✓ | ✓ |
| **AI file creation (agent)** | — | Beta | ✓ | ✓ |
| **Augmented Reality (AR) module** | — | Beta | ✓ | ✓ |
| **GPS live tracking (mobile assets)** | — | — | ✓ | ✓ |
| **Multi-language (ES, EN, FR, PT, DE)** | EN+ES | EN+ES+PT | All 5 | All 5 \+ custom |
| **White-label Marketplace** | — | — | Beta | ✓ |
| **Mobile app (React Native)** | — | — | ✓ | ✓ |
| **AI auto-categorization** | — | — | ✓ | ✓ |
| **AI smart match suggestions** | — | — | ✓ | ✓ |
| **AI report narrative generation** | — | — | — | ✓ |
| **Geofencing alerts** | — | — | — | ✓ |
| **Adobe / Pixlr editing integration** | — | — | — | ✓ |
| **Dedicated customer success** | — | — | — | ✓ |

# **9\. Promise to Investors & Developers**

### **To Investors**

Every metric that matters — users, campaigns, files processed, assets managed, marketplace transactions — feeds the same revenue model. The platform has multiple compounding growth loops:

* More agencies on the platform → more asset owners want to list on the Marketplace → more agencies attracted → network effect

* More files processed → more storage revenue → more AI feature usage → more upsell

* WhatsApp/Telegram integration is a zero-friction adoption driver for field teams who will never log into a web platform voluntarily

* The Match Zone data — which creative ran on which surface, when, with what evidence — is uniquely valuable data that no competitor has systematically captured

* Switching costs are high once an organization's campaign history, asset inventory, and evidence archive are on the platform

### **To Developers**

The architecture is designed to be maintainable, testable, and AI-agent-friendly from day one:

* TypeScript throughout — no any types, explicit interfaces everywhere

* Monorepo — frontend, backend, and DB schema in one repo, one deployment

* Prisma schema is the single source of truth for the data model

* Every module is a self-contained folder under /components/modules/ and /app/(dashboard)/

* All API routes include Zod validation — safe to extend without breaking existing clients

* CLAUDE.md / .cursorrules file in repo root gives AI coding agents full project context

* No file longer than 500 lines — split by design for readability and AI context window efficiency

**MODULE INDEX**

The following table lists every module in the platform, what it does, and who uses it. Modules M1–M14 are included in the MVP or early growth versions. M15–M18 are roadmap items.

| \# | Module | What It Does | Primary Users |
| :---- | :---- | :---- | :---- |
| **M1** | **Authentication & User Management** | Login, registration, session, profile | All users |
| **M2** | **Organizations** | Multi-tenant containers, member invite, roles | Admin / Owner |
| **M3** | **Campaigns & Sub-Folders** | Project hierarchy, dates, budget | Admin / Brand Mgr |
| **M4** | **Personas (CRM)** | Contacts, GPS location, professional match | Admin / Brand Mgr |
| **M5** | **Files & Digital Asset Management** | Upload, work orders, versioning, intake | Brand Mgr / Team |
| **M6** | **File Adaptation** | Format conversion for different print processes | Brand Mgr |
| **M7** | **Authorization Chat** | Per-file real-time approval with audit trail | Team / Authorizer |
| **M8** | **Industries — Printing** | Print orders, machine specs, status workflow | Print Operator |
| **M9** | **Industries — Installation** | Install orders, assign to asset, field use | Installer |
| **M10** | **Inventory of Physical Assets** | Asset catalog, GPS, QR codes, map view | Admin |
| **M11** | **Match Zone** | Digital-to-physical formal reconciliation | Admin / Installer |
| **M12** | **Evidences** | GPS-tagged photo proof of installation | Installer |
| **M13** | **Reports** | KPI dashboard, pipeline charts, PDF/CSV export | Admin / Client |
| **M14** | **Telegram & WhatsApp Bot** | File intake from messaging platforms | All field users |
| **M15** | **Augmented Reality (Roadmap)** | On-site AR overlay to verify installation | Installer |
| **M16** | **GPS Live Tracking (Roadmap)** | Real-time tracking of mobile assets | Admin |
| **M17** | **White-label Marketplace (Roadmap)** | Owners list & rent advertising spaces | Asset Owners |
| **M18** | **Billing & Subscriptions** | Stripe plans, usage limits, invoices | Admin / Owner |

**PART 2 — MODULE REFERENCE & FEATURE EXPLANATION**

This section provides a detailed explanation of each module: what it does, what features the user interacts with, how it connects to other modules, and open questions that need resolution before or during development.

# **M1 — Authentication & User Management**

Every user must authenticate before accessing any module. The system supports two sign-in methods to reduce friction and support the agency context where Google Workspace is common.

| Feature | Detail |
| :---- | :---- |
| **Login page** | Email/password form \+ Google OAuth button. Minimal, clean design. |
| **Registration** | Email \+ password. Triggers welcome email via Resend.com. |
| **Google OAuth** | One-click sign-in with Google. No password to manage. |
| **Forgot password** | Magic link sent by email, expires in 30 minutes. |
| **Session management** | NextAuth.js v5 JWT in secure HTTP-only cookies. |
| **User profile** | Name, photo, email, connected Telegram account, notification preferences. |
| **Protected routes** | Middleware redirects unauthenticated users to /login for all /dashboard/\* routes. |

# **M2 — Organizations**

The Organization is the top-level multi-tenant container. All data — campaigns, files, assets, personas — belongs to an organization. Strict isolation ensures no cross-tenant data leakage.

| Feature | Detail |
| :---- | :---- |
| **Create organization** | Name, logo upload, industry field. Generates a URL-safe slug. |
| **Organization switcher** | Users in multiple orgs can switch context from the sidebar header. |
| **Invite by email** | Enter email \+ role. Time-limited invite token sent via email. |
| **Member management** | List all members, roles, and join dates. Edit or remove members. |
| **Role assignment** | Owner, Admin, Editor, Viewer — scoped per org. |
| **Billing linkage** | Each org has its own Stripe subscription. Plan enforced at org level. |
| **Archive org** | Hides the org from active views but preserves all data. |

# **M3 — Campaigns & Sub-Folders**

Campaigns are the primary project containers within an organization. They hold files, personas, print orders, installations, and assets together. Sub-folders, events, and projects are nested levels within a campaign.

| Feature | Detail |
| :---- | :---- |
| **Create campaign** | Name, description, client, start date, end date, budget. |
| **Campaign hierarchy** | Campaign → Sub-folder / Event / Project → further nesting as needed for the org's workflow. |
| **Status badge** | Draft / Active / Completed / Archived. |
| **Invite collaborators** | Add org members or external guests to specific campaigns with role scoping. |
| **Campaign overview** | Dashboard card showing file count, completion %, pending actions, budget spent. |
| **Campaign archive** | Completed campaigns are archived with all their data intact for reporting. |

# **M4 — Personas (CRM)**

Personas is the lightweight CRM layer. It stores contacts — clients, vendors, contractors, installers — linked to the organization and optionally to specific campaigns.

| Feature | Detail |
| :---- | :---- |
| **Create persona** | Name, profession, company, email, phone, follow-up date, business notes. |
| **GPS location** | Attach a geographic location (static address) to a persona. |
| **Professional matching** | Tag a persona with a specialty to surface them when assigning work. |
| **Link to campaigns** | Assign personas as collaborators or points of contact within campaigns. |
| **Invite to platform** | Send a platform invitation directly from a Persona record. |

# **M5 — Files & Digital Asset Management**

The Files module manages all digital assets: artwork, designs, photographs, PDFs, and external cloud links. Every file follows a defined status lifecycle through the operational workflow.

### **File Intake Methods**

* **Direct upload:** Drag-and-drop zone or Browse device button. Supports images, PDFs, videos, design files up to 500 MB.

* **External URL:** Paste a Google Drive, Dropbox, or OneDrive link. Stored as externalUrl — no re-upload.

* **Telegram Bot:** Files sent to the org's Telegram bot appear in the upload queue automatically (source \= TELEGRAM).

* **WhatsApp Bot (v2):** Same mechanic via WhatsApp Business API. Files organized into the user's account by campaign.

* **AI Creation Agent (v2/v3):** Trigger an AI agent to generate artwork based on the work order brief. The generated file enters the same authorization workflow.

| Feature | Detail |
| :---- | :---- |
| **File Work Order (Briefing)** | Create a brief for a file that does not yet exist. Called a 'briefing' or 'layout brief' in advertising agencies. Captures: file name, format, dimensions, campaign, assigned creator, creative brief text. Status: TO\_BE\_CREATED. |
| **Thumbnail generation** | Auto-generated on upload using the Sharp library. Displayed as card preview. |
| **File metadata** | Name, extension, MIME type, size, upload date, uploader, campaign, version number. |
| **Grid / list view** | Toggle between card thumbnails and a detailed sortable list. |
| **File versioning** | Each re-upload of the same file increments the version counter. All previous versions are retained and accessible. Users can compare versions in the authorization chat. |
| **3-dot action menu** | View full file, Rename, Share link, Send to Print, Archive, Delete. |
| **Status badge** | Visual indicator of the current lifecycle stage (see workflow table). |
| **Search & filter** | Filter by status, campaign, uploader, date range, file type. |

### **File Status Lifecycle**

| Status | Meaning | Next Possible Status |
| :---- | :---- | :---- |
| **TO\_BE\_CREATED** | Work order created, file not yet uploaded | PENDING (once uploaded) |
| **PENDING** | File uploaded, not yet in review | IN\_REVIEW |
| **IN\_REVIEW** | Authorization chat is active | AUTHORIZED or REJECTED |
| **AUTHORIZED** | Formally approved via the Authorize button | SENT\_TO\_PRINT |
| **REJECTED** | Rejected during authorization — requires revision | PENDING (after revision upload) |
| **SENT\_TO\_PRINT** | Print order created | SENT\_TO\_INSTALL (after printing) |
| **SENT\_TO\_INSTALL** | Print operator marked as printed | MATCHED (after Match Zone) |
| **MATCHED** | Formally linked to a physical asset | Final state (can be archived) |

# **M6 — File Adaptation**

Before sending a file to print, it must be adapted to the technical specifications of the target printing process. A billboard requires different dimensions, bleed, DPI, and colour profile than a bus shelter, a digital screen, or a poster. This module manages those adaptations.

| Feature | Detail |
| :---- | :---- |
| **Format presets** | Library of predefined print format presets per asset type (billboard 14x48ft, bus shelter 4x6ft, digital screen 1920x1080px, etc.). |
| **Adaptation parameters** | Width, height, bleed (mm), DPI/PPI resolution, colour profile (CMYK for print, RGB for digital), file format output (PDF/X-1a, TIFF, PNG). |
| **Generate adapted version** | Creates a new file version tagged as 'Print-Ready'. Links back to the original master file. |
| **Dimension validation** | The system can warn if the adapted file dimensions do not match the target physical asset's registered dimensions. |
| **Multiple adaptations** | One master file can generate multiple adapted versions for different asset types within the same campaign. |

# **M7 — Authorization Chat**

The Authorization Chat is the official approval mechanism for artwork before it proceeds to production. It is a real-time, per-file chat thread with a formal Authorize action — replacing WhatsApp approval chains with an auditable system.

| Feature | Detail |
| :---- | :---- |
| **Chat thread per file** | Each file has its own isolated chat. Messages are stored permanently. |
| **Real-time messaging** | Powered by Pusher. Messages appear instantly. Left/right bubble layout (WhatsApp-style). |
| **File versioning in chat** | Upload a revised version directly within the chat thread. The new version is visible and discussable in context. |
| **Participant notifications** | Email notification to all file collaborators when a new message is posted (via Resend). |
| **Authorize button** | Prominent button below the file thumbnail. Requires Editor role or above. |
| **Authorization record** | Records: who authorized, which file version, exact timestamp. Stored as ChatMessage with isAuthorization=true. Immutable. |
| **Status transition** | Clicking Authorize: file status → AUTHORIZED. 'Send to Print' option appears. Print Operator is notified. |
| **Client visibility** | Guests with view-only access can follow the chat and see approvals without being able to authorize. |

⚠  *This module directly replaces the practice of approving artwork via WhatsApp screenshots or email chains. The authorization record is the digital equivalent of a signed-off proof.*

# **M8 — Industries: Printing**

Once a file is authorized, it enters the print queue. The Printing module manages the production workflow for turning digital files into physical printed materials.

| Feature | Detail |
| :---- | :---- |
| **Print queue** | List of all files with status AUTHORIZED, sorted by date. Shows thumbnail, campaign, file name, adaptation version. |
| **Print Work Order** | Machine name, substrate material, width x height (cm), quantity, special finishes (lamination, mounting, cut), delivery instructions, notes. |
| **Status workflow** | PENDING → IN\_PROGRESS → PRINTED → SENT\_TO\_INSTALL |
| **Printing notes** | Free-text area for operator notes: colour calibration, incidents, deviations from spec. |
| **Send to Install** | Moves the record to the Installation queue. File status → SENT\_TO\_INSTALL. Installer is notified. |
| **Print history** | All completed print orders retained for audit and reporting. |

# **M9 — Industries: Installation**

The Installation module manages the physical deployment of printed materials. Installers operate primarily from mobile devices in the field, so the interface is fully mobile-optimized.

| Feature | Detail |
| :---- | :---- |
| **Installation Work Order** | Created automatically when a print order is sent to install. Contains all print order details \+ target asset info. |
| **Install queue** | List of files with status SENT\_TO\_INSTALL, assigned to this installer. |
| **Assign to asset** | Dropdown (or QR scan on mobile) to select the target physical asset from Inventory. |
| **Status workflow** | PENDING → IN\_PROGRESS → INSTALLED → WITH\_EVIDENCE |
| **Installation notes** | On-site notes: address confirmation, access issues, team members, incidents. |
| **Send to Match Zone** | Once installed, the record is forwarded to Match Zone for formal file-to-asset linkage. |
| **Mobile-optimized UI** | All controls are touch-friendly. Designed for use with gloves or on a phone mounted in a vehicle. |

# **M10 — Inventory of Physical Assets**

The Inventory is the catalog of every physical advertising surface the organization owns or manages. Think of it as an Amazon-style product catalog for outdoor advertising locations. This is one of the most strategically important modules — without an accurate inventory, Match Zone, Reports, and the Marketplace cannot function.

### **Asset Types**

| Type | Description | Examples |
| :---- | :---- | :---- |
| **PHYSICAL\_FIXED** | Stationary advertising surface with a permanent location | Billboards, bus shelters, walls, street furniture, poster frames |
| **PHYSICAL\_MOBILE** | Vehicle carrying printed material. Location changes over time | Trucks, buses, taxis, motorbikes with print |
| **DIGITAL\_FIXED** | Electronic screen at a fixed location | LED digital screens, digital kiosks, airport displays |
| **DIGITAL\_MOBILE** | Vehicle with a digital screen. Both mobile and digital | Trucks or trailers with LED screen panels |

### **Asset Record Fields**

| Field | Detail |
| :---- | :---- |
| **Name** | Human-readable identifier (e.g. 'Reforma Billboard — North Face'). |
| **SKU / QR Code** | Unique ID. QR code auto-generated; can be printed and physically attached to the asset for field scanning. |
| **Asset type** | Physical Fixed / Physical Mobile / Digital Fixed / Digital Mobile. |
| **Sub-type** | Billboard, bus stop, truck, wall, digital screen, etc. |
| **Address** | Street address of the asset location. |
| **Latitude / Longitude** | GPS coordinates. Entered manually or captured via 'Use My Location' on mobile. |
| **Dimensions** | Width x height in cm. Used for print adaptation dimension validation. |
| **Number of faces** | How many advertising faces the asset has (e.g. a billboard may have 2 independent faces). |
| **Thumbnail photo** | Reference photo of the asset location for visual identification. |
| **Days available** | For marketplace use: which days/periods this asset is available for booking. |
| **Notes** | Access restrictions, site contact, installation team notes. |
| **Active status** | Toggle active / inactive (maintenance, renovation, temporarily unavailable). |
| **Campaign history** | All campaigns this asset has served, with date ranges and matched files. |

### **Asset Views**

* **Table view:** Sortable and searchable list. All key fields visible. Bulk actions available.

* **Card view:** Visual grid with thumbnail photo, name, type, and current availability status.

* **Map view:** Google Maps embed with one pin per fixed asset. Color-coded by status (active/idle/maintenance). Click pin for details and quick actions.

### **Bulk Import**

Assets can be imported in bulk via CSV. Required fields: name, SKU, type, address, latitude, longitude, width, height. This is critical for organizations migrating from spreadsheet-based inventories.

### **QR Code Generation**

Each asset automatically receives a QR code encoding its platform URL. This QR can be printed on a label and physically attached to the asset in the field. Installers scan it on mobile to open the asset record, log evidence, or trigger the AR verification module.

**\[ ? \]  Multi-face assets:** A billboard with 2 faces can hold 2 different campaigns simultaneously. Define how to assign separate files to separate faces within one asset record.

**\[ ? \]  Asset availability status:** Should the system auto-derive availability from active MatchZone records, or have an explicit availability toggle? Define for MVP.

**\[ ? \]  Dimension validation:** Should the system warn or block when print order dimensions do not match the registered asset dimensions? Prevents costly reprints.

# **M11 — Match Zone**

Match Zone is the formal reconciliation step between the digital and physical worlds. It answers the critical question: which artwork is currently displayed on which physical surface? This is the intelligence layer that differentiates visualgv.com from a simple file management tool.

After installation is complete and the record is forwarded to Match Zone, a user formally links the digital file to the physical asset. This creates a MatchZone record — a permanent, timestamped, auditable pairing.

| Feature | Detail |
| :---- | :---- |
| **Left panel** | All files that have been installed and are awaiting formal matching (status \= SENT\_TO\_INSTALL or INSTALLED). |
| **Right panel** | All physical assets from Inventory filtered to available (not currently matched to an active campaign). |
| **Matching interaction** | Drag the file thumbnail onto the asset card — or use the 'Select Asset' dropdown per file row. A map-based picker is available for large inventories. |
| **Match creation** | Creates MatchZone record. Updates File status → MATCHED. Updates Asset status → OCCUPIED. Updates Installation status → INSTALLED. |
| **Match record fields** | fileId, assetId, installationId, matchedAt timestamp, optional notes. Immutable once confirmed. |
| **Unmatching** | Admin can unmatch a record if an error was made, reverting all statuses with an audit log entry. |
| **Match history** | View all historical matches per asset or per campaign, with date ranges. |

### **Why Match Zone Powers Everything Else**

The MatchZone record is the data backbone for the most valuable outputs on the platform: campaign completion rates, asset utilization, evidence coverage, and client-facing proof-of-execution reports. Without Match Zone, reports can only show activity — not outcomes.

**\[ ? \]  Large inventory UX:** When an org has 200+ assets, the dropdown becomes impractical. Implement a map-based asset picker or geolocation-filtered search panel for Match Zone in v2.

# **M12 — Evidences**

Evidences is the photo-proof module. After installation, the installer uploads one or more photographs from their phone. Photos are GPS-tagged and timestamped, creating an immutable record of where and when the installation was completed — the foundation of any proof-of-execution report delivered to a client.

| Feature | Detail |
| :---- | :---- |
| **Photo upload** | Mobile-optimized. Upload from phone camera or file picker. |
| **GPS auto-capture** | Browser Geolocation API captures current lat/long on mobile upload. |
| **Timestamp** | Server-side capturedAt timestamp on every evidence upload. |
| **Multiple photos** | Multiple evidence photos per installation record. |
| **Evidence gallery** | Grid of photos per campaign. Filterable by asset, date, installer. |
| **Status update** | Uploading evidence → Installation status changes to WITH\_EVIDENCE. |
| **Client visibility** | Guests with view-only access can see evidence photos for their campaigns. |

# **M13 — Reports**

The Reports module aggregates all platform data into operational KPIs and client-ready deliverables. It covers the full funnel: from files created to files installed with evidence.

| Report / View | Detail |
| :---- | :---- |
| **Pipeline funnel chart** | Files: created → uploaded → authorized → sent to print → installed → matched → with evidence. Shows conversion at each step. |
| **Campaign progress** | Per-campaign completion % based on files through the full workflow. |
| **Asset utilization** | Which assets are active, idle, or under maintenance. Time occupied per asset. |
| **Evidence coverage** | Matched files vs. files with evidence uploaded. Gap \= missing proof-of-completion. |
| **New report creation** | Create a custom report selecting which data points to include. |
| **Filters** | Filter all views by Organization, Campaign, Date range, Asset type, Status. |
| **Export to PDF** | Formatted client-ready PDF report: campaign summary \+ timeline \+ evidence photo gallery. |
| **Export to CSV** | Raw data export for analysis in Excel or Sheets. |

# **M14 — Telegram & WhatsApp Bot Integration**

The messaging bot integration is the platform's most powerful adoption driver. Field teams — photographers, installers, contractors — already communicate via Telegram and WhatsApp. Instead of forcing a behavior change, visualgv.com meets them where they are: files sent to the org's bot automatically land in the right account, organized by campaign.

| Feature | Detail |
| :---- | :---- |
| **Telegram Bot (MVP)** | Each org gets its own bot token via @BotFather. Registered in Settings. |
| **WhatsApp Bot (v2)** | Same mechanic via Meta Cloud API or Twilio WhatsApp Business API. |
| **User account linking** | In Settings, user generates a unique /link CODE. Sent to the bot from their Telegram/WhatsApp to connect identities. |
| **File intake** | User sends a file to the bot. Platform downloads from Telegram/WhatsApp servers, uploads to S3, creates File record with source=TELEGRAM or WHATSAPP. |
| **Campaign assignment** | Bot asks (or auto-assigns based on the user's active campaign) which campaign the file belongs to. |
| **Confirmation message** | Bot replies with file name, assigned campaign, and a deep link into the platform. |
| **Webhook security** | POST /api/webhooks/telegram signature verified for every request. |

⚠  *This feature directly solves the \#1 complaint from field teams: 'I already sent the photo on WhatsApp — why do I have to upload it again?' With this integration, they never have to.*

# **M15 — Augmented Reality Verification (Roadmap — v2/v3)**

The AR module turns the physical asset's QR code into a portal for installation verification. During installation, the installer points their phone camera at the physical surface. The system overlays the approved digital artwork on the live camera view and confirms — visually, in real time — whether the correct material is being installed on the correct surface.

| Feature | Detail |
| :---- | :---- |
| **QR code scanning** | Installer scans the QR code printed on the physical asset (or its label). |
| **AR artwork overlay** | The approved, authorized file version is fetched and rendered as an AR overlay on the camera view. |
| **CORRECT / MISMATCH confirmation** | If the scanned asset's registered file matches the Installation Work Order, the screen shows a green CORRECT confirmation. If mismatched, it shows a red MISMATCH alert. |
| **Technology** | WebXR API (browser-based, no app install) or AR.js for broader device compatibility. |
| **Integration points** | Reads from: Installation Work Order (target file), Physical Asset Inventory (QR → asset ID), Files module (authorized file version thumbnail). |
| **Evidence trigger** | A confirmed correct installation can auto-trigger the Evidence upload prompt. |

⚠  *This is a 'Coming Soon' feature in the MVP sidebar. The QR code infrastructure (generated in Inventory) is built in MVP — the AR overlay rendering is the Phase 2 addition.*

# **M16 — GPS Live Tracking (Roadmap — v3)**

For organizations with mobile assets — trucks, buses, vehicles carrying prints or digital screens — the GPS Live Tracking module provides real-time location visibility on a map.

| Feature | Detail |
| :---- | :---- |
| **Live location tracking** | Mobile assets (PHYSICAL\_MOBILE, DIGITAL\_MOBILE) broadcast location via the installer's phone GPS. |
| **Real-time map** | Google Maps view with live-updating pins for all mobile assets currently in the field. |
| **Route history** | Playback of a mobile asset's trajectory during a campaign day. |
| **Geofencing (v4)** | Alert when a mobile asset enters or leaves a defined geographic zone. |

# **M17 — White-label Marketplace (Roadmap — v3/v4)**

The Marketplace is a separate but integrated product layer that opens a new revenue stream for the platform and for asset owners. Physical advertising space owners — billboard companies, bus operators, building owners, transit authorities — can list their available inventory for rent. Advertising agencies browse and book spaces directly through the platform. visualgv.com earns a commission on each transaction.

### **Why This Is a Separate System (But Integrated)**

The Marketplace has its own user flow, pricing logic, and transaction management that is distinct from the operational workflow of the main platform. It is best thought of as a separate product that shares the asset inventory data. The physical assets already registered in M10 (Inventory) become the listing catalog for the Marketplace automatically — no double entry.

| Feature | Detail |
| :---- | :---- |
| **Asset listing** | Asset owners activate their inventory for marketplace listing. Set available days, pricing (daily/weekly/monthly rate), minimum booking duration. |
| **Asset listing page** | Name, location, dimensions, photos, type, available calendar, pricing. Similar to Airbnb or Amazon seller listings. |
| **Availability calendar** | Visual calendar showing booked and available periods per asset. |
| **Photos of the asset** | Multiple photos to showcase the physical advertising surface to potential buyers. |
| **Search & browse** | Agencies search by location, asset type, dimensions, date range, and price. |
| **Booking & payment** | Stripe-powered checkout. Payment held until booking is confirmed by owner. |
| **Commission model** | visualgv.com retains 10% (or negotiated %) of each transaction. Owner receives the remainder. |
| **Owner dashboard** | Revenue tracking, booking history, calendar management, payout settings. |
| **Integration with workflow** | A booked asset can be pre-assigned to a campaign. When the campaign file reaches Installation, the asset is already reserved. |

### **Revenue Model for the Marketplace**

This is the highest-margin revenue stream on the platform. The transaction cost is minimal (Stripe processing \+ Cloudflare bandwidth). As inventory grows, the marketplace becomes a discovery platform in its own right — agencies visit just to browse available spaces, independently of any existing campaign workflow.

⚠  *OPEN POINT: The Marketplace is substantial enough to be a standalone product. Decide: (1) Is it a module within the same app or a separate subdomain (market.visualgv.com)? (2) Are Marketplace users the same users as the operational platform, or separate accounts? (3) Is the commission rate fixed at 10% or tiered by transaction size?*

# **M18 — Billing & Subscriptions**

Billing is managed through Stripe and enforced at the organization level. Every feature, storage limit, and user count is gated by the org's current plan.

| Feature | Detail |
| :---- | :---- |
| **Stripe Checkout** | Subscription creation via hosted Stripe Checkout. Supports monthly and annual billing. |
| **Webhook handler** | /api/webhooks/stripe handles: subscription.created, subscription.updated, subscription.deleted, invoice.paid, invoice.payment\_failed. |
| **Plan enforcement** | Middleware checks org plan before allowing: file uploads (storage limit), user invitations (user count limit), campaign creation (campaign count limit). |
| **Upgrade prompt** | When a limit is reached, users see a contextual upgrade prompt with the next tier's benefits. |
| **Billing settings page** | /settings/billing: current plan display, upgrade/downgrade buttons, invoice history, payment method management. |
| **Marketplace payouts** | Stripe Connect for marketplace transactions. Asset owners receive payouts to their connected bank account. |

# **Open Points & Decisions Needed**

The following items were identified during the full document review as requiring a decision before or during development. Each is a question that could meaningfully change the scope or architecture of a module.

**\[ ? \]  Marketplace placement:** Is the White-label Marketplace a module within the main app, a separate subdomain (market.visualgv.com), or an entirely separate product? This affects auth, billing, and routing architecture.

**\[ ? \]  Marketplace commission rate:** Fixed 10% on all transactions, or tiered by transaction size? How is this communicated to asset owners? Are there categories with different rates (digital vs. physical)?

**\[ ? \]  Multi-face assets:** A billboard with 2 faces can serve 2 different campaigns simultaneously. Define how to handle separate file assignments per face within a single asset record.

**\[ ? \]  Asset availability derivation:** Should 'available' status be auto-derived from MatchZone records (file currently matched \= occupied), or does the asset owner manually toggle availability? Both? Define for MVP.

**\[ ? \]  Print dimension validation:** Should mismatched dimensions between a print order and the target asset trigger a warning, a hard block, or just a log entry? Who resolves it — Brand Manager or Print Operator?

**\[ ? \]  Campaign hierarchy depth:** Documents reference: Organization → Campaign → Sub-folder / Event / Project → further levels. What is the exact maximum nesting depth for MVP? Infinite nesting is complex to build and test.

**\[ ? \]  AI creation agent scope for v2:** When the user clicks 'Create with AI' on a File Work Order, what exactly happens? Define: which AI model, what inputs (brief text \+ dimensions), what output format, and how the result enters the authorization workflow.

**\[ ? \]  AR module MVP definition:** The QR code infrastructure is built in MVP. For AR itself: is v2 a simple QR-to-file-viewer (no overlay) or a true AR overlay? True AR requires device camera access and WebXR support — define minimum device requirements.

**\[ ? \]  Personas GPS scope:** Is the GPS location on a Persona a static address or a real-time trackable location? Static address is simple. Real-time tracking is a significant privacy and technical scope expansion.

**\[ ? \]  Localization from day one:** Only EN \+ ES planned for MVP. Confirm that i18next or next-intl is configured from day one so that string literals are never hardcoded — this prevents a painful refactor before v2.

**visualgv.com**

*This document was compiled from all project materials in Google Drive.*

Owner: Gerardo Velázquez Carmona  |  June 2026  |  Version 2.0

**Living document — add your notes, comments, and edits directly in this file.**