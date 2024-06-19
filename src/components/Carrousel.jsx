import React from 'react';
import { Link } from 'react-router-dom';

class Carousel extends React.Component {
render() {
    return (
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8_CPKerlkSEIpAf6ILRGsS20FBXYVk4Ouw&s" className="d-block w-100" alt="IMAGEN 1" />
        </div>
        <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8YpS1gvPi1bqbctUS4ZS5IhTGzEw79QW3-BLCjuOpJxpMBB19DkJbAS58e6XG2bVLL8&usqp=CAU" className="d-block w-100" alt="IMAGEN 2" />
        </div>
        <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dRNihuQez9Kx-MbbCJAMuUXYxIhKtRxSZC8X_iM09T8iYS07xrutYI3aOoUkTUTByjQ&usqp=CAU" className="d-block w-100" alt="IMAGEN 3" />
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
    </div>
    );
}
}

export default Carousel;
