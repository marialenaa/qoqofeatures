// no need to import React, it's in scope by default with NextJS
import {useState} from 'react';
import Card from '../components/card';

function Irmart(props) {
  const [tirageList, setTirageList] = useState([])
  const [visible, setVisible] = useState(true)
  let display = ''
  let displayCard = ''

  const data = [
    {card_title: "1" , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '2' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '3' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '4' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '5' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '6' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '7' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '8' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '9' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '10' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '11', card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '12', card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '13' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '14' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '15' , card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '16', card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '17', card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '18', card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '19', card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '20', card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '21', card_description: "blabla", illustration: "../images/goutte.svg"},
    {card_title: '22' , card_description: "blabla", illustration: "../images/goutte.svg"},
  ]

  if(!visible === true){
    display = "none"
  }
  console.log(display)

 const handleClickTirage = () => {
   setVisible(false)
    let list = []

    while ( list.length <4 ){
      let newTirage = Math.floor(Math.random() * 21);
      if(!list.includes(newTirage)){
        list.push(newTirage)
      }

    }
    setTirageList(list)
    console.log(list)
  }
  
  const handleClickCard = ()=>{

  }
 
     const tirage = tirageList.map((card, i) => {
   return (<Card key={i} onClick={()=>handleClickCard()} illustration={data.illustration} /> )
 })

  return (
      <div className="container"> 
            <img className="branchHaut" src="../images/houx.webp" />
      <div className="row">
          <img className="picto" src="../images/goutte.svg" />
          <img className="oeil" src="../images/oeil.svg" />
          <img className="picto" src="../images/goutte.svg" />
      </div>
          <img className="voyante" src="../images/3.jpg" />
            <h1 className='newTirage' onClick={()=> handleClickTirage()} > NOUVEAU TIRAGE </h1>
      <div className="card" >
        {tirageList} 
        {tirage}
          {/* <Card onClick={()=>handleClickCard()} />  */}
         
      </div>
              <img className="branchBas" src="../images/houx.webp"  />
        <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
            .container {
              background: #0049ad;
              display:flex;
              flex-direction: column;
              align-items: center;
              height: 100%;
            }
            .row{
              margin: 0 ;
              display:flex;
              justify-content: center;
            }
            .picto{
              display: ${display};
              margin: 2vmax;
              height: 15vmin;
            }
            .oeil{
              display: ${display};
              padding-top: 5vmax;
              height: 14vmin;
            }
            .voyante {
              display: ${display};
              height: 50vmin;
              width: 53vmin;
              border-radius:50%;
              margin-top: 3vmin;
            }
            .branchHaut {
              width: 30vmax;
              justify-content center;
              align-self: flex-start;
              position:absolute;
            }
            .branchBas {
              width: 30vmax;
              align-self: flex-end;
              transform: rotate(0.5turn);
            }
            .newTirage {
              display: ${display};
              cursor:pointer;
              border : 15px #5e17eb solid ;
              background-color: white;
              height: auto ;
              width: 40vmax ;
              margin: 5vmin;
            }
            h1 {
              font-weight: bold;
              color: #ac74ff;
              font-size: 100px;
              text-align:center;
              font-family: 'Roboto', sans-serif;
            }
            .card {
              display: flex;
              align-self: start;
            }
          `}</style>
      </div>      
  
  
  );
}

export default Irmart
