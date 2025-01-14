import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1>Welcome to Zoo World</h1>
        <p className="lead">Discover a world of wildlife and wonder!</p>
      </div>

      {/* Carousel Section */}
      <div id="zooCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src={process.env.PUBLIC_URL + "/Images/naturalHabitats.avif"} /* Replace with an actual zoo image */
              className="d-block w-100"
              alt="Zoo Entrance"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Zoo World</h5>
              <p style={{
        color: 'white'}}>Explore the beauty of nature and wildlife.</p>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <img
            src={process.env.PUBLIC_URL + "/Images/Elephant.webp"} /* Replace with an actual zoo image */
            /* Replace with animal habitat image */
            className="d-block w-100"
            alt="Animal Habitat"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Majestic Animals</h5>
              <p style={{
        color: 'white'}}>Get up close and personal with incredible species.</p>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <img
            src={process.env.PUBLIC_URL + "/Images/Majestic Lion.jpg"} /* Replace with an actual zoo image */

              className="d-block w-100"
              alt="Conservation Efforts"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Conservation Matters</h5>
              <p style={{
        color: 'white'}}>Join us in protecting endangered species.</p>
            </div>
          </div>
        </div>
        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#zooCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#zooCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* About the Zoo Section */}
      <div className="mb-5">
        <h2>About Our Zoo</h2>
        <p>
          Zoo World is home to a wide variety of animals from all over the globe. 
          Our mission is to protect endangered species, educate visitors, and inspire 
          a love for wildlife conservation. Come explore our habitats and see the world’s 
          most fascinating creatures up close!
        </p>
      </div>

      {/* Featured Animals Section */}
      <div className="mb-5">
        <h2>Featured Animals</h2> 
        <div className="row featuredImages">
          {/* Animal 1 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/lion.webp"} /* Replace with lion image */
                className="card-img-top"
                alt="Lion"
              />
              <div className="card-body">
                <h5 className="card-title">Majestic Lions</h5>
                <p className="card-text">
                  Experience the power and beauty of the king of the jungle.
                </p>
              </div>
            </div>
          </div>
          {/* Animal 2 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/penguin.avif"}/* Replace with penguin image */
                className="card-img-top"
                alt="Penguins"
              />
              <div className="card-body">
                <h5 className="card-title">Playful Penguins</h5>
                <p className="card-text">
                  Watch our adorable penguins waddle and swim with joy.
                </p>
              </div>
            </div>
          </div>
          {/* Animal 3 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/elephant2.jpg"}/* Replace with elephant image */
                className="card-img-top"
                alt="Elephants"
              />
              <div className="card-body">
                <h5 className="card-title">Gentle Giants</h5>
                <p className="card-text">
                  Meet our elephants, known for their intelligence and grace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visit Information Section */}
      <div className="text-center">
        <h2>Plan Your Visit</h2>
        <p>
          Open daily from 9:00 AM to 6:00 PM. Get your tickets online and skip the line!
        </p>
        <a href="/Malinda_Zoo/tickets" className="btn btn-primary">Buy Tickets</a>
      </div>
    </div>
  );
};

export default Home;
