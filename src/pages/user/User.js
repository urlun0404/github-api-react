import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./components/Header";
import Repos from "./repository/Repos";

const User = () => {
  const [userRepos, setUserRepos] = useState([]);
  let [repoLimit, setRepoLimit] = useState(0);
  let [totalRepos, setTotalRepos] = useState(0);
  let [apiPage, setApiPage] = useState(1);

  // fetch API to get all the requested user's repositories
  const { username } = useParams();

  const getUserTotalRepos = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((d) => {
        setTotalRepos(d.public_repos);
        getUserRepos(username, apiPage);
      });
  };

  const maxPerPage = 100;
  const getUserRepos = (username, page) => {
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${maxPerPage}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserRepos([...userRepos, ...data]);
        setApiPage(++apiPage);
      });
  };

  // append repositories to list
  const updateRepo = () => {
    if (repoLimit < userRepos.length) {
      setRepoLimit(Math.min((repoLimit += 10), userRepos.length));
    }
    if (repoLimit == userRepos.length && userRepos.length < totalRepos) {
      getUserRepos(username, apiPage);
    }
  };

  // trace if user scrolls to the bottom of the page
  const scrollTracker = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    if (Math.ceil(windowHeight + window.pageYOffset) >= docHeight) {
      setTimeout(updateRepo, 200);
    }
  };

  // load the API data first
  useEffect(() => {
    getUserTotalRepos(username);
  }, []);

  // limit the number of newly appended repositories
  useEffect(() => {
    setRepoLimit(
      repoLimit === 0 ? Math.min(userRepos.length, 10) : (repoLimit += 10)
    );
  }, [userRepos]);

  // trace the scroll position of the page
  useEffect(() => {
    window.addEventListener("scroll", scrollTracker);
    return () => {
      window.removeEventListener("scroll", scrollTracker);
    };
  }, [repoLimit]);

  return (
    <div>
      <Header userName={username} />
      <div className="row">
        <span>點擊下方Repository看更多資訊，或者</span>
        <span>
          <Link to={`/`} className="link" style={{ fontSize: "1.25rem" }}>
            返回首頁
          </Link>
        </span>
      </div>
      <Repos userName={username} userRepos={userRepos} repoLimit={repoLimit} />
    </div>
  );
};

export default User;
