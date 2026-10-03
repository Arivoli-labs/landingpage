# Arivoli Labs — GitHub Pages

## Publish

1. Create a public GitHub repository called arivoli-labs with main as the default branch.
2. Upload this folder's contents at the repository root, including .github/workflows/pages.yml. Do not upload the ZIP itself. If the browser uploader omits .github, use Create new file and enter .github/workflows/pages.yml, then paste the supplied workflow.
3. In Settings → Pages → Build and deployment, choose GitHub Actions.
4. In Actions → Publish Arivoli Labs, run the workflow. Later commits to main publish automatically. The successful workflow shows the actual live URL.

GitHub browser access was declined, so this repository has not been created or published. No live URL is claimed. No paid service or domain purchase was initiated. A public repository exposes its source; this package has no credentials.

## Preview

Open the separately supplied Arivoli_Labs_Preview.html. The logo is embedded in this single-file preview. The _site folder also contains the built website. To rebuild, run node build-pages.mjs (Node.js 22+, no dependencies).

## Add, edit, and remove ventures

Open tools/venture-editor.html locally. Import your latest data/ventures.json before editing. Use Add venture, Edit, or Remove, then Export ventures.json. Replace data/ventures.json in GitHub with the exported file and commit to main to publish. The editor changes drafts only and does not save them when closed. It is excluded from the published site. You can also edit the JSON directly or ask ChatGPT to change it.

## Custom domain

arivolilabs.com has not been purchased or connected; availability is unverified. After registering it:

1. Verify it in GitHub account Settings → Pages using the supplied TXT record.
2. In repository Settings → Pages → Custom domain, set arivolilabs.com and Save.
3. At your registrar, add four A records for @: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
4. Optionally add www as a CNAME to HarisharanSM.github.io (use the actual publishing username if different; exclude repository paths).
5. Enable Enforce HTTPS when available. DNS/certificates may take up to 24 hours. Preserve unrelated email records.

With this GitHub Actions workflow, set the domain in Pages settings; CNAME files are ignored.
Official guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Content and files

src/index.html defines the responsive layout and company text. data/ventures.json stores products. public/logo.webp is the supplied logo optimized for the web. build-pages.mjs generates _site. .github/workflows/pages.yml publishes it. tools/venture-editor.html provides offline editing.

Company principles are proposed copy. The powertrain product is presented as in development, with an intended workflow and no invented results or endorsements. Browser layout and hosted deployment could not be verified in this session; generated content, paths, and JavaScript can be checked locally.
