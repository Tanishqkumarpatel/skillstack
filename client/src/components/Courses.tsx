import Card from "./Card"
import Photo from '../assets/Photo.jpg'

function Courses() {
    const list = [];
    const title = "name";
    const image = Photo;

    for (let i = 0; i < 10; i++) {
        list.push({title: title + "_" + (i+1),
            image: image
        });
    }

    const carditem = list.map(card => <li><Card title={card.title} image={card.image}/></li>);
    return(
    <ul className="flex flex-wrap">
        {carditem}
    </ul>);
}
export default Courses