import { Link } from "react-router-dom";
import Repo from "./components/Repo";

const Repos = ({ userName, userRepos, repoLimit }) => {
  return (
    <main>
      <div className="row">
        <div className="col-7">Repository name</div>
        <div className="col-3">Repository stars</div>
      </div>
      {userRepos !== [] &&
        userRepos.map((repositroy, index) => {
          if (index < repoLimit) {
            return (
              <Link
                to={`/users/${userName}/repos/${repositroy.name}`}
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
    </main>
  );
};

export default Repos;
