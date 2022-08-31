import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import "../scss/Redditmemes.css";
import Like from "./Like";
function Redditmemes() {
  const [pic, setPic] = useState(null);
  const [index, setIndex] = useState(0);
  const [like, setLike] = useState(false);

  useEffect(() => {
    async function call() {
      const meme = await (
        await axios.get("https://www.reddit.com/r/memes.json")
      ).data.data.children;
      setPic(meme);
      setIndex(index + 1);
    }
    call();
    setLike(false);
  }, []);

  const getImg = () => pic[index].data.url;
  const clicked = () => {
    index + 1 !== pic.length && setIndex(index + 1);
    index + 1 === pic.length && setIndex(1);
  };
  const doubleClick = (evt) => {
    setLike(true);
    console.log("hello world");
    setTimeout(() => {
      setLike(false);
    }, 1200);
  };
  return (
    <div>
      {pic === null ? (
        <Loader />
      ) : (
        <div className="main">
          <h4>Double Tap to like</h4> <p>Memes are updated every 24 hrs</p>
          <img
            src={getImg()}
            className="memes "
            onDoubleClick={doubleClick}
            onClick={doubleClick}
          />
          <button
            className="custom-btn btn-3"
            style={{ display: "block" }}
            onClick={clicked}
          >
            <span>
              Next {"  "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </span>
          </button>
          {like && <Like active="heart is-active" />}
        </div>
      )}
    </div>
  );
}

export default Redditmemes;
