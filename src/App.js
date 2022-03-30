import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import User from "./pages/user/User";
import Infos from "./pages/user/Infos";
import NotFound from "./pages/error/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:username" element={<User />} />
        <Route path="/users/:username/repos/:repo" element={<Infos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
