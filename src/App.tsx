import { useEffect, useState } from "react";
import "./App.css";
import c from "./assets/cats.jpg";
import d from "./assets/dogs.jpg";
import dy from "./assets/dyno.jpg";
import p from "./assets/planets.jpg";
import chub from "./assets/chubaka.jpg";

const timeDeelay = 3540000;
const images = [c, d, dy, p, chub];
const colors: { [key: string]: string } = {
  1: "green",
  2: "tomato",
  3: "gray",
  4: "blue",
  5: "plum",
  6: "olive",
  7: "gold",
};

function App() {
  const [header, setHeader] = useState(0);
  const [main, setMain] = useState(1);
  const [footer, setFooter] = useState(2);
  const [leftSide, setLeftSide] = useState(3);
  const [rightSide, setRightSide] = useState(4);
  const [btnColor, setBtnColor] = useState("green");

  const onClick = () => {
    const colorVariant = getRandomInt(7);
    setBtnColor(colors[colorVariant]);

    const elements: number[] = [];

    while (elements.length < 5) {
      const keyFiled = getRandomInt(5);
      if (!elements.includes(keyFiled)) {
        elements.push(keyFiled);
      }
    }

    setFooter(elements[0]);
    setHeader(elements[1]);
    setMain(elements[2]);
    setLeftSide(elements[3]);
    setRightSide(elements[4]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onClick();
    }, timeDeelay);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <header
        className="header"
        style={{
          backgroundImage: `url(${images[header]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></header>

      <main className="main">
        <div
          className="left-side"
          style={{
            width: '200px',
            backgroundImage: `url(${images[leftSide]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="content"
          style={{
            backgroundImage: `url(${images[main]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <button
            onClick={onClick}
            style={{ background: btnColor, padding: "0 20", height: "30px" }}
          >
            Test
          </button>
        </div>

        <div className="right-side"
         style={{
          width: '200px',
          backgroundImage: `url(${images[rightSide]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        ></div>
      </main>

      <footer
        className="footer"
        style={{
          backgroundImage: `url(${images[footer]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></footer>
    </div>
  );
}

export default App;

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
