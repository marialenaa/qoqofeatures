import {useState} from 'react'

export default function Modal({onClick}) {

    return (
            <div className="modal-content">
            <span onClick={onClick} className="close">&times;</span>
                <div className="description">
                    <div className="columnDesc">
                        <div>
                        <p></p>
                        </div>
                        <div>
                        <p></p>
                        </div>
                    </div>
                    <div className="rowDesc">
                        <p></p>
                    </div>
                </div>
            <style>{`
          .modal-content {
            background: #0049ad;
            margin: auto;
          }
          .description {
            background: #00c2cb;
            margin: 15px;
            height: 50vh;
            width: 35vw;
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

    )
}