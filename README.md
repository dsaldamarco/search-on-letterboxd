<p align="center">
  <img src="icons/letterboxd.svg" width="96" alt="Search on Letterboxd icon">
</p>

<h1 align="center">Search on Letterboxd</h1>

<p align="center">
  <b>Spot a movie title anywhere on the web. Right-click it. You're on Letterboxd.</b>
</p>

---

## The problem

You're reading an article, scrolling a "best films of the decade" list, or chatting with a friend who just recommended *that* movie. You want to see it on Letterboxd. So you:

1. Select the title
2. Copy it
3. Open a new tab
4. Go to letterboxd.com
5. Click the search bar
6. Paste
7. Hit Enter

Seven steps, every single time. Do that a few times a day and it adds up.

## The fix

**Select the title → right-click → "Search on Letterboxd".**

That's it. The search results open in a new tab right next to the one you're on, so you never lose your place.

```
  "...and then I finally watched Past Lives and I can't stop thinking about it."
                                   ▔▔▔▔▔▔▔▔▔▔
                                   ┌───────────────────────────┐
                                   │  Copy                     │
                                   │  Search Google for "..."  │
                                   │ ●●● Search on Letterboxd  │
                                   └───────────────────────────┘
```

## Why you'll like it

- ⚡ **Instant**: one click instead of seven steps
- 🎯 **Works everywhere**: news sites, Reddit, Wikipedia, emails, any page with text
- 🧭 **Keeps your place**: results open in a new tab next to the current one
- 🔒 **Private**: no data collection, no tracking, no analytics, no account needed
- 🪶 **Tiny**: about 20 lines of code with a single permission (the right-click menu)
- 🙈 **Stays out of the way**: no toolbar button, no popups, no settings to configure. It only shows up when you've selected text.

## Install

**From Firefox Add-ons (recommended)**
Coming soon on [addons.mozilla.org](https://addons.mozilla.org/).

**Try it from source**
1. Clone or download this repository
2. Open `about:debugging#/runtime/this-firefox` in Firefox
3. Click **Load Temporary Add-on…** and pick `manifest.json`

> Temporary add-ons are removed when Firefox restarts. Use the Add-ons store version to keep it permanently.

Requires Firefox 140 or later.

## How it works

The extension adds a single item to the context menu that only appears when text is selected. Clicking it opens:

```
https://letterboxd.com/search/<your selection>/
```

Everything happens in your browser. The only website contacted is Letterboxd itself, and only when you click.

## Project structure

```
├── manifest.json        # Extension manifest (Manifest V3)
├── background.js        # Context menu + search logic
└── icons/
    └── letterboxd.svg   # Menu and extension icon
```

## Disclaimer

This is an independent project. It is not affiliated with, endorsed by, or sponsored by Letterboxd.

## License

[MIT](LICENSE)
