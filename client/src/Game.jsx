import { useState, useEffect } from "react";
import './Game.css'
import Card from "./components/Card.jsx";

function Game (){

    const imageUrl = './src/images/backofcard.jpg'

    const [cats,setCats] = useState(null);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);

    function shuffleDeck(array){
        for(let i = array.length - 1; i > 0; i--){
            const random = Math.floor(Math.random() * (i + 1));
            [array[i], array[random]] = [array[random], array[i]];
        }
    }
    
    function addID(array){
        let catArray = []
        for (let i = 0; i < array.length-1; i++) {
            let object = {id: i, img: array[i]}
            catArray.push(object);
        }
        return catArray
    }

    useEffect(() => {
        const fetchData = async() => {
            const data = await (await fetch("https://api.thecatapi.com/v1/images/search?limit=6&api_key=live_Eh5ZLf7mKHLA9mwEJ5hoa8Rykvf1AKghBNe7bgTz41O6HpJmIw0CoTRgrxl2C1CT")).json();
            const cards = [];
            data.map((datum) => {cards.push(datum.url)});
            let deck = cards;
            deck.push(...cards);
            shuffleDeck(deck);
            let catArray = addID(deck)
            setCats(catArray);
        }
        fetchData();
    }, [])


    const [isSelected, setIsSelected] = useState(false);

   /*  function handleClick(cat){
        if()
    }
 */
    /* const handleClick = (cat) => {
       toggleShow(cat)
    }

    const toggleShow = async (cat) => {
        let allSelected = await document.querySelectorAll('.hide-back');
        let counter = allSelected.length;
        
        if(counter <= 1 && isSelected === false){
           await setIsSelected(true);
          
        }
        console.log(allSelected)
        if(counter === 1){
          
            let shownCats = document.querySelectorAll('.show-front')
            console.log(shownCats)
            setTimeout(() => {
                checkIfMatch(shownCats);
            }, 1000)  
        }
        
    }

    const checkIfMatch = async (array) => {
        if (array[0].src === array[1].src){
            const container1 = array[0].parentElement.parentElement;
            const container2 = array[1].parentElement.parentElement
            container1.remove()
            container2.remove()
        } else {
            setIsSelected(false)
        }
    } */

    return(
        <div className="game">
        {cats ? 
            cats.map((cat) => {
                return <Card
                    key={cat.id}
                    cat={cat}
                    width={200}
                    height={250}
                    backOfImage={imageUrl}
                    /* onClick={handleClick} */
                    back={isSelected ? "hide-back" : "show-back"}
                    front={isSelected ? "show-front" : "hide-front"}
                />
            }) : "Loading..."
        }

        </div>
    )
}

export default Game