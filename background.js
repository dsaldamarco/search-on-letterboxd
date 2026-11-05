// Works in both Firefox (browser.*) and Chrome (chrome.*)
const api = globalThis.browser ?? globalThis.chrome;
// Newer Chrome versions also define `browser`, so detect Firefox by a Firefox-only API
const isFirefox = typeof api.runtime.getBrowserInfo === "function";
const MENU_ID = "search-on-letterboxd";

function createMenu() {
  const item = {
    id: MENU_ID,
    title: "Search on Letterboxd",
    contexts: ["selection"]
  };
  api.contextMenus.removeAll(() => {
    // Firefox lets us set a custom menu icon; Chrome shows the extension icon automatically
    if (isFirefox) {
      try {
        api.contextMenus.create({ ...item, icons: { 16: "icons/icon-16.png", 32: "icons/icon-32.png" } });
        return;
      } catch (e) {
        // fall through and create it without a custom icon
      }
    }
    api.contextMenus.create(item);
  });
}

api.runtime.onInstalled.addListener(createMenu);
api.runtime.onStartup.addListener(createMenu);

api.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== MENU_ID) return;
  const query = (info.selectionText || "").trim().replace(/\s+/g, " ");
  if (!query) return;

  api.tabs.create({
    url: `https://letterboxd.com/search/${encodeURIComponent(query)}/`,
    index: tab ? tab.index + 1 : undefined
  });
});
