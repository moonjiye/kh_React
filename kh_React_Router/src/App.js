import './App.css';
// import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import MyPage from './pages/MyPage';
import Setting from './pages/Setting';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './pages/Layout';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<Login />} />    */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/profiles/:username" element={<Profile />} />
          <Route path="/articles" element={<Articles />} >
            <Route path="/articles/:id" element={<Article />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
