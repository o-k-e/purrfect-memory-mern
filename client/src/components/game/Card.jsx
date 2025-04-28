function Card({
	cat,
	width,
	height,
	backOfImage,
	handleClick,
	selected,
	stopFlip,
}) {
	return (
		<div
			className="w-[200px] h-[250px] perspective-1000"
			style={{ width: `${width}px`, height: `${height}px` }}
		>
			<div
				className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
					selected ? 'rotate-y-180' : ''
				}`}
			>
				{/* Front side (Back of the card) */}
				<img
					src={backOfImage}
					alt="Back of card"
					className="absolute w-full h-full object-cover backface-hidden rounded-md"
					onClick={() => !stopFlip && handleClick(cat)}
				/>

				{/* Back side (Image of the cat) */}
				<img
					src={cat.img}
					alt="Front of card"
					className="absolute w-full h-full object-cover backface-hidden rotate-y-180 rounded-md"
				/>
			</div>
		</div>
	);
}

export default Card;
