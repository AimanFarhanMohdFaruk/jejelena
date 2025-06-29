---
title: "Building a Google Workspace Add-on: Qur'an Insert"
description: "A walkthrough of building a Google Docs add-on to insert Qur'anic verses"
pubDate: "Jun 28 2025"
heroImage: "../../assets/quran-insert-logo.png"
---

## Introduction

In this post, I'll walk you through the process of building **Qur'an Insert**, a Google Docs add-on that allows users to insert Qur'anic verses (in Arabic and English translation) directly into their documents. This project is a great example of how to use Google Apps Script, external APIs, and modern documentation practices (like Markdown) to create and share useful tools.

---

## About the Add-on

**Qur'an Insert** is a Google Workspace Add-on for Google Docs. It lets users:

- Select a Surah and a range of Ayat (verses)
- Choose an English translation
- Instantly insert the selected verses (Arabic + translation) into their document

**Tech stack:**

- Google Apps Script (backend logic)
- HTML/CSS/JS (for the sidebar UI)
- [Al Quran Cloud API](https://alquran.cloud/api) (for verse data)

**Key features:**

- Sidebar UI with Surah and Ayah dropdowns
- Range selection for Ayat
- Multiple translation options
- Clean, user-friendly design
- Privacy-focused (no user data stored)

---

## Development Highlights

- **Manifest:** Uses `appsscript.json` with proper OAuth scopes and `urlFetchWhitelist` for API access.
- **Sidebar Add-on:** Configured with the `addOns` manifest section for a modern sidebar experience.
- **API Integration:** Fetches Arabic and translation text for each Ayah in the selected range.
- **Markdown Documentation:** All project docs (README, Privacy Policy, Terms) are written in Markdown for clarity and easy publishing.

---
