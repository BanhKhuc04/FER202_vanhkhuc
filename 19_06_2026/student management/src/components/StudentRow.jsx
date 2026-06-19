export default function StudentRow({ student, onEdit, onDelete }) {
  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>
        <div className="table-actions">
          <button
            type="button"
            className="edit-btn"
            onClick={() => onEdit(student)}
          >
            Edit
          </button>

          <button
            type="button"
            className="delete-btn"
            onClick={() => onDelete(student.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}
