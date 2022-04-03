# GitHub User's Repository Searcher

這是一個串接 GitHub REST API 提供搜尋 GitHub 用戶 Public Repository 的練習專案。

## Demo

<a href="https://github-restapi-react.netlify.app/" onclick="return ! window.open(this.href);">Live Demo on Netlify</a>

## How to Use

點擊 Demo 進入首頁
<br/>
<img src="https://i.imgur.com/5bsz4Ln.png" alt="Homepage" style="width: 500px;"/>

### 搜尋

搜尋 GitHub 用戶名稱會導向到這位用戶的 GitHub Public Repository 列表頁面

- 進入首頁後可直接在網址列後面輸入 `/users/username/repos` ( **_username_** 請輸入 GitHub 已註冊的有效用戶名稱 )
- **_更便捷的搜尋方式_**：在搜尋列輸入 `GitHub用戶名稱` ，按 `Search` 按鈕就會連結到這位用戶的 Repository 列表頁面
- **_注意_**：若頁面顯示空的 Repository 列表，可能是搜尋到沒有 public repository 的 GitHub 用戶或是沒有找到該名用戶。

### 顯示更多的 Repository

列表頁面預設只會顯示 10 個該名用戶的 Repositories，可以拉動捲軸至頁面底部顯示更多的 Repositories。
<img src="https://i.imgur.com/rg96aCl.png" alt="User's Repository List Page" style="width: 500px;"/>

### 檢視 Repository 的詳細資料

點擊列表頁面上的 Repository 會進入此一 Repository 的頁面
<br/>
<img src="https://i.imgur.com/8q8d3oN.png" alt="Requested Repository Detail Information" style="width: 500px;"/>

- 詳細資料下方按鈕
  - 左邊按鈕 `Go to this repository GitHub` 可另開視窗連結至此 Repository 的 GitHub 頁面
  - 右邊按鈕 `Go back to *username repository list` 可返回該名用戶 ( _\*username_ ) 的 Repository 列表頁面
    <br/>

## Structure

<pre>
|- /src
　　　| - index.js
　　　| - App.js 設定頁面Router
　　　| - /stlyes 存放 css 檔案
　　　| - /pages
　　　　　　| - /homepage
　　　　　　|　　　| - Home.js 首頁
　　　　　　|　　　| - /components
　　　　　　|　　　　　　| - Search.js 首頁搜尋列
　　　　　　| - /user
　　　　　　|　　　| - User.js GitHUb用戶主頁面
　　　　　　|　　　| - /components
　　　　　　|　　　|　　 | - Headers.js 用於 User.js 和 Info.js 的頁面標頭顯示所查詢的用戶名稱
　　　　　　|　　　| - /repository
　　　　　　|　　　　　　| - Repos.js 顯示用戶 Repository 列表頁面的主畫面
　　　　　　|　　　　　　| - Infos.js 顯示用戶單一 Repository 頁面的主畫面
　　　　　　|　　　　　　| - /components
　　　　　　|　　　　　　 　　| - Repo.js 處理與回傳並回傳使用者 Repository 列表的資料
　　　　　　|　　　　　　 　　| - Info.js 處理並回傳用戶的單一 Repository 資料
　　　　　　| - /error
　　　　　　 　　　| - NotFound.js 不合法網頁路徑導向至 NotFound 頁面
</pre>

## Author

[You-Lun, Lin](https://urlun0404.netlify.app/index.html)
