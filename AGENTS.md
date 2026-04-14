# Project AGENTS.md

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Typecheck + build (tsc -b && vite build)
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Notes

- Uses **npm** (not pnpm/yarn/bun) - team preference
- TypeScript uses project references: run `tsc -b` (not `tsc`) for full typecheck
- Build command runs typecheck before vite build
- No test framework configured yet
- ESLint config uses flat config format (eslint.config.js)