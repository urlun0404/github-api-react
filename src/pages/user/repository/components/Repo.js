const Repo = ({ repoName, repoStars }) => {
  return (
    <div className="row">
      <div className="col-7 link">{repoName}</div>
      <div className="col-3 link">{repoStars}</div>
    </div>
  );
};
export default Repo;
