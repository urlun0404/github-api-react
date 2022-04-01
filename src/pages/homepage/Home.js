const Home = () => {
  return (
    <div>
      <header>
        <h1>GitHub Repository Searcher</h1>
      </header>
      <main>
        <p>這是一個串接GitHub REST API的練習專案</p>
        <p>
          你可以在網址後面輸入
          <span className="code">
            / users / <span className="variable"> username </span>
            /repos
          </span>
          來尋找某位GitHub使用者的Repository
        </p>
        <p>
          ※<span className="variable"> username </span>
          請輸入有效的使用者 ※
        </p>
      </main>
    </div>
  );
};

export default Home;
