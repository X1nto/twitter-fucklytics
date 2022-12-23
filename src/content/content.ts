const fucklytics = document.createElement('script');
fucklytics.src = getUrl('fucklytics.js');
document.head.appendChild(fucklytics);

function getUrl(path: string): string {
  if (typeof browser !== 'undefined') {
    return browser.runtime.getURL(path);
  } else {
    return chrome.runtime.getURL(path);
  }
}
