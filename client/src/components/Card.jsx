

function Card({cat, width, backOfImage, height, handleClick, back, front}){

   

    return(
        <div className="container" style={{width: `${width}px`, height: `${height}px`}} > 
        <div className="card">
       
        <img className={front} src={cat.img} width={width} height={height}></img>
      
        </div>

        <div className="card">
      
        <img className={back} onClick={() => handleClick(cat)} src={backOfImage} width={width} height={height}></img>
    
        </div>
        </div>
        
    )
}

export default Card