import { useState } from "react";


export default function Card(props){
    // const [show, setShow] = useState(true)
    let display = ''

    // if(show === false){
    //     display = "none"
    // }
    
    return(
        <div className="container">
            <div className="cards">
            <img src="../images/img2.png" ></img>
            </div>
            <div className="overlay">
            <img className='overlay-component ' src="{props.illustration}" ></img><p>modal</p>
                {props.illustration}
            </div>
            <style jsx>{`
            .container {
                display: flex;
                justify-content: center;
                align-content: center;
                margin:8vmin;
            }
                img {
                    height: 25vmax;                
                }
            .overlay {
                width:90%.
                height: 90%;
                position: absolute;
                top:0;
                margin-top: 15vmin;
                -webkit-transform: scale(0);
                -ms-transform: scale(0);
                transform: scale(0);
                -webkit-transition: .3s ease;
                transition: .3s ease;
            }
            .overlay-component {
                height: 50vmax;
            }
            .container:hover .overlay {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
              }
              
            `}</style>
        </div>
    );
    }
