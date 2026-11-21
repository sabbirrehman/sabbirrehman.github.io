# My site

Two files run everything:
- `index.html` is the website (you rarely touch it)
- `articles.md` is where you write and manage everything you publish

## One-time setup (GitHub website only)
1. Create a new public repository.
2. Add file > Upload files: upload `index.html` and `articles.md`. Commit.
3. Settings > Pages > Deploy from a branch > `main` / root > Save.
4. After about a minute your site is at `https://YOUR-USERNAME.github.io/REPO-NAME/`

## Publish, edit, hide (every time)
1. Open `articles.md` in the repo, tap the pencil icon.
2. Add a new `# Title` block, change text, or add `draft: yes` to hide one. Delete a block to remove it.
3. Commit changes. The live site updates in about a minute.

## Pictures and videos
Add file > Upload files, then write `![caption](photo.jpg)` or `video: clip.mp4` in the article.
Keep photos under about 1 MB and videos under 25 MB (GitHub web upload limit).
