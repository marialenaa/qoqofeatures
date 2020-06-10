import { useState } from "react";


export default function Card({illustration,onClick}){
    let display = ''
    
    return(
        <div className="div">
                <img onClick={onClick} src="/images/card.png" ></img>
            <div className="overlay">
            <img className='overlay-component ' src={illustration} ></img><p>Overlay</p>
            </div>
            <style jsx>{`
            .div {
                heigth: auto;
            }
            img {
                height: 40vh; 
                margin:10px;               
                }
            .overlay {
                width:100%.
                height: 100%;
                position: absolute;
                top: 30px; 
                bottom:330px; 
                left: 380px; 
                right: 0;
                margin-top: 15vmin;
                -webkit-transform: scale(0);
                -ms-transform: scale(0);
                transform: scale(0);
                -webkit-transition: .3s ease;
                transition: .3s ease;
            }
            .overlay-component{
                height: 30vh;
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
