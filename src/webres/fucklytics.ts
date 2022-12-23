async function main() {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof Element)) continue;

        const linkTags = document.getElementsByTagName('a');
        for (const linkTag of linkTags) {
          if (linkTag.href.endsWith('analytics')) {
            let root: HTMLElement = linkTag; //mostly role==='menuitem'

            if (linkTag.role === 'link') {
              const parent = linkTag.parentElement;
              if (parent !== null) {
                root = parent;
              }
            }

            root.style.display = 'none';
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
