import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import HobbyList from './components/HobbyList'
import Counter from './components/Counter'
import NameInput from './components/NameInput'
import FollowButton from './components/FollowButton'
function App() {
  const myHobbies = [
  'Coding',
  'Reading documentation',
  'Building websites',
  'Learning English',
  'Playing games'
]

  return (
    <div className="app-container">
      <Header
        title="ReactJS Learning Journey"
        subtitle="Học từng bước, code từng phần, hiểu từng lỗi."
      />

      <Profile
        name="Khúc Việt Anh"
        course="ReactJS"
        goal="Tự xây được website bằng React"
      />

      <HobbyList hobbies={myHobbies} />
      <Counter />
      <NameInput />
      <FollowButton />
    </div>
  )
}

export default App