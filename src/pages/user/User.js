import { useParams } from "react-router-dom";
import Header from "./components/Header";
import Repo from "./components/Repo";

const User = () => {
  const { username } = useParams();

  return (
    <div>
      <Header />
      <Repo />
    </div>
  );
};

export default User;
