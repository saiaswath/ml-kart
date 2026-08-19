# ML Kart deployment

ML Kart is statically exported by Next.js and hosted at <https://ml-kart.web.app>.

Every push to `main` runs lint and build checks, then deploys the generated `out` directory to the dedicated `ml-kart` Firebase Hosting site. GitHub Actions authenticates to Google Cloud through the existing passwordless OIDC setup used by ClaimHome; no long-lived service-account key is stored in GitHub.

To deploy from an authenticated local machine:

```sh
pnpm build
pnpm exec firebase deploy --only hosting --project homeapp1-9ed4c
```
