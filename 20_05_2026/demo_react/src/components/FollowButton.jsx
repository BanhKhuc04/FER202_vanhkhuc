import { useState } from 'react'

function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false)

  function handleFollowClick() {
    setIsFollowing(!isFollowing)
  }

  return (
    <div>
      <h2>Follow Button</h2>

      <button onClick={handleFollowClick}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  )
}

export default FollowButton