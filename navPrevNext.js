// navPrevNext.js
// you can load this function by adding  "<%* tR += await tp.user.navPrevNext() %>" in your template.md file

module.exports = async (tp) => {
  const KEY = "date";
  const curFile = app.workspace.getActiveFile();
  if (!curFile) return "";

  const curDir = curFile.parent.path;
  const files = app.vault.getMarkdownFiles()
    .filter(f => f.parent.path === curDir)
    .map(f => {
      const fm = app.metadataCache.getFileCache(f)?.frontmatter;
      const d  = fm?.[KEY];
      return d ? {
        path: f.path,
        base: f.basename,
        time: new Date(d).getTime()
      } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.time - b.time);

  const idx  = files.findIndex(f => f.path === curFile.path);
  const prev = idx > 0                 ? files[idx - 1] : null;
  const next = idx >= 0 && idx < files.length - 1 ? files[idx + 1] : null;

  const prevLink = prev ? `[[${prev.base}]]` : "";
  const nextLink = next ? `[[${next.base}]]` : "";

  return `| ❮❮ Prev ┈┈┈┈┈┈┈┈┈┈ | ┈┈┈┈┈┈┈┈┈┈ Next ❯❯ |
|:----------------|----------------:|
| ${prevLink} | ${nextLink} |`;
};
