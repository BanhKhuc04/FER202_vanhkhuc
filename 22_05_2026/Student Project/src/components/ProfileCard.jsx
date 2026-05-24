function ProfileCard(props) {
  return (
    <div className="profile-card">
      <div className="top-bar">
        <button className="btn" onClick={props.onToggleTheme}>
          {props.isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="avatar-box">
        {props.avatar ? (
          <img className="avatar" src={props.avatar} alt="avatar" />
        ) : (
          <div className="avatar-placeholder">VA</div>
        )}
      </div>

      <h1>{props.fullName}</h1>
      <p className="profile-title">{props.title}</p>

      <div className="info-row">
        <span className="info-icon">🎓</span>
        <p>
          Major: <span>{props.major}</span>
        </p>
      </div>

      <div className="info-row">
        <span className="info-icon">⭐</span>
        <p>Hobbies:</p>
      </div>

      <div className="hobby-list">
        {props.hobbies.map((hobby, index) => (
          <span className="hobby-item" key={index}>
            {hobby}
          </span>
        ))}
      </div>

      <div className={props.isOnline ? "status online" : "status offline"}>
        {props.isOnline ? "Online" : "Offline"}
      </div>

      <div className="like-box">
        <p>Total Like</p>
        <h2>{props.totalLike}</h2>
      </div>

      <div className="button-group">
        <button className="btn" onClick={props.onLike}>
          Like
        </button>

        <button className="btn" onClick={props.onToggleStatus}>
          {props.isOnline ? "Go Offline" : "Go Online"}
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;