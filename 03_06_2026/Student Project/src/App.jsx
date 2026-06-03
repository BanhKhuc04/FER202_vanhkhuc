import { Component } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import avatarImg from "./assets/images/avatar.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalLike: 0,
      isOnline: true,
      isDarkMode: false,
    };
  }

  handleLike = () => {
    this.setState({
      totalLike: this.state.totalLike + 1,
    });
  };

  handleToggleStatus = () => {
    this.setState({
      isOnline: !this.state.isOnline,
    });
  };

  handleToggleTheme = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode,
    });
  };

  render() {
    return (
      <div className={`app ${this.state.isDarkMode ? "dark" : "light"}`}>
        <ProfileCard
          fullName="Khúc Việt Anh"
          title="Student Profile Card"
          major="Software Engineering"
          avatar={avatarImg}
          hobbies={["Coding", "Music", "Football"]}
          totalLike={this.state.totalLike}
          isOnline={this.state.isOnline}
          isDarkMode={this.state.isDarkMode}
          onLike={this.handleLike}
          onToggleStatus={this.handleToggleStatus}
          onToggleTheme={this.handleToggleTheme}
        />
      </div>
    );
  }
}

export default App;