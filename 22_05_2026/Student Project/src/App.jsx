import { useState } from "react";
import "./App.css";
import avatarImg from "./assets/images/avatar.png";
function App() {
  // useState + array destructuring
  const [darkMode, setDarkMode] = useState(false);

  const [student, setStudent] = useState({
    avatar: avatarImg,
    fullName: "Khúc Việt Anh",
    studentId: "SE190444",
    className: "SE1904",
    major: "Software Engineering",
    hobbies: ["Coding", "Music", "Football", "Gaming", "Reading"],
    isOnline: true,
    totalLike: 120,
  });

  // object destructuring
  const {
    avatar,
    fullName,
    studentId,
    className,
    major,
    hobbies,
    isOnline,
    totalLike,
  } = student;

  // let + oneline hay offline có điều kiệnn
  let statusText = isOnline ? "Online" : "Offline";

  // arrow function: tăng like
  const handleLike = () => {
    setStudent({
      ...student,
      totalLike: totalLike + 1,
    });
  };

  // arrow function: đổi online/offline
  const handleToggleStatus = () => {
    setStudent({
      ...student,
      isOnline: !isOnline,
    });
  };

  // arrow function: đổi light/dark mode
  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <div className="profile-card">
        <div className="top-bar">
          <button className="theme-btn" onClick={handleToggleTheme}>
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="avatar-wrapper">
          <img src={avatar} alt="Student Avatar" className="avatar" />

          <span
            className={`status-dot ${
              isOnline ? "online-dot" : "offline-dot"
            }`}
          ></span>
        </div>

        <h1>{fullName}</h1>

        <p className="profile-title">Student Profile Card</p>

        <p className={`status-text ${isOnline ? "online-text" : "offline-text"}`}>
          {statusText}
        </p>

        <div className="info-section">
          <div className="info-row">
            <span>Student ID</span>
            <strong>{studentId}</strong>
          </div>

          <div className="info-row">
            <span>Class Name</span>
            <strong>{className}</strong>
          </div>

          <div className="info-row">
            <span>Major</span>
            <strong>{major}</strong>
          </div>
        </div>

        <div className="hobby-section">
          <h2>Hobbies</h2>

          <ul className="hobby-list">
            {hobbies.map((hobby, index) => (
              <li className="hobby-item" key={index}>
                {hobby}
              </li>
            ))}
          </ul>
        </div>

        <div className="like-card">
          <p>Total Like</p>
          <h2>{totalLike}</h2>
        </div>

        <div className="button-group">
          <button className="like-btn" onClick={handleLike}>
            👍 Like
          </button>

          <button className="status-btn" onClick={handleToggleStatus}>
            {isOnline ? "Go Offline" : "Go Online"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;