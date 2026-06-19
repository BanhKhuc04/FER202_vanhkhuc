import StudentRow from './StudentRow'

export default function StudentTable({ students, onEdit, onDelete }) {
  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>MAJOR</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <StudentRow
                key={student.id}
                student={student}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="empty-message">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
