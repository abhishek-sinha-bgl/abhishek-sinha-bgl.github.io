# Deploying Your Site to GitHub Pages
## Step-by-step — no coding knowledge needed

---

## What you need before starting
- A GitHub account (free at github.com)
- Your GitHub username (share it so the URL can be confirmed)
- The site files (the folder you received)

---

## STEP 1 — Create a new repository on GitHub

1. Go to github.com and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name it EXACTLY: `abhishek-sinha-bgl.github.io`
   - Example: if your username is `abhishek-sinha-bgl`, name it `abhishek-sinha-bgl.github.io`
   - This exact naming is required for GitHub Pages to work
4. Set visibility to **Public**
5. Do NOT check "Add a README file"
6. Click **Create repository**

---

## STEP 2 — Upload the site files

1. On the new repository page, click **uploading an existing file** (shown in the main area)
2. Open the `abhishek-site` folder on your computer
3. Select ALL files and folders inside it:
   - index.html
   - about.html
   - articles.html
   - css/ (folder)
   - js/ (folder)
   - articles/ (folder)
4. Drag them all into the GitHub upload area
5. Scroll down, add a commit message: `Initial site upload`
6. Click **Commit changes**

---

## STEP 3 — Enable GitHub Pages

1. In your repository, click **Settings** (tab at the top)
2. In the left sidebar, click **Pages**
3. Under "Source", select **Deploy from a branch**
4. Under "Branch", select **main** and keep the folder as `/ (root)`
5. Click **Save**

---

## STEP 4 — Your site is live

Within 1–3 minutes, your site will be live at:
`https://abhishek-sinha-bgl.github.io`

GitHub will show you the URL on the Pages settings screen once it's ready.

---

## Adding a new article later

When you want to publish a new article:

1. Write the article as an HTML file following the same structure as `articles/eu-ai-act-cio.html`
2. Go to your repository on GitHub
3. Navigate into the `articles/` folder
4. Click **Add file** → **Upload files**
5. Upload your new article HTML file
6. Also update `articles.html` to add the new article to the list:
   - Click `articles.html` in the repository
   - Click the pencil (edit) icon
   - Copy one of the existing `<div class="article-row">` blocks and update the title, link, excerpt, tag, and date
   - Click **Commit changes**

The new article will be live within seconds.

---

## Connecting a custom domain later (optional)

If you register a domain (e.g. abhisheksinha.com) at a registrar like Namecheap (~£10/year):

1. In GitHub Pages settings, enter your custom domain in the "Custom domain" field
2. At your domain registrar, add a CNAME record pointing to `abhishek-sinha-bgl.github.io`
3. GitHub will automatically provision an SSL certificate (HTTPS) within 24 hours

Full instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## Need help?

Share your GitHub username and any questions — the site structure and files can be updated at any time.
