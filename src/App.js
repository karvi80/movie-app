import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Movies from "./components/movies/Movies";
import Brightness4Icon from "@mui/icons-material/Brightness4";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`app ${theme}`}>
      <Brightness4Icon className="darkMoodIcon" onClick={toggleTheme} />
      <Sidebar />

      <div className="body">
        <Movies />
      </div>
    </div>
  );
}

export default App;
