import { useState } from "react";
import Search from "./components/Search";
const Home = () => {
  let [username, setUserName] = useState("");
  return (
    <div>
      <header>
        <h1>GitHub Repository Searcher</h1>
      </header>
      <main className="home">
        <p>
          這是一個串接 GitHub REST API 提供搜尋 GitHub 使用者 Repository
          的練習專案
        </p>
        <h2>如何使用?</h2>
        <h3>你可以</h3>
        <p>
          在網址後面輸入
          <span className="code">
            /users/<span className="variable">username</span>/repos
          </span>
          來尋找某位GitHub使用者的Repository
        </p>
        <h3>或者</h3>
        <p>使用下面的搜尋列可以更方便地幫助搜尋</p>
        <Search userName={username} setUserName={setUserName} />
        <p>
          ※<span className="variable"> username </span>
          請輸入有效的使用者 ※
        </p>
      </main>
    </div>
  );
};

export default Home;
