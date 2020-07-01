import Link from "next/link"
import { useState } from "react"

export default function Accueil(){
    const [instruction, setInstruction] = useState(false)
    
    const toggleButton=()=>{
        setInstruction(!instruction)
        
    }
    return(
        <div style={{width: "100vw", height: "90vh", background:"", display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'flex-end'}}>
            <section style={{display: instruction? "flex": "none", position:"relative", bottom:"20vh"}}>instruction here</section>
            <button style={{display: !instruction? 'flex': "none",}} onClick={()=>toggleButton()}>Jouer</button>
            <button style={{
                        display: instruction? "flex": "none",
                        zIndex:1
                        }}>
                <Link href='../mysterart/screens/principale'>
                    <a style={{
                        textDecoration: "none",
                        color: "inherit",
                        zIndex:1
                        }}><h1>Enquêter</h1>
                    </a>
                </Link>
            </button>
            
        </div>
    )
}