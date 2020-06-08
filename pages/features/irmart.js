// no need to import React, it's in scope by default with NextJS
import {useState} from 'react';


function Irmart() {
  const [tirageList, setTirageList] = useState([])

 const handleNewTirage = () => {
   console.log("click")
    let list = []

    while ( list.length <4 ){
      let newTirage = Math.floor(Math.random() * 21);
      if(!list.includes(newTirage)){
        list.push(newTirage)
      }
    }
    setTirageList(list)
 }
 console.log(tirageList)

  return (
      <div className="container"> 
       <div className='row'>
          <img src="../images/img1.png" />
        </div>   
          <div className='row'>
            <p className='newTirage' onClick={()=> handleNewTirage()} > Nouveau Tirage</p>
            <p>{tirageList}</p>
            </div>
        
        <style jsx>{`
            .container {
              display:flex;
              justify-content: space-evenly;
              width: auto;
              heigth: auto;
              background-color: #0059ad;
            }
            img {
              justify-content: center;
              width: 250px;
              border-radius:50%;
            }
            .newTirage {
              cursor:pointer;
              border : 5px red solid ;
            }
          `}</style>
      </div>
  
  
  );
}

export default Irmart
