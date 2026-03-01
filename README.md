# Abhishek Sinha — Personal Site

Personal website and writing platform hosted on GitHub Pages.

## Site structure

```
/
├── index.html          ← Homepage
├── about.html          ← About page
├── articles.html       ← Articles index
├── css/
│   └── style.css       ← All styles
├── articles/
│   └── eu-ai-act-cio-guide.html   ← First article
└── README.md
```

## Adding a new article

1. Create a new `.html` file in the `/articles/` folder
2. Copy the structure from `eu-ai-act-cio-guide.html`
3. Update the title, meta description, content, tag, and date
4. Add a new entry to the `articles.html` page in the articles list section

## Deployment

This site is deployed via GitHub Pages. Any commit to the `main` branch
automatically publishes to `https://[your-username].github.io/[repo-name]/`

## Custom domain (when ready)

1. Register a domain (e.g. abhisheksinha.com) via Namecheap, GoDaddy, or similar
2. In GitHub repo → Settings → Pages → Custom domain → enter your domain
3. Add a CNAME record at your domain registrar pointing to `[username].github.io`
4. GitHub automatically provisions HTTPS within 24 hours
