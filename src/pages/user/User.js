import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import Repo from "./components/Repo";

const User = () => {
  const { username } = useParams();
  const url = `https://api.github.com/users/${username}/repos`;

  let [userRepos, setUserRepos] = useState([]);

  const getUserRepos = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setUserRepos([...userRepos, ...data]);
  };

  useEffect(() => {
    getUserRepos(url);
  }, []);

  return (
    <div>
      <Header />
      <Repo userRepos={userRepos} />
    </div>
  );
};

export default User;
