---
sidebar_position: 4
sidebar_class_name: sidebar-item-limits
sidebar_label: サービス上限
title: Momentoキャッシュのサービス上限
description: MomentoキャッシュとMomentoトピックのサービス上限、デフォルト値、そして変更が必要な時にどのように問い合わせるかを見てみましょう。
---

# Momento キャッシュと Momento トピックスのサービス上限

Momento
キャッシュは、サービスのリソースに関してお客様とシステム自身を保護しようとしています。サービスがあるべき姿で、可能な限り何の問題もなく動きつづける様に、各アカウント、キャッシュ、そしてトピックはサービス上限、または(
山道にある様な)ガードレールと私たちが呼ぶものを持っています。このページにはサービス上限のデフォルト値の概略を掲示しています:

| Momento キャッシュの上限                     | 値                |
| -------------------------------------------- | ----------------- |
| キャッシュ毎の API レート (データプレーン)   | 100 リクエスト/秒 |
| お客様毎の API レート (コントロールプレーン) | 5 リクエスト/秒   |
| キャッシュ毎のスループット                   | 1MB/秒            |
| アイテムの最大サイズ                         | 1MB               |
| キャッシュの最大数 (アカウント毎)            | 10                |
| Time to Live (TTL)                           | 1 日              |

| Momento トピックの上限       | 値                                  |
| ---------------------------- | ----------------------------------- |
| トピック毎のサブスクライバー | 100                                 |
| メッセージサイズ             | 100KiB/パブリッシュされたメッセージ |
| トピック毎のスループット     | 100 パブリッシュリクエスト/秒       |

:::info
MomentoトピックスはMomentoキャッシュが基盤になっているので、全てのキャッシュ上限がトピックスにも適用されます。
:::

## ソフト上限とサポート

このページに記載されている上限はソフト上限なので変更が可能です。上限の調整が必要な場合は[Momento Support](mailto:support@momentohq.com)までご連絡ください。
ログインに使用しているメールアドレス、キャッシュ名、キャッシュが存在しているクラウド＋リージョン (e.g. AWS eu-west-1)そしてどのリストに掲載されているどの上限を引き上げるのかを記載してください。