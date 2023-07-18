import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Loading() {
  return <>Loading...</>;
}

function Users() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 3000);
  }, []);

  if (display) {
    return <h2>Users</h2>;
  }
}

const LoadableUsers = loadable(() => Users, {
  fallback: <Loading />,
});

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<LoadableUsers />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
