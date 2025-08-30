const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(6).fill("").map((_, i) => (
        <div key={i} className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-line full"></div>
          <div className="shimmer-line medium"></div>
          <div className="shimmer-line short"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
