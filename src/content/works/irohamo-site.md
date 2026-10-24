---
title: irohamo site
publishDate: 2025-10-10 00:00:00
img: ../../assets/works/favicon.svg
img_alt: irohamo favicon.
description: |
    作品・経歴・活動をまとめる自作ポートフォリオサイト
tags:
  - Ongoing
  - Frontend
  - Astro
  - Portfolio
role: "自作ポートフォリオサイトの制作"
tech: [Astro, Markdown / MDX, Content Collections, HTML / CSS, Preact]
---

## 概要

irohamo siteは、制作物、技術的な取り組み、三味線を含む活動をまとめる自作ポートフォリオサイトです。作品の制作背景や担当領域を補足するため、Works / Articles / Mentionsをコンテンツとして管理しています。

[GitHub](https://github.com/irohamo/irohamo-site)

## 担当

サイトの制作を担当しています。AstroのContent Collectionsを使い、作品ページをMarkdown / MDXで管理する構成を実装しました。
## 課題・工夫・結果

### 作品を継続して追加できる構造にする

`src/content/works`にMarkdown / MDXを追加すると作品ページとして表示される構成にしました。タイトル、説明、公開日、タグ、画像などをfrontmatterに持たせ、一覧と詳細の両方で再利用しています。

### 種類の異なる活動の背景を伝える

ハッカソン作品、個人開発、音楽関連ツールを扱うため、一覧カードでは短く紹介し、詳細ページでは背景・担当・技術・結果を記載できるようにしました。

### 静的配信を基本にする

Astroを採用し、基本は静的サイトとして高速に配信しつつ、必要に応じてPreactやMDXコンポーネントを使える構成にしています。今後インタラクティブなデモや埋め込みを追加しても、サイト全体を複雑にしすぎない設計にしています。
