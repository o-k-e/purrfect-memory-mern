function Card({ cat, width, backOfImage, height, handleClick, selected, stopFlip }) {
    return (
      <div
        className="w-[200px] h-[250px] perspective-1000"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${selected ? "rotate-y-180" : ""}`}>
          {/* Front image */}
          <img
            className="absolute w-full h-full object-cover backface-hidden rounded-md"
            src={backOfImage}
            alt="Back of card"
            onClick={() => !stopFlip && handleClick(cat)}
          />
          {/* Back image */}
          <img
            className="absolute w-full h-full object-cover backface-hidden rotate-y-180 rounded-md"
            src={cat.img}
            alt="Front of card"
          />
        </div>
      </div>
    );
  }
  
  export default Card;