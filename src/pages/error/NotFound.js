import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <header>
        <h1>The Page is Not Found</h1>
      </header>
      <main>
        <Link to={`/`} className="link" style={{ fontSize: "1.25rem" }}>
          Go back to homepage
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
