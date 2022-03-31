import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import Repos from "./Repos";

const User = () => {
  let [userRepos, setUserRepos] = useState([]);
  let [repoLimit, setRepoLimit] = useState(0);

  // fetch API to get all the requested user's repositories
  const { username } = useParams();
  const url = `https://api.github.com/users/${username}/repos`;
  let getUserRepos = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserRepos([...data]);
      });
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
    if (windowHeight + window.pageYOffset >= docHeight) {
      console.log(repoLimit);
    }
  };

  // load the API data
  useEffect(() => {
    getUserRepos(url);
  }, []);

  // set initial repositories
  useEffect(() => {
    setRepoLimit(userRepos.length < 10 ? userRepos.length : 10);
  }, [userRepos]);

  // trace the scroll position of the page
  useEffect(() => {
    window.addEventListener("scroll", scrollTracker);
    return () => {
      window.removeEventListener("scroll", scrollTracker);
    };
  }, []);

  return (
    <div>
      <Header userName={username} />
      <Repos userName={username} userRepos={userRepos} repoLimit={repoLimit} />
    </div>
  );
};

export default User;
