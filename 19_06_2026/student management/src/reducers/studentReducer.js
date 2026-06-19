export const STUDENT_ACTIONS = {
  ADD_STUDENT: 'ADD_STUDENT',
  DELETE_STUDENT: 'DELETE_STUDENT',
  EDIT_STUDENT: 'EDIT_STUDENT',
}

export function studentReducer(students, action) {
  switch (action.type) {
    case STUDENT_ACTIONS.ADD_STUDENT:
      return [...students, action.payload]

    case STUDENT_ACTIONS.DELETE_STUDENT:
      return students.filter((student) => student.id !== action.payload)

    case STUDENT_ACTIONS.EDIT_STUDENT:
      return students.map((student) =>
        student.id === action.payload.id ? action.payload : student
      )

    default:
      return students
  }
}
