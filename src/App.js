import Navbar from "./Navbar";
import Home from "./home";
import Create from './Create.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Clock from "./Clock";
import Conert from "./Convert";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blogs/:id" element={<BlogDetails />} />
            <Route exact path="/clock" element={<Clock />} />
            <Route exact path="/convert" element={<Conert />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
