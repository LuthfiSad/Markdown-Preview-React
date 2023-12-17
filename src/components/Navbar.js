import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const darkModeToggle = document.getElementById("dark-toggle");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.id = "dark";
      localStorage.theme = "dark";
    } else {
      document.body.id = "";
      localStorage.theme = "light";
    }
  }, [isDark]);
  return (
    <header className="head_bar">
      <h2 className="head_bar_title">Markdown Previewer</h2>
      <div className="head_right">
        <div className="toggle-darkmode">
          <span className="toggle-label">light</span>
          <input type="checkbox" className="hidden" id="dark-toggle" value={isDark} onChange={()=>setIsDark(!isDark)} />
          <label for="dark-toggle" className="toggle-container">
            <div className="toggle-circle"></div>
          </label>
          <span className="toggle-label">dark</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
