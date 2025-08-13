# Portfolio Starter (GitHub Pages + Formspree)

A minimalist, responsive portfolio starter with a product showcase and a working contact form. Drop your content in, push to GitHub, and publish with GitHub Pages.

## Quick Start

1. **Download** this ZIP and extract it.
2. Open `index.html` and **replace** placeholder text and project cards with your own.
3. **Contact Form**: create a free form at [Formspree](https://formspree.io/) and copy the form ID.
   - Replace `YOUR_FORM_ID` in the form action:
     ```html
     <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     ```
   - The included JavaScript posts via `fetch` so you get inline success/error messages on GitHub Pages.
4. **Add your images** to the `images/` folder and update the `<img>` paths.
5. (Optional) Update colors in `style.css` under the `:root` CSS variables section.

## Deploy on GitHub Pages

1. Create a new GitHub repository (e.g., `my-portfolio`).
2. Add these files and commit to the `main` branch.
3. In your repo: **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **Branch: main** and **/ (root)**, then click **Save**.
6. After it builds, your site will be live at:
   `https://YOUR-USERNAME.github.io/REPO-NAME/`

> Tip: If your site is at a subpath (e.g. `/REPO-NAME/`), keep your links relative (as this starter does) so everything loads correctly.

## Editing the Showcase

Each project is an `.card` like this:
```html
<article class="card" data-category="web">
  <img src="images/my-project.jpg" alt="Project screenshot" />
  <div class="card-body">
    <h3>Project Title</h3>
    <p>One–two sentence summary focusing on outcomes.</p>
    <div class="pill-row">
      <span class="pill">Web</span>
      <span class="pill">React</span>
    </div>
  </div>
</article>
```
Use `data-category` values (`web`, `mobile`, `hardware`) to make the filter chips work, or change/add chips as you like.

## Local Preview

Just open `index.html` in a browser. No build step needed.

## FAQ

**Why Formspree?**  
GitHub Pages can’t run server-side code. Formspree handles form submissions for static sites and works great with a simple `fetch` request.

**Can I add analytics or a custom domain?**  
Yes. Add your analytics script in `<head>`. For a custom domain, add a `CNAME` file per GitHub Pages docs.

**Where do I change colors and fonts?**  
In `style.css` under the `:root` variables and the Google Fonts link in `index.html`.
