// Works in both Firefox (browser.*) and Chrome (chrome.*)
const api = globalThis.browser ?? globalThis.chrome;
const isFirefox = typeof globalThis.browser !== "undefined";
const MENU_ID = "search-on-letterboxd";

api.runtime.onInstalled.addListener(() => {
  const item = {
    id: MENU_ID,
    title: "Search on Letterboxd",
    contexts: ["selection"]
  };
  // Firefox lets us set a custom menu icon; Chrome shows the extension icon automatically
  if (isFirefox) {
    item.icons = { 16: "icons/icon-16.png", 32: "icons/icon-32.png" };
  }
  api.contextMenus.create(item);
});

api.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== MENU_ID) return;
  const query = (info.selectionText || "").trim().replace(/\s+/g, " ");
  if (!query) return;

  api.tabs.create({
    url: `https://letterboxd.com/search/${encodeURIComponent(query)}/`,
    index: tab ? tab.index + 1 : undefined
  });
});
