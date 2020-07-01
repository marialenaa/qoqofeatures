export function Card({illustration,onClick}){

    return(
        <div className="div">
                <img onClick={onClick} src="/images/card.png" ></img>
            <div className="overlay">
            <img className='overlay-content' src={illustration} ></img>
            </div>
            <style jsx>{`
            .div {
                width:20vw;
                z-index: 1;
                display:flex;
                flex-direction: column;
                align-items:center;
            }
            img {
                width: 10vw; 
                }
            .overlay {
                position: absolute;
                top:130px;
                -webkit-transform: scale(0);
                -ms-transform: scale(0);
                transform: scale(0);
                -webkit-transition: .3s ease;
                transition: .3s ease;
            }
            .overlay-content{
                width: 20vw;
                align-content: center;
            }
            .div:hover .overlay {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
              }
              
            `}</style>
        </div>
    );
}

export function Modal({onClick, artTitle,artDescription,artAutor}){


    return(
        <div className="modal-content">
            <span onClick={onClick} className="close">&times;</span>
                <div className="description">
                    <div className="columnDesc">
                        <div className="modal_title">
                        <p>{artTitle}</p>
                        </div>
                        <div className="modal_desc">
                        <p>{artDescription}</p>
                        </div>
                    </div>
                    <div className="modal_into">
                        <p>{artAutor} Situé </p>
                    </div>
                </div>
            <style>{`
          .modal-content {
            font-family: 'Roboto Condensed', sans-serif;
            z-index: 1;
            background: #0049ad;
            margin: auto;
          }
          .description {
            background: #00c2cb;
            margin:15px;
            padding: 17gpx;
            height: 50vh;
            width: 35vw;
            border-radius: 10%;
            display:flex;
            flex-direction:column;
            
          }
          .columnDesc{
            height: 50%;
            display:flex;
            justify-content: space-between;
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
          .modal_title {
            font-size: 55px;
          }
          .modal_into {
            font-weight: bold;
            font-size: 18px;
          }
          `}</style>
      </div>

    )
}