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

  const data = [
    {
      card_title: "1",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "2",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "3",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "4",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "5",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "6",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "7",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "8",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "9",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "10",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "11",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "12",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "13",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "14",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "15",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "16",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "17",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "18",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "19",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "20",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "21",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
    {
      card_title: "22",
      card_description: "blabla",
      illustration: "../images/goutte.svg",
    },
  ];

  if (!visible === true) {
    display = "none";
  }

  const handleClickTirage = () => {
    console.log('click')
    setVisible(false);
    let list = [];

    while (list.length < 4) {
      let newTirage = Math.floor(Math.random() * data.length);
      if (!list.includes(newTirage)) {
        list.push(newTirage);
      }
    }
    setTirageList(list);
    console.log(list);
  };

  const handleClickCard = (i) => {
    setShowModal ('')
    console.log("click", showModal)
  };

  const handleClose = () => {
    setShowModal("none")
    console.log("click", showModal)
  }

  const tirage = tirageList.map((card, i) => {
    return (
      <Card
        key={i}
        onClick={() => handleClickCard()}
        illustration={fakeIrmart[0].art.illustration.mime}
      />
    );
  });

  return (
    /* ------> PREMIERE PAGE <------- */
    <div className="page">
      <img className="branchHaut" src="../images/houx.webp" />
      <div className="row">
        <img className="picto" src="../images/goutte.svg" />
        <img className="oeil" src="../images/oeil.svg" />
        <img className="picto" src="../images/goutte.svg" />
      </div>
      <img className="voyante" src="../images/3.jpg" />
      <h1 className="newTirage" onClick={() => handleClickTirage()}>
        {" "}NOUVEAU TIRAGE{" "}
      </h1>

    {/* ------> CARDS SECTION <------- */}
      <div className="card">
        {tirage}
      </div>
        <img className="branchBas" src="../images/houx.webp" />
         
              <div id="myModal" className="modal row">
              <Modal onClick={() => handleClose()}/>
              </div>
    {/* ------> STYLE <------- */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing:border-box;
          // border : 1px red solid;

        }
        body{
          background: #0049ad;
          width: 100vw;
          height:100vh;
        }
      `}</style>
      <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
            .page {
              display:flex;
              flex-direction: column;
              align-items: center;
              height: auto;
            }
            .row{
              margin: 0 ;
              display:flex;
              justify-content: center;
            }
            .picto{
              display: ${display};
              padding: 20px;
              height: 15vh;
            }
            .oeil{
              display: ${display};
              margin-top: 50px;
              height: 10vh;
            }
            .voyante {
              display: ${display};
              height: 30vh;
              width: auto;
              border-radius:50%;
              padding-top: 10px;
            }
            .branchHaut {
              transform: rotate(0.91turn);
              width: 30vw;
              align-self: flex-start;
              position:absolute;
            }
            .branchBas {
              width: 30vw;
              transform: rotate(0.43turn);
              position: absolute;
              right: 0;
              bottom:0;
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
            }
            .card {
              position: absolute;
              margin-top: 190px;
              width:80vw;
              display: flex;
              justify-content: space-evenly;
              align-items:center;
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
