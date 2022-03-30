const Repo = ({ repoName, repoStars }) => {
  return (
    <div className="row">
      <div className="col-7">{repoName}</div>
      <div className="col-3">{repoStars}</div>
    </div>
  );
};
export default Repo;
