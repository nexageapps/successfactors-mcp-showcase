# Contributing

Thanks for wanting to help. Please send changes as a pull request; do not push directly to `main`.

1. Fork the repository.
2. Create a branch from `main`.
3. Make your change.
4. Open a pull request against `main`.

A maintainer has to approve a pull request before it can be merged.

## Checks

Pull request CI runs `npm ci`, `npm run lint` (oxlint), and `npm run build` (`tsc -b && vite build`) on Node.js 20. There is no `.nvmrc` or `engines` field, so the workflow pins Node 20.

Workflows on a pull request from a first-time fork need a maintainer to approve them before they will run.
