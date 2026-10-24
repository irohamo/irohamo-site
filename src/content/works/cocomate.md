---
title: "ココメイト"
description: "疲労・睡眠・移動時間を考慮して、無理のない予定管理を支援するモバイルアプリ"
publishDate: 2026-03-22
tags:
  - Hackathon
  - React Native
  - Expo
  - TypeScript
  - Firebase
  - Google Calendar API
  - Vertex AI
  - Google Maps Platform
img: "../../assets/works/cocomate-appicon.png"
img_alt: "ココメイトのアイコン"
role: "アプリの中核ロジックと外部サービス連携、レビュー・連携のための開発基盤整備"
tech: [React Native, Expo, TypeScript, Firebase, Google Calendar API, Vertex AI, Google Maps Platform]
result: "モバイル開発、バックエンド構築、複数の Google 技術の統合、短期間でのチーム開発を経験"
period: "2026年3月14日〜3月22日"
---

## 概要

ココメイトは、予定ごとの疲労度・睡眠状況・移動時間をもとにその日のエネルギー残量を可視化し、タスクを追加したいときには身体的・時間的な負担を考慮して最適な時間帯を提案するモバイルアプリです。42 Tokyoの同期4人でチームを組み、GDGoC Hackathon 2026で開発しました。

[GitHub](https://github.com/irohamo/SchedulingAssistant/)

## 担当

アプリの中核ロジックと外部サービス連携を担当しました。Firebase Authentication / Google Sign-Inによる認証、FirestoreとAsyncStorageによるデータ永続化、Google Calendarとの予定同期を実装しました。

また、疲労・睡眠・移動時間を考慮して予定候補を提示するレコメンドエンジンを設計・実装し、候補時間のスコアリング、エネルギー推移の表示、複数日探索、予定保存導線まで担当しました。さらに、Google Routes API / Apple MapKitによる移動時間算出、Expo Notificationsによる通知、Vertex AI / Geminiによるタグ提案・文言生成を担当しました。チーム開発ではPRテンプレートとDiscord通知を整備しました。

## 課題・工夫・結果

### 時刻だけでは判断できない予定の負担を扱う

予定カテゴリ、所要時間、前後の移動時間、睡眠状況をもとにエネルギー推移を計算しました。予定追加時には候補時間ごとの推移をシミュレーションし、「おすすめ」「安定ペース」「高負荷」といった形で、直感的に判断できるUIを設計しました。

### カレンダー同期で差分を取得する

Google Calendar APIで予定の読み取り・作成・更新・削除に対応しました。同期では`syncToken`を使い、毎回すべての予定を取得せず、差分を取得する設計にしました。

### 意味が近い予定タグの重複を防ぐ

Vertex AIでイベントタイトルからタグを提案し、`gemini-embedding-001`によるベクトル埋め込みで既存タグとの類似度を計算しました。意味が近いタグの重複を防ぐ仕組みにしています。
