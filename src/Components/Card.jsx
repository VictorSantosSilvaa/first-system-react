import "./card.css";

const Card = () => {
    const cardData = [
        {
            titulo: "title 1",
            description: "descript one",
            link: "#"
        },
        {
            titulo: "title 2",
            description: "descript two",
            link: "#"
        },
        {
            titulo: "title 3",
            description: "descript three",
            link: "#"
        }
    ];

    return (
        <div className="card-container">
            {cardData.map((card, index) => {
                return (
                    <div className="card" key={index}>
                        <h2>{card.titulo}</h2>
                        <p>{card.description}</p>
                        <a href={card.link} ></a>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;