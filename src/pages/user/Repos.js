import { Link } from "react-router-dom";
import Repo from "./components/Repo";

const Repos = ({ userName, userRepos, repoLimit }) => {
  return (
    <main className="repos list">
      <div className="row">
        <div className="col-7 title">Repository name</div>
        <div className="col-3 title">Repository stars</div>
      </div>
      {userRepos !== [] &&
        userRepos.map((repositroy, index) => {
          if (index < repoLimit) {
            return (
              <Link
                to={`/users/${userName}/repos/${repositroy.name}/repos`}
                className="row link"
              >
                <Repo
                  repoName={repositroy.name}
                  repoStars={repositroy.stargazers_count}
                />
              </Link>
            );
          }
        })}
      <div className="background"></div>
    </main>
  );
};

export default Repos;
