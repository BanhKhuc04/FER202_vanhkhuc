import { useTheme } from "../context/ThemeContext";

export default function Theme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div style={{ background: theme.background, padding: 20, borderRadius: 8 }}>
      <p style={{ color: theme.foreground }}>Current Theme</p>
      <button
        onClick={toggleTheme}
        style={{
          background: theme.foreground,
          color: theme.background,
          border: "none",
          padding: "8px 16px",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
