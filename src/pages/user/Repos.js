import Repo from "./components/Repo";

const Repos = ({ userRepos, repoLimit }) => {
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
              <Repo
                repoName={repositroy.name}
                repoStars={repositroy.stargazers_count}
              />
            );
          }
        })}
    </main>
  );
};

export default Repos;
