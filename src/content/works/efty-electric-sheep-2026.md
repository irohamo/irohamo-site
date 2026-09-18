---
title: "えふてぃ"
description: "日常の記憶を記録・構造化し、未来の自分がぬいぐるみと対話できる体験を目指したプロダクト"
publishDate: 2026-09-13
tags:
  - Hackathon
  - iOS
  - Firebase
  - ESP32
  - AI
img: "../../assets/works/efty-icon.png"
img_alt: "ぬいぐるみ型デバイス「Efty Bear」を表した、えふてぃのアイコン"
---

## 概要

「えふてぃ」は、日常の音声・写真・位置情報・予定を記録し、出来事として整理することで、将来その記憶をぬいぐるみとの会話から振り返れるようにするプロダクトです。

全国学生対抗SFハッカソン「Electric Sheep 2026」のテーマ「100歳のわたしの幸せ」に対し、Team 07「ft_friends」の5人で制作しました。開発期間は2026年7月4日から9月12日で、9月12日・13日の本戦を経て、優勝とForA OneTeam賞を受賞しました。

- [Electric Sheep 2026 公式サイト](https://www.nagoyatv.com/hackathon-electricsheep/)

## プロダクトの構成

えふてぃは、身に着ける記録デバイス、iPhoneアプリ、Firebase / AI、ぬいぐるみ型の会話デバイス「Efty Bear」を組み合わせています。

### Efty Recorder

ピン型の記録デバイスです。音声と静止画をmicroSDへ記録し、iPhoneとはBLEで記録状態と時刻を連携します。記録したデータはWi-Fi経由でFirebaseへ同期します。

### iPhoneアプリ

記録中のGPSとGoogleカレンダーの予定を取得し、記録デバイスのデータと時刻を使って結び付けます。BLEによるデバイス連携、Firebaseへの同期、過去の記憶の検索、Efty Bearが選んだ写真の表示にも対応しています。

### Firebase / AI

音声・写真・位置・予定を保存し、それらを出来事として構造化します。整理した記憶は検索用のチャンクへ変換し、ベクトル検索を用いて会話に関連する過去の出来事を取り出せるようにしています。

### Efty Bear

過去の記憶を参照しながら会話する、ぬいぐるみ型のデバイスです。マイクから受け取った音声を文字起こしし、生成した返答をストリーミング再生します。会話に関連する写真をiPhoneへ表示する機能も備えています。

## 体験設計

アプリの中だけで記憶を閲覧するのではなく、身近なぬいぐるみに話しかけることで思い出へ自然に触れられる体験を目指しました。記録時の操作をスイッチに集約し、会話では音声が届いたところから再生するなど、ハードウェアとソフトウェアを一つの体験としてつなげています。

審査では、生成システムによる会話の自然さ、センサーや近接体験を含む細部の作り込み、ぬいぐるみの外観と内部の音声生成の両面にこだわった点が評価されました。

## 技術スタック

### iPhoneアプリ

- Swift / SwiftUI
- Core Bluetooth
- Core Location
- Google OAuth / Google Calendar API
- Firebase Authentication / Cloud Firestore / Cloud Storage

### バックエンド・AI

- Firebase Cloud Functions
- Firestore Vector Search
- OpenAI Embeddings
- OpenAI Realtime API
- Text-to-Speech

### ハードウェア

- Seeed Studio XIAO ESP32S3 Sense
- PlatformIO / Arduino
- BLE / Wi-Fi
- カメラ / デジタルマイク / microSD

## 結果

- Electric Sheep 2026 優勝
- ForA OneTeam賞 受賞
