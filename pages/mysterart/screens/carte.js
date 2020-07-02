
import Head from "next/head";
import dynamic from "next/dynamic";

export default function Carte() {

       // That's where the magic happens
       const Map = dynamic(() => import("../../../components/mysterart/map"), {
        ssr: false,
      });

      
  return (
    <main style={{ padding: "40px" }}>
      <section >
        <h1>Le plan d'inverstigation</h1>
        <p>
          quelques lignes pour expliquer des trucs j'imagine que ça pourra être
          utile pour comprendre le contenu de l'écran !
        </p>
                <Map />
        <button>Point Enigme</button>
      </section>
    </main>
  );
}
