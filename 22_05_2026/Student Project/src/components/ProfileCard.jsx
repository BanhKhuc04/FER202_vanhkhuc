import { Component } from "react";

class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-card">
        <div className="top-bar">
          <button className="btn" onClick={this.props.onToggleTheme}>
            {this.props.isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="avatar-box">
          {this.props.avatar ? (
            <img className="avatar" src={this.props.avatar} alt="avatar" />
          ) : (
            <div className="avatar-placeholder">VA</div>
          )}
        </div>

        <h1>{this.props.fullName}</h1>
        <p className="profile-title">{this.props.title}</p>

        <div className="info-row">
          <span className="info-icon">🎓</span>
          <p>
            Major: <span>{this.props.major}</span>
          </p>
        </div>

        <div className="info-row">
          <span className="info-icon">⭐</span>
          <p>Hobbies:</p>
        </div>

        <div className="hobby-list">
          {this.props.hobbies.map((hobby, index) => (
            <span className="hobby-item" key={index}>
              {hobby}
            </span>
          ))}
        </div>

        <div
          className={
            this.props.isOnline ? "status online" : "status offline"
          }
        >
          {this.props.isOnline ? "Online" : "Offline"}
        </div>

        <div className="like-box">
          <p>Total Like</p>
          <h2>{this.props.totalLike}</h2>
        </div>

        <div className="button-group">
          <button className="btn" onClick={this.props.onLike}>
            Like
          </button>

          <button className="btn" onClick={this.props.onToggleStatus}>
            {this.props.isOnline ? "Go Offline" : "Go Online"}
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileCard;