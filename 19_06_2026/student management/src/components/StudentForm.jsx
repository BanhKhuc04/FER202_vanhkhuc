import { MAJOR_OPTIONS } from '../data/majors'

export default function StudentForm({
  studentName,
  setStudentName,
  studentAge,
  setStudentAge,
  studentMajor,
  setStudentMajor,
  isEditing,
  onSubmit,
  onCancelEdit,
}) {
  return (
    <form className="student-form" onSubmit={onSubmit}>
      <h2>{isEditing ? 'Edit Student' : 'Add New Student'}</h2>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            id="studentName"
            type="text"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
            placeholder="Enter student name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="studentAge">Student Age</label>
          <input
            id="studentAge"
            type="number"
            min="1"
            value={studentAge}
            onChange={(event) => setStudentAge(event.target.value)}
            placeholder="Enter student age"
          />
        </div>

        <div className="form-group">
          <label htmlFor="studentMajor">Student Major</label>
          <select
            id="studentMajor"
            value={studentMajor}
            onChange={(event) => setStudentMajor(event.target.value)}
          >
            {MAJOR_OPTIONS.map((major) => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="primary-btn">
          {isEditing ? 'Save Student' : 'Add Student'}
        </button>

        {isEditing && (
          <button
            type="button"
            className="secondary-btn"
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}
