import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import { HomePage } from "../pages/Home/HomePage";
import { Tweets } from "../pages/Tweets/Tweets";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
