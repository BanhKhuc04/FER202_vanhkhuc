import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import SearchFilterBar from './components/SearchFilterBar'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'
import ThemeToggle from './components/ThemeToggle'
import { initialStudents } from './data/initialStudents.js'
import { ALL_MAJORS, MAJOR_OPTIONS } from './data/majors'
import {
  STUDENT_ACTIONS,
  studentReducer,
} from './reducers/studentReducer'

function getInitialStudents() {
  try {
    const savedStudents = localStorage.getItem('students')

    if (savedStudents) {
      const parsedStudents = JSON.parse(savedStudents)
      return Array.isArray(parsedStudents) ? parsedStudents : initialStudents
    }

    return initialStudents
  } catch (error) {
    console.error('Cannot load students from localStorage:', error)
    return initialStudents
  }
}

function generateStudentId(students) {
  if (students.length === 0) {
    return 1
  }

  return Math.max(...students.map((student) => Number(student.id))) + 1
}

export default function App() {
  const [students, dispatch] = useReducer(
    studentReducer,
    undefined,
    getInitialStudents
  )

  const [studentName, setStudentName] = useState('')
  const [studentAge, setStudentAge] = useState('')
  const [studentMajor, setStudentMajor] = useState(MAJOR_OPTIONS[0])

  const [searchText, setSearchText] = useState('')
  const [majorFilter, setMajorFilter] = useState(ALL_MAJORS)

  const [editingStudentId, setEditingStudentId] = useState(null)

  const isEditing = editingStudentId !== null

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  const filteredStudents = useMemo(() => {
    const keyword = searchText.trim().toLowerCase()

    return students.filter((student) => {
      const matchesName = student.name.toLowerCase().includes(keyword)

      const matchesMajor =
        majorFilter === ALL_MAJORS || student.major === majorFilter

      return matchesName && matchesMajor
    })
  }, [students, searchText, majorFilter])

  const clearInputFields = useCallback(() => {
    setStudentName('')
    setStudentAge('')
    setStudentMajor(MAJOR_OPTIONS[0])
    setEditingStudentId(null)
  }, [])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()

      const name = studentName.trim()
      const age = Number(studentAge)
      const major = studentMajor

      if (name === '') {
        alert('Please enter student name')
        return
      }

      if (!age || age <= 0) {
        alert('Please enter valid student age')
        return
      }

      if (isEditing) {
        dispatch({
          type: STUDENT_ACTIONS.EDIT_STUDENT,
          payload: {
            id: editingStudentId,
            name,
            age,
            major,
          },
        })
      } else {
        dispatch({
          type: STUDENT_ACTIONS.ADD_STUDENT,
          payload: {
            id: generateStudentId(students),
            name,
            age,
            major,
          },
        })
      }

      clearInputFields()
    },
    [
      studentName,
      studentAge,
      studentMajor,
      isEditing,
      editingStudentId,
      students,
      clearInputFields,
    ]
  )

  const handleEditStudent = useCallback((student) => {
    setStudentName(student.name)
    setStudentAge(String(student.age))
    setStudentMajor(student.major)
    setEditingStudentId(student.id)
  }, [])

  const handleDeleteStudent = useCallback(
    (studentId) => {
      dispatch({
        type: STUDENT_ACTIONS.DELETE_STUDENT,
        payload: studentId,
      })

      if (studentId === editingStudentId) {
        clearInputFields()
      }
    },
    [editingStudentId, clearInputFields]
  )

  const onSearchChange = useCallback((value) => {
    setSearchText(value)
  }, [])

  const onMajorFilterChange = useCallback((value) => {
    setMajorFilter(value)
  }, [])

  return (
    <main className="app">
      <section className="student-card">
        <header className="app-header">
          <div>
            <h1>Student Management</h1>
          </div>

          <ThemeToggle />
        </header>

        <StudentForm
          studentName={studentName}
          setStudentName={setStudentName}
          studentAge={studentAge}
          setStudentAge={setStudentAge}
          studentMajor={studentMajor}
          setStudentMajor={setStudentMajor}
          isEditing={isEditing}
          onSubmit={handleSubmit}
          onCancelEdit={clearInputFields}
        />

        <SearchFilterBar
          searchText={searchText}
          onSearchChange={onSearchChange}
          majorFilter={majorFilter}
          onMajorFilterChange={onMajorFilterChange}
        />

        <div className="student-count">
          Total students:{' '}
          <strong>{filteredStudents.length}</strong>
        </div>

        <StudentTable
          students={filteredStudents}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
        />
      </section>
    </main>
  )
}
