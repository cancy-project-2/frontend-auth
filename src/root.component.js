import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login.component";
import GithubAuth from "./githubauth.component";

export default function Root(props) {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/github/auth" element={<GithubAuth />} />
      </Routes>
    </Router>
  );
}
