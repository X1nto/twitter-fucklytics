async function main() {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof Element)) continue;

        const linkTags = document.getElementsByTagName('a');
        for (const linkTag of linkTags) {
          if (linkTag.href.endsWith('analytics')) {
            const root = linkTag.parentElement;
            if (root !== null && root !== undefined) {
              root.style.display = 'none';
            }
          }
        }
      }
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: true,
  });
}

main();
