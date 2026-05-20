function HobbyList({hobbies}) {
    return (
        <div>
            <h2>My Hobbies</h2>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
}
export default HobbyList