const Repos = ({ userRepos, repoLimit }) => {
  return (
    <main>
      <ul>
        {userRepos !== [] &&
          userRepos.map((repo, index) => {
            if (index < repoLimit) {
              return <li>{repo.name}</li>;
            }
          })}
      </ul>
    </main>
  );
};

export default Repos;
