type CardProps = {
    title:string;
    image:string;
};

function Card(card: CardProps) {
    return(
        <div className="text-center inline-block order-8 shadow-xl w-60 h-auto border-white p-4 m-6">
            <img className="size-auto mb-3" src={card.image} alt="Course Image"></img>
            <h2 className="font-mono m-0 text-zinc-950" >{card.title}</h2>
        </div>
    );
}

export default Card