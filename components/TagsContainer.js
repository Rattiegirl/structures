const TagsContainer = ({ predictions }) => (
  <div className="tags-container">
    {predictions.map(
      ({ className, probability }) =>
        probability.toFixed(3) > 0 && (
          <div className="tag" key={className} color="geekblue">
            {className.split(",")[0]} {probability.toFixed(3)}
          </div>
        )
    )}
  </div>
);

export default TagsContainer;
