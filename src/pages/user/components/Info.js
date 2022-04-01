const Info = ({ repoInfo }) => {
  return (
    <main>
      <div className="row">
        <div className="col-4">fullname</div>
        <div className="col-6">{repoInfo.full_name}</div>
      </div>
      <div className="row">
        <div className="col-4">description</div>
        <div className="col-6">{repoInfo.description}</div>
      </div>
      <div className="row">
        <div className="col-4">stars</div>
        <div className="col-6">{repoInfo.stargazers_count}</div>
      </div>
    </main>
  );
};

export default Info;
