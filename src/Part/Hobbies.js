import Carousel from "react-bootstrap/Carousel";
import anime from "../Image/Hobbies/anime.jpg";
import manga from "../Image/Hobbies/manga.jpg";
import game from "../Image/Hobbies/game.jpg";
import socialmedia from "../Image/Hobbies/socialmedia.jpg";
import { Image } from "react-bootstrap";

function Hobbies() {
  const imagelist = [
    [manga, "Manga"],
    [anime, "Anime"],
    [game, "Games"],
    [socialmedia, "Social Media"],
  ];
  const list = [];
  for (let i = 0; i < imagelist.length; i++) {
    list.push(
      <Carousel.Item>
        <div className="narrow frame-hobbies">
          <img className="imagehobbies" src={imagelist[i][0]} />
        </div>
        <Carousel.Caption>
          <h3>{imagelist[i][1]}</h3>
          <p>Hobbies</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  return (
    <div>
      <Carousel>{list}</Carousel>
    </div>
  );
}

export default Hobbies;
