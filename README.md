# Obsidian
I maintain a personal writing archive, [yonkim.life](https://yonkim.life) using Obsidian Publish, where I store the features and CSS customizations I’ve played around


# Adding Prev/Next Button(navPrevNext.js)
A .js file that automatically generates links to the previous and next notes based on the date field in the front-matter, and displays them as Prev / Next buttons in each .md files

- [Templater by SilentVoid](https://obsidian.md/plugins?id=templater-obsidian) (Obsidian Community Plugin) is required
- Expected Behaviour


|file(frontmatter.date)|Prev |Next |
|---|---|---|
|`A.md` (`2025-06-01`)|—|[[B]]|
|`B.md` (`2025-06-15`)|[[A]]|[[C]]|
|`C.md` (`2025-06-30`)|[[B]]|—|

- Rendering example & Setup guide [here](https://yonkim.life/Obsidian/Adding+Prev+%26+Next+Button)
