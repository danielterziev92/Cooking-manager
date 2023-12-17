import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faComment,
    faHeart,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS
import "./DishCarousel.css";

const dishes = [
    {
        id: 1,
        image: "/public/imgs/dish1.jpg",
        type: "Dish Type 1",
        name: "Delicious Dish 1",
        description: "This is a delicious dish with a fantastic taste.",
        rating: 4,
        cookTime: 30,
        commentCount: 12,
        likeCount: 45,
        username: "chef_john",
    },
    {
        id: 2,
        image: "/public/imgs/dish2.jpg",
        type: "Dish Type 2",
        name: "Delicious Dish 2",
        description: "This is a delicious dish with a fantastic taste.",
        rating: 5,
        cookTime: 45,
        commentCount: 2,
        likeCount: 32,
        username: "chef_ron",
    },
];

export default function DishCarousel() {
    return (
        <Carousel className='dish-carousel' indicators={false} interval={null}>
            {" "}
            {/* Add indicators={false} to hide carousel-indicators */}
            {dishes.map((dish) => (
                <Carousel.Item key={dish.id}>
                    <img
                        className='d-block w-100 dish-image'
                        src={dish.image}
                        alt={dish.name}
                    />
                    <Carousel.Caption>
                        <div className='dish-info-container'>
                            <div className='dish-info'>
                                <div className='dish-type'>{dish.type}</div>
                                <div className='dish-name'>{dish.name}</div>
                                <div className='dish-rating'>
                                    {Array.from(
                                        { length: dish.rating },
                                        (_, index) => (
                                            <FontAwesomeIcon
                                                key={index}
                                                icon={faStar}
                                            />
                                        )
                                    )}
                                    <span>{dish.rating}/5</span>
                                </div>
                            </div>
                            <div className='dish-hover-info'>
                                <p>{dish.description}</p>
                                <div className='dish-icons'>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span>{dish.cookTime} min</span>
                                    <FontAwesomeIcon icon={faComment} />
                                    <span>{dish.commentCount} comments</span>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span>{dish.likeCount} likes</span>
                                </div>
                                <div className='dish-author'>
                                    <span>{dish.username}</span>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
