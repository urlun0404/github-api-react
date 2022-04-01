# GitHub User's Repository Searcher

這是一個練習串接 GitHub REST API 提供搜尋 GitHub 使用者的 Repository 的專案。

## Demo

[Live Dome on Netlify](https://github-restapi-react.netlify.app/)

## Feature

- 使用方式: 點擊 Demo 進入首頁(如下圖)
  <img src="https://i.imgur.com/5bsz4Ln.png" alt="Search Image" style="width: 500px;"/>
- **搜尋方式**：
  - 進入首頁後可直接在網址列後面輸入 `/users/username/repos`
  - _username_ 請輸入 GitHub 已註冊的有效使用者帳戶名稱
- **更便捷的搜尋方式**：在首頁下方提供的搜尋列直接輸入使用者名稱，按 `Search` 按鈕就會幫忙直接連結到這位使用者的 Repository 清單頁面
- **查閱更多的 Repository**：預設只會顯示 10 個該名使用者的 Repositories，可以拉動捲軸向下，顯示更多的 Repositories。
- **查閱 Repository 的詳細資料**：點擊清單上的 Repository，會進入顯示這個 Repository 的詳細資料
  <img src="https://i.imgur.com/vPWruTz.png" alt="Search Image" style="width: 500px;"/>
  - 詳細資料下方按鈕：左邊按鈕連結至 Repository 的 GitHub 頁面，右邊連結可返回這位使用者的 Repository 清單頁面。
- 注意：可能會搜尋到沒有 public repository 的使用者，並顯示空的 Repository 清單。

## Project Structure

## Author

[You-Lun, Lin](https://urlun0404.netlify.app/index.html)
