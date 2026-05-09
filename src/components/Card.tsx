interface Pokemon {
    name: string;
    image: string;
    dexNumber: number;
    collected: boolean;
}

function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Card Title</h2>
        <p className="card-description">This is a description of the card content. It provides more details about the card.</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
}

export default Card;