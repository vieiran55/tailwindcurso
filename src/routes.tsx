import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

export default function AppRouter() {
  return (
    <main >
      <Router >
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </main>
  );
}
