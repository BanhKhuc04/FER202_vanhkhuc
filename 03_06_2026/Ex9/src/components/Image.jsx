function Image({ imageUrl }) {
  return (
    <div className="image-box">
      <img src={imageUrl} alt="FPT Logo" />
    </div>
  );
}

export default Image;