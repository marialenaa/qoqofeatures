// no need to import React, it's in scope by default with NextJS
import {useState} from 'react';


function Irmart() {
  const [tirageList, settirageList] = useState([])
  const forNumbers = []

 const handlaNewTirage = () => {
   console.log("click")
    while(forNumbers.length < 4){
      var newTirage = Math.floor(Math.random() * 24) + 1;
      if(forNumbers.indexOf(newTirage) === -1){
        settirageList([...tirageList, newTirage])
      } 
    }
 }
 console.log(tirageList)

  return (
      <div className="container"> 
       <div className='row'>
          <img src="../images/img1.png" />
        </div>   
          <div className='row'>
            <p className='newTirage' onClick={()=> handlaNewTirage()} >Nouveau Tirage</p>
            <p>{tirageList}</p>
            </div>
        
        <style jsx>{`
            .container {
              display:flex;
              width: auto;
              heigth: auto;
              background-color: #0059ad;
            }
            img {
              display: flex;
              justify-content: center;
              width: 250px;
              border-radius:50%;
            }
            .newTirage {
              cursor:pointer
            }
          `}</style>
      </div>
  
  
  );
}

export default Irmart
