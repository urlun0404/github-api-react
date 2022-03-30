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

  // load the API data
  useEffect(() => {
    getUserRepos(url);
  }, []);

  // set initial repositories
  useEffect(() => {
    setRepoLimit(userRepos.length < 10 ? userRepos.length : 10);
  }, [userRepos]);

  return (
    <div>
      <Header userName={username} />
      <Repos userName={username} userRepos={userRepos} repoLimit={repoLimit} />
    </div>
  );
};

export default User;
