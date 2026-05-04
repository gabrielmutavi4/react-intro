import { useState } from "react";

function Profile({ name, role }) {
  const [isFollowing, setIsFollowing] = useState(false);

  function handleFollow() {
    setIsFollowing(!isFollowing);
  }

  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>{role}</p>

      <button onClick={handleFollow} style={styles.button}>
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default Profile;
