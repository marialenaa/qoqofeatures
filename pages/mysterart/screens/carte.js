//import Map from "react-leaflet";
//import L from "leaflet";
import { useState, useEffect } from "react";
import { Map, TileLayer, Rectangle, Marker, Popup } from "react-leaflet";
import { createPortal } from "react-dom";
export default function Carte() {
  const outer = [
    [50.505, -29.09],
    [52.505, 29.09],
  ];
  const inner = [
    [49.505, -2.09],
    [53.505, 2.09],
  ];
  let state = {
    bounds: outer,
  };

  let onClickInner = () => {
    setState({ bounds: inner });
  };

  let onClickOuter = () => {
    setState({ bounds: outer });
  };

  const [isWindowLoaded, setIsWindowLoaded] = useState(false);

  useEffect(() => {
    setIsWindowLoaded(true);

    return () => {
      setIsWindowLoaded(false);
    };
  }, []);

  return (
    <main style={{ padding: "40px" }}>
      {/* <section className="container">
        <h1>Le plan d'inverstigation</h1>
        <p>
          quelques lignes pour expliquer des trucs j'imagine que ça pourra être
          utile pour comprendre le contenu de l'écran !
        </p>
        <p style={{ width: "50vw", height: "60vh", border: "2px blue solid" }}>
          CARTE HERE
          <button>Point Enigme</button>
        </p> */}
      {isWindowLoaded && (
        <Map
          style={{
            width: "100vw",
            height: "100vh",
            // position: "fixed",
            top: 0,
            left: 0,
          }}
          bounds={state.bounds}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Rectangle
            bounds={outer}
            color={state.bounds === outer ? "red" : "white"}
            onClick={onClickOuter}
          />
          <Rectangle
            bounds={inner}
            color={state.bounds === inner ? "red" : "white"}
            onClick={onClickInner}
          />
        </Map>
      )}
      {/* </section> */}
      {/* <style>{`
                .container {
                    display: grid;
                    grid-gap: 20px;
                    align-items: center;
                    text-align: center;
                    justify-items: center;
                    grid-template-columns: 1fr;
                    grid-template-rows: 10% 10% auto;
                }
            `}</style> */}
    </main>
  );
}
