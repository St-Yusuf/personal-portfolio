function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
    >
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}

export default DarkModeToggle;