import React, {  useState } from "react";
import './App.css';
import asking  from './Gifs/asking.gif'
import please  from './Gifs/please.gif'
import hmm  from './Gifs/hmm.gif'
import pleaseeee  from './Gifs/pleaseeee.gif'
import finallly  from './Gifs/finallly.gif'
import audio  from './Gifs/audio.mp3'
import { Button } from "react-bootstrap";

function HPD( {crushName}) {
    const[counter, setCounter]= useState(0)
const list = [
    {
    gif:asking,
    title:"Happy Propose Day 🤗",
    subTitle:"Do you Love Me ? ❤🙈",
    },
    {
    gif: please,
    title:"Soch Le Acche Se 😭",
    subTitle:"Do you Love Me ? 🙈",
    },
    {
    gif:hmm,
    title:"Ek Aur Bar Soch Le 😭",
    subTitle:"Do you Love Mee ?? Yes Bol 🥺",
    },
    {
    gif:pleaseeee,
    title:"Maan Ja Na Kitna Bhav Khayegi",
    subTitle:"Yes Bol De Naa 😈",
    },
    {
    gif:finallly,
    title:` ❤ `,
    subTitle:`I love you tooooo.. ${crushName}`,
    }
]
    function moveButton() {
        if(counter>2){
            let noButton=document.getElementById('random-button')
  const x = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
noButton.style.position="absolute"
  noButton.style.top = `${y}px`;
  noButton.style.left = `${x}px`;

        }else{
            setCounter(prev=>++prev)
        }
    }
 
    return (
    <div >
        <audio
        src={audio}
        loop
        autoPlay
      />
        <img src={list[counter].gif} width="500" height="500" />
      <div><h2>{list[counter].title}</h2></div>
      <div><h3>{list[counter].subTitle}</h3></div>
      {counter!=4? <div className="agreeButton">
       <Button variant="primary" className="w-10" id="yes-button" onClick={()=>{setCounter(4)}}>Yes</Button> 
      <Button variant="primary" className="w-10"
      style={{position: counter<=3?'relative':'absolute !important'}}
       id="random-button"  onClick={moveButton}>No</Button>
       </div>:null}
      
    </div>
  );
}

export default HPD;
