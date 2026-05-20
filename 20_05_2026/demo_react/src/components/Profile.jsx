function Profile({ name, course, goal }) {
  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Tên: {name}</p>
      <p>Môn học: {course}</p>
      <p>Mục tiêu: {goal}</p>
    </div>
  )
}

export default Profile