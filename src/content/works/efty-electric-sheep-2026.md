---
title: "えふてぃ"
description: "日々の記録を整理し、ぬいぐるみとの会話から思い出を振り返るプロダクト"
publishDate: 2026-09-13
featuredOrder: 1
role: "Team 07 リーダー · 5人チーム"
result: "優勝 · ForA OneTeam賞"
tags:
  - Hackathon
  - iOS
  - Firebase
  - ESP32
  - AI
img: "../../assets/works/efty-bear.jpg"
img_alt: "ぬいぐるみ型の会話デバイス「Efty Bear」"
tech: [Swift, SwiftUI, Firebase, ESP32, PlatformIO, Arduino, BLE, Wi-Fi, OpenAI Embeddings, OpenAI Realtime API]
period: "2026年7月4日〜9月12日"
---

## 概要

「えふてぃ」は、日常の音声・写真・位置情報・予定を出来事として整理し、将来その記憶をぬいぐるみとの会話から振り返れるようにするプロダクトです。身に着ける記録デバイス「Efty Recorder」、iPhoneアプリ、Firebase / AI、ぬいぐるみ型の会話デバイス「Efty Bear」を組み合わせています。

全国学生対抗SFハッカソン「Electric Sheep 2026」のテーマ「100歳のわたしの幸せ」に対し、Team 07「ft_friends」の5人で制作しました。2026年7月4日から9月12日まで開発し、9月12日・13日の本戦で優勝とForA OneTeam賞を受賞しました。

[Electric Sheep 2026 公式サイト](https://www.nagoyatv.com/hackathon-electricsheep/)

## 担当

Team 07のリーダーを務めました。記録デバイスのファームウェア、記録を出来事として構造化する処理、Efty Bearの会話連携に関わりました。

## 課題・工夫・結果

### 異なる種類の記録を出来事として結び付ける

Efty Recorderは音声と静止画をmicroSDへ記録し、iPhoneとはBLEで記録状態と時刻を連携、Wi-Fi経由でFirebaseへ同期します。iPhoneが取得するGPSやGoogleカレンダーの予定と、記録デバイスのデータを時刻で結び付ける構成にしました。

保存した記録は出来事として構造化し、検索用のチャンクへ変換しています。ベクトル検索により、会話に関連する過去の出来事を取り出せるようにしています。

### 記録から会話までをつなぐ

記録時の操作はスイッチに集約しました。Efty Bearではマイクの音声を文字起こしし、過去の記憶を参照した返答をストリーミング再生します。音声が届いたところから再生し、会話に関連する写真をiPhoneへ表示する機能も備えています。

### 審査での評価と受賞

審査では、会話の自然さ、センサーや近接体験を含む細部の作り込み、ぬいぐるみの外観と内部の音声生成にこだわった点が評価されました。Electric Sheep 2026で優勝し、ForA OneTeam賞も受賞しました。
