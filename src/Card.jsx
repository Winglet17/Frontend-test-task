import "./Card.css";

function Card({ user, onClick }) {
  return (
    <div className="blogger-card" onClick={onClick}>
      <div className="blogger-shadow">
        <img
          className="blogger-image"
          src={`https://i.pravatar.cc/350?img=${user.id}`}
          alt="Фото блогера"
        />
      </div>
      <h4 className="blogger-name">{user.name}</h4>
      <p className="blogger-company">{user.company.name}</p>
    </div>
  );
}

export default Card;
