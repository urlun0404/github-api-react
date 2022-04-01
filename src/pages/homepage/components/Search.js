import { useNavigate } from "react-router-dom";

const Search = ({ userName, setUserName }) => {
  const getUserName = (e) => {
    setUserName(e.target.value);
  };

  const clearUserName = (e) => {
    e.preventDefault();
    setUserName("");
  };

  const navigate = useNavigate();
  const search = () => {
    userName !== "" && navigate(`/users/${userName}/repos/`);
  };
  return (
    <div className="search row">
      <input type="text" value={userName} onChange={getUserName} />
      <button onClick={search}>Search</button>
      <button type="reset" onClick={clearUserName}>
        Clear
      </button>
    </div>
  );
};

export default Search;
