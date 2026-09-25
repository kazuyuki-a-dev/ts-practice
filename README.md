# TypeScript 基礎 練習アプリ集

js-practiceで作った学習アプリを、TypeScriptで型安全に書き直したリポジトリです。
TypeScriptの基礎（型注釈・型推論、ユニオン型、enum、DOM要素の型付けなど）を、
実際に手を動かしながら定着させることを目的にしています。

各フォルダに1つの完成アプリが入っています。それぞれNode.jsプロジェクトとして
独立しているので、動かす際は各フォルダの中で以下を実行してください。

```bash
npm install
npx tsc
```

その後、`index.html`をブラウザで開けば動作します。

## 収録アプリ

| # | フォルダ | アプリ | 主に使うTS概念 |
|---|----------|--------|------------------|
| 1 | [01-todo](./01-todo) | TodoリストのTS版 | type, 配列の型, for...of, as HTMLInputElement |
| 2 | [02-kakeibo](./02-kakeibo) | 家計簿アプリのTS版 | ユニオン型, HTMLSelectElement, reduce |
| 3 | [03-janken](./03-janken) | じゃんけんゲームのTS版 | enum, 関数の引数・戻り値の型 |

## 各アプリの機能

### 01. TodoリストのTS版
- `Todo`型（`text: string`, `done: boolean`）による型安全なデータ管理
- 一覧表示（`for...of`）
- 新規タスクの追加、完了チェック、削除
- DOM要素の取得に`as HTMLInputElement`、非nullアサーション（`!`）を活用

### 02. 家計簿アプリのTS版
- `Category`型（ユニオン型："食費" | "交通費" | "娯楽費" | "その他"）でカテゴリを制限
- `Expense`型による型安全なデータ管理
- 一覧表示、合計金額計算（`reduce`）
- `<select>`とHTMLSelectElementを使った、型安全なカテゴリ選択

### 03. じゃんけんゲームのTS版
- `Hand`という`enum`で、手の種類（グー・チョキ・パー）を制限
- コンピューターの手をランダムに選択する関数（戻り値の型: `Hand`）
- 勝敗判定関数（引数の型: `Hand`, `Hand`）
- ボタンクリックで実際にプレイ可能

## 開発環境

各アプリは、以下の手順で個別にセットアップしています。

```bash
npm init -y
npm install --save-dev typescript
npx tsc --init
```

`tsconfig.json`は、ブラウザで動かすために`"module": "es2015"`に変更し、
`<script type="module" src="script.js"></script>`と組み合わせています。

`node_modules`は`.gitignore`（リポジトリ直下）で除外しており、
`npm install`を実行すればいつでも再現できます。

## 開発の進め方

js-practiceと同じく、`feature/アプリ名`のブランチを切って実装し、
完成したらPull Requestを作成して`main`にマージする流れで進めました。

```bash
git switch -c feature/新しいアプリ名
# 実装 → コミット → push
git push -u origin feature/新しいアプリ名
# GitHub上でPRを作成してマージ
git switch main
git pull
git branch -d feature/新しいアプリ名
```

## 学んだTypeScriptの基礎まとめ

| トピック | 主に使ったアプリ |
|---|---|
| 型注釈・型推論（number, string, boolean） | 全アプリ |
| 関数の型（引数・戻り値） | judge関数（じゃんけん）など |
| type（型エイリアス）・オプショナルプロパティ | Todo型, Expense型 |
| 配列の型（`型[]`） | 全アプリ |
| ユニオン型（`\|`） | 家計簿アプリ（Category型） |
| enum（列挙型） | じゃんけんゲーム（Hand型） |
| as（型キャスト）・!（非nullアサーション） | DOM要素の取得全般 |
| for...of | 一覧表示処理全般 |

## js-practiceとの違い

| 項目 | js-practice | ts-practice |
|---|---|---|
| 実行前の準備 | 不要（ブラウザがそのまま実行） | `npx tsc`でコンパイルが必要 |
| データの安全性 | 実行時までミスに気づけない | 書いている最中に型エラーで気づける |
| プロジェクト構成 | HTML/CSS/JSのみ | Node.jsプロジェクト（package.json等） |