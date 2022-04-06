import { useRef } from "react";
import Card from "./Card";
import design from "./design.svg";
import arrowLeft from "./arrow-left.svg";
import arrowRight from "./arrow-right.svg";
import "./Bloggers.css";

function Bloggers({ users, getPosts, setUserName }) {
  const bloggersRef = useRef(null);

  const handleClick = (user) => {
    getPosts(user.id);
    setUserName(user.name);
  };

  const prevImage = () => {
    const bloggersEl = bloggersRef.current;

    if (bloggersEl.scrollLeft !== 0) {
      bloggersEl.scrollLeft -= 290;
    }
  };

  const nextImage = () => {
    const bloggersEl = bloggersRef.current;
    const maxScrollLeft = bloggersEl.scrollWidth - bloggersEl.clientWidth;

    if (bloggersEl.scrollLeft < maxScrollLeft) {
      bloggersEl.scrollLeft += 330;
    }
  };

  return (
    <div className="bloggers-wrapper">
      <div className="arrows">
        <img src={arrowLeft} className="arrow" onClick={prevImage} />
        <img src={arrowRight} className="arrow" onClick={nextImage} />
      </div>
      <div className="bloggers" ref={bloggersRef}>
        {users.map((user) => (
          <Card user={user} key={user.id} onClick={() => handleClick(user)} />
        ))}
      </div>
      <img src={design} alt="Элемент дизайна" className="bloggers-design" />
    </div>
  );
}

export default Bloggers;
