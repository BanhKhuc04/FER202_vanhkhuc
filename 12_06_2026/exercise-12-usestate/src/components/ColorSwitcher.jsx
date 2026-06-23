const colors = ["red", "blue", "green", "yellow", "purple"];

export default function ColorSwitcher({ setColor }) {
  return (
    <select onChange={(e) => setColor(e.target.value)} defaultValue="">
      <option value="" disabled>
        Select a color
      </option>

      {colors.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}
