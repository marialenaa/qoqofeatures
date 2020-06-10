// no need to import React, it's in scope by default with NextJS
import { useState } from "react";
import Card from "components/card";
import fakeIrmart from "data/fakeIrmart";
import Modal from "components/modalIrmart"

function Irmart() {
  const [tirageList, setTirageList] = useState([]);
  const [visible, setVisible] = useState(true);
  const [showModal, setShowModal] = useState('none')
  let display = "";
  let displayCard = "";

  if (!visible === true) {
    display = "none";
  }

  // <------ MECANIQUE TIRAGE 4 RANDOM CARD SECTION -------->

  const handleClickTirage = () => {
    console.log('click')
    setVisible(false);
    let list = [];

    while (list.length < 4) {
      let newTirage = Math.floor(Math.random() * 21);  // have replace "21" by real dataCard 
      if (!list.includes(newTirage)) {
        list.push(newTirage);
      }
    }
    setTirageList(list);
    console.log(list);
  };

  const tirage = tirageList.map((card, i) => {
    return (
      <Card
        key={i}
        onClick={() => handleClickCard()}
        illustration={fakeIrmart[0].art.illustration.url}
      />
    );
  });

  // <------ CLICK CARD OPEN MODAL SECTION -------->
  const handleClickCard = (i) => {
    setShowModal ('')
    console.log("click", showModal)
  };

  const handleClose = () => {
    setShowModal("none")
    console.log("click", showModal)
  }

  return (
  /* ------> PREMIERE PAGE <------- */
    <div className="page">
      <img className="topBranch" src="../images/houx.webp" />
      <div className="row">
        <img className="drop" src="../images/goutte.svg" />
        <img className="eye" src="../images/oeil.svg" />
        <img className="drop" src="../images/goutte.svg" />
      </div>
      <img className="irmaPic" src="../images/3.jpg" />
      <h1 className="newTirage" onClick={() => handleClickTirage()}>
        {" "}NOUVEAU TIRAGE{" "}
      </h1>

  {/* <------- TIRAGE 4 RANDOM CARD SECTION -------->*/}
      <div className="card">
        {tirage}
      </div>
        <img className="bottomBranch" src="../images/houx.webp" />
         
              <div id="myModal" className="modal row">
              <Modal onClick={() => handleClose()}/>
              </div>
  {/* <-------  STYLE SECTION------> */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing:border-box;
          // border : 1px red solid;

        }
        body{
          background: #0049ad;
          width: auto;
          height:auto;
        }
      `}</style>
      <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
            .page {
              display:flex;
              flex-direction: column;
              // align-items: center;
              height: auto;
            }
            .row{
              margin: 0 ;
              display:flex;
              justify-content: center;
              align-self: center;
            }
            .drop{
              display: ${display};
              padding: 20px;
              height: 15vh;
            }
            .eye{
              display: ${display};
              margin-top: 50px;
              height: 10vh;
            }
            .irmaPic {
              display: ${display};
              width: 18vw;
              border-radius:50%;
              padding-top: 10px;
              align-self: center;
            }
            .topBranch {
              transform: rotate(0.91turn);
              width: 30vw;
              align-self: flex-start;
              position:absolute;
            }
            .bottomBranch {
              align-self: flex-end;
              position: absolute;
              bottom: 0;
              width: 30vw;
              transform: rotate(0.43turn);
            }
            .newTirage {
              display: ${display};
              cursor:pointer;
              border : 15px #5e17eb solid ;
              background-color: white;
              height: auto ;
              width: 25vw ;
              margin: 15px;
            }
            h1 {
              font-weight: bold;
              color: #ac74ff;
              font-size: 40px;
              text-align:center;
              font-family: 'Roboto', sans-serif;
              align-self: center;
            }
            .card {
              align-self: center;
              position: absolute;
              margin-top: 90px;
              width:80vw;
              display: flex;
              justify-content: center;
            }
            
          #myModal {
            display: ${showModal};
            width: 100%;
            height:100%;
            position: fixed;
            z-index: 1;
            border: 1px red solid;
          }
          `}</style>
    </div>
  );
}

export default Irmart;
