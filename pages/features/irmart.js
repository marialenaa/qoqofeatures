// no need to import React, it's in scope by default with NextJS
import { useState } from "react";
import Card from "components/card";
import fakeIrmart from "data/fakeIrmart";

function Irmart(props) {
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
  console.log(display);

  const handleClickTirage = () => {
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
    setShowModal(true)
    console.log("click", showModal)
  };

  const handleClose = () => {
    setShowModal(false)
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
      
    {/* ------> MODAL <------- */}
    <div id="myModal" className="modal row">
      <div className="modal-content">
      <span onClick={()=>handleClose()} className="close">&times;</span>
      <div className="descriptionDiv">
      <div className="tarot">
        </div>
        <div className="description">
          <div className="columnDesc">
            <div>
            <p>{fakeIrmart[0].card_description}</p>
            </div>
            <div>
            <p>{fakeIrmart[0].card_description}</p>
            </div>
          </div>
          <div className="rowDesc">
            <p>{fakeIrmart[0].card_description}</p>
          </div>
        </div>
        <div className="art">
        <p>{fakeIrmart[0].card_title}</p>
        </div>
      </div>
      </div>
      </div>

    {/* ------> STYLE <------- */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing:border-box;
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
              margin: 2vmax;
              height: 15vh;
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
              align-self: flex-start;
              position:absolute;
            }
            .branchBas {
              width: 30vw;
              align-self: flex-end;
              transform: rotate(0.5turn);
              position:absolute;
            }
            .newTirage {
              display: ${display};
              cursor:pointer;
              border : 15px #5e17eb solid ;
              background-color: white;
              height: auto ;
              width: 40vw ;
              margin: 5vmin;
            }
            h1 {
              font-weight: bold;
              color: #ac74ff;
              font-size: 80px;
              text-align:center;
              font-family: 'Roboto', sans-serif;
            }
            .card {
              width:80vw;
              height: 100vh;
              display: flex;
              justify-content: space-evenly;
              align-items:center;
              border : 1px red solid;
            }
            
          #myModal {
            display: ${showModal};
            margin-top: 160px;
            width: 90%;
            position: fixed;
            z-index: 1;
            border: 1px red solid;
          }
          .modal-content {
            background: #0049ad;
            margin: auto;
          }
          .descriptionDiv{
            display:flex;            
          }
          .tarot {
            background: #0049ad;
            margin: 15px;
            height: 40vh;
            width: 15vw;
            border: 8px #00c2cb solid;
          }
          .description {
            background: #00c2cb;
            margin: 15px;
            height: 300px;
            width: 400px;
            border-radius: 10%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-evenly;
          }
          .columnDesc{
            height: 50%;
            display:flex;
          }
          .art {
            background: #0049ad;
            margin: 15px;
            height: 40vh;
            width: 15vw;
            border: 8px #00c2cb solid;
          }
          .close {
            color: #00c2cb;
            float: right;
            font-size: 30px;
            font-weight: bold;
          }
          .close:hover,
          .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
          }
          `}</style>
    </div>
  );
}

export default Irmart;
