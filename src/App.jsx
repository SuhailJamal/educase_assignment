import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import AccountProfile from "./pages/AccountProfile";

function App() {
  return (
    <>
      <Router>
        <div className="flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/account-profile" element={<AccountProfile />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
