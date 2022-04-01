# GitHub User's Repository Searcher

這是一個練習串接 GitHub REST API 提供搜尋 GitHub 使用者 Public Repository 的專案。

## Demo

[Live Dome on Netlify](https://github-restapi-react.netlify.app/)

## How to Use

點擊 Demo 進入首頁
<img src="https://i.imgur.com/5bsz4Ln.png" alt="Search Image" style="width: 500px;"/>

### 搜尋

搜尋 GitHub 使用者名稱會導向到這位使用者的 GitHub Public Repository 清單頁面

- 進入首頁後可直接在網址列後面輸入 `/users/username/repos`
- **更便捷的搜尋方式**：在搜尋列輸入 `使用者名稱` ，按 `Search` 按鈕就會連結到這位使用者的 Repository 清單頁面
- **_username_** 請輸入 GitHub 已註冊的有效使用者帳戶名稱。
- **注意**：可能會搜尋到沒有 public repository 的使用者，並顯示空的 Repository 清單。

### 顯示更多的 Repository

清單頁面預設只會顯示 10 個該名使用者的 Repositories，可以拉動捲軸向下，顯示更多的 Repositories。

### 檢視 Repository 的詳細資料

點擊清單頁面上的 Repository 會進入這個 Repository 的詳細資料頁面
<img src="https://i.imgur.com/vPWruTz.png" alt="Search Image" style="width: 500px;"/>

- 詳細資料下方按鈕
  - 左邊按鈕連結至 Repository 的 GitHub 頁面
  - 右邊連結可返回這位使用者的 Repository 清單頁面

## Structure

|- /src
　　　| - index.js
　　　| - App.js
　　　| - /stlyes 存放 css 檔案
　　　| - /pages
　　　　　　| - /homepage
　　　　　　|　　　| - Home.js 首頁
　　　　　　|　　　| - /components
　　　　　　|　　　　　　| - Search.js 首頁搜尋列
　　　　　　| - /user
　　　　　　|　　　| - User.js 使用者主頁面
　　　　　　|　　　| - /components
　　　　　　|　　　|　　　| - Headers.js
　　　　　　|　　　| - /repository
　　　　　　|　　　　　　| - Repos.js 顯示使用者 Repository 所有清單項目主畫面
　　　　　　|　　　　　　| - Infos.js 顯示使用者個別 Repository 所有詳細資料項目主畫面
　　　　　　|　　　　　　| - /components
　　　　　　|　　　　　　 　　| - Repo.js 回傳使用者 Repository 清單項目
　　　　　　|　　　　　　 　　| - Info.js 回傳使用者個別 Repository 詳細資料項目
　　　　　　| - /error
　　　　　　 　　　| - NotFound.js 若網址列輸入不合法路徑皆會導向 NotFound 頁面

## Author

[You-Lun, Lin](https://urlun0404.netlify.app/index.html)
