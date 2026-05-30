import { useState } from "react";
/**
 * useState() là hàm của React dùng để tạo state.
 *
 * State là dữ liệu mà khi thay đổi thì giao diện sẽ tự cập nhật.
 */
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import avatarImg from "./assets/images/avatar.png";
function App(){
  const [totalLike, setTotalLike] = useState(0);

  const [isOnline, setIsOnline] = useState(true);

  const [isDarkMode, setIsDarkMode] = useState(false);



  const handleLike = () => {
    setTotalLike(totalLike + 1);
  };

  const handleToggleStatus = () => {
    setIsOnline(!isOnline);
  };

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  


  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <ProfileCard
        fullName="Khúc Việt Anh"
        title="Student Profile Card"
        major="Software Engineering"
        avatar={avatarImg}
        hobbies={["Coding", "Music", "Football"]}
        totalLike={totalLike}
        isOnline={isOnline}
        isDarkMode={isDarkMode}
        onLike={handleLike}
        onToggleStatus={handleToggleStatus}
        onToggleTheme={handleToggleTheme}
  

      />
    </div>

  );
}
export default App;