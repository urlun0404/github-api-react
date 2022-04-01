import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <header>
        <h1>404 Not Found</h1>
      </header>
      <main>
        {" "}
        <Link to={`/`} className="link" style={{ "font-size": "1.25rem" }}>
          Go back to homepage
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
