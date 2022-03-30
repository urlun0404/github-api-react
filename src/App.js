import Home from "./pages/homepage/Home";
import User from "./pages/user/User";
import NotFound from "./pages/error/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:username" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
