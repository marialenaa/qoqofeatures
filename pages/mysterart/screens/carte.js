import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../../components/mysterart/map"), {
  ssr: false,
});

 export default function Carte() {
  

  return (
    <main style={{ padding: "40px" }}>
      <section >
        <h1>Le plan d'inverstigation</h1>
        <p>
          quelques lignes pour expliquer des trucs j'imagine que ça pourra être
          utile pour comprendre le contenu de l'écran !
        </p>
        <Map height={"100vh"}/>
        <button>Point Enigme</button>
      </section>
    </main>
  );
}
