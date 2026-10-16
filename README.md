# Kiptell

CSR initiation, execution, tracking and reporting platform.
Stack: React 18 · Vite · Tailwind CSS 3 · React Router 6 · lucide-react

## Run

```bash
npm install
npm run dev
```

## Structure

```
src/
├── assets/images/        logos, illustrations
├── components/
│   ├── common/           Button, Card, Badge, StatusBadge, ProgressBar, Avatar, SectionHeader
│   ├── layout/           Navbar
│   └── dashboard/        widgets used by dashboard pages
├── config/               roles + per-role navigation
├── context/              AuthContext (mock user for now)
├── data/                 mock data, one file per screen
├── layouts/              DashboardLayout (shared shell)
├── lib/                  helpers (cn)
├── pages/
│   ├── need_owner/       DashboardPage.jsx ✅
│   ├── admin/
│   ├── company/
│   ├── organization/
│   └── shared/           ComingSoonPage + pages used by several roles
└── routes/AppRoutes.jsx  all routes, grouped by role
```

## Adding a page

1. Create `src/pages/<role>/XxxPage.jsx`
2. Reuse components from `components/common`; add new shared ones there
3. Register the route in `src/routes/AppRoutes.jsx`
4. Add the nav tab in `src/config/navigation.js` if it's a top-level tab
