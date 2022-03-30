import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import Repos from "./Repos";

const User = () => {
  const { username } = useParams();
  const url = `https://api.github.com/users/${username}/repos`;
  let [userRepos, setUserRepos] = useState([]);
  let [repoLimit, setRepoLimit] = useState(0);

  let getUserRepos = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserRepos([...data]);
      })
      .catch((err) => console.log(err));
  };

  // get data using GitHub REST API
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
