const MENU_ID = "search-on-letterboxd";

browser.runtime.onInstalled.addListener(() => {
  browser.menus.create({
    id: MENU_ID,
    title: "Search on Letterboxd",
    contexts: ["selection"],
    icons: {
      16: "icons/letterboxd.svg",
      32: "icons/letterboxd.svg"
    }
  });
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== MENU_ID) return;
  const query = (info.selectionText || "").trim().replace(/\s+/g, " ");
  if (!query) return;

  browser.tabs.create({
    url: `https://letterboxd.com/search/${encodeURIComponent(query)}/`,
    index: tab ? tab.index + 1 : undefined
  });
});
