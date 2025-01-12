import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Animals = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1>Our Animals</h1>
        <p className="lead">
          Meet the incredible animals that call our zoo their home. From
          majestic lions to rare birds, we are proud to house a diverse range of
          species.
        </p>
      </div>

      {/* YouTube Video part*/}

      <div className="my-5">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/sX1XwDFdpdc?si=6ITcBQXX7NXdzDKz"
          title="Visit our zoo through this video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        
      </div>
      {/* Mammals Section */}
      <div className="my-5">
        <h2>Mammals</h2>
        <p>
          Our zoo is home to a variety of fascinating mammal species, ranging
          from the powerful tiger to the gentle giraffe. These mammals are cared
          for in environments that mimic their natural habitats, allowing them
          to thrive.
        </p>
        <div className="row">
          {/* Lion */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/Lion2.webp"}
                className="card-img-top"
                alt="Lion"
              />
              <div className="card-body">
                <h5 className="card-title">Lion</h5>
                <p className="card-text">
                  Lions are known as the "king of the jungle". These majestic
                  big cats are found in grasslands and savannas. Our lions are
                  part of a breeding program to help sustain their population.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/* Elephant */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/elephant2.jpg"}
                className="card-img-top"
                alt="Elephant"
              />
              <div className="card-body">
                <h5 className="card-title">Elephant</h5>
                <p className="card-text">
                  Our elephants are part of an endangered species group. These
                  magnificent creatures require vast amounts of space and water,
                  and we’ve created an environment where they can roam freely
                  and safely.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/* Giraffe */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/girrafe.jpg"}
                className="card-img-top"
                alt="Giraffe"
              />
              <div className="card-body">
                <h5 className="card-title">Giraffe</h5>
                <p className="card-text">
                  Giraffes are the tallest mammals on earth, famous for their
                  long necks. Our giraffes live in an open savanna-style
                  enclosure where they enjoy browsing on acacia trees.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Birds Section */}
      <div className="my-5">
        <h2>Birds</h2>
        <p>
          The zoo is home to many bird species, from colorful parrots to
          majestic eagles. Birds play an important role in the ecosystem, and we
          take pride in caring for these winged wonders.
        </p>
        <div className="row featuredImages">
          {/* Parrot */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/parrot2.webp"}
                className="card-img-top"
                alt="Parrot"
              />
              <div className="card-body">
                <h5 className="card-title">Parrot</h5>
                <p className="card-text">
                  Parrots are known for their intelligence and vibrant colors.
                  We have a variety of parrot species, including the endangered
                  Macaw.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/* Eagle */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/Eagle.jpg"}
                className="card-img-top"
                alt="Eagle"
              />
              <div className="card-body">
                <h5 className="card-title">Eagle</h5>
                <p className="card-text">
                  Eagles are powerful birds of prey with incredible vision. Our
                  eagles are part of a rehabilitation program for injured birds.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/* Penguin */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/penguin2.jpg"}
                className="card-img-top"
                alt="Penguin"
              />
              <div className="card-body">
                <h5 className="card-title">Penguin</h5>
                <p className="card-text">
                  Penguins are flightless birds, known for their charming
                  waddles. Our penguins enjoy a cold climate exhibit, and they
                  love to swim and interact with guests.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reptiles Section */}
      <div className="my-5">
        <h2>Reptiles</h2>
        <p>
          Reptiles are fascinating creatures, and our zoo houses some of the
          most exciting and fearsome reptiles, including snakes, crocodiles, and
          turtles.
        </p>
        <div className="row">
          {/* Snake */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/Snake.jpg"}
                className="card-img-top"
                alt="Snake"
              />
              <div className="card-body">
                <h5 className="card-title">Snake</h5>
                <p className="card-text">
                  Snakes are fascinating, with their incredible ability to
                  slither and hunt. Our snake exhibit features species such as
                  boas and pythons.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/* Crocodile */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/crocodile.jpg"}
                className="card-img-top"
                alt="Crocodile"
              />
              <div className="card-body">
                <h5 className="card-title">Crocodile</h5>
                <p className="card-text">
                  Crocodiles are apex predators, found in rivers and marshes.
                  Our crocodile exhibit offers an up-close look at these
                  fascinating creatures.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/* Turtle */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/Turtle.jpg"}
                className="card-img-top"
                alt="Turtle"
              />
              <div className="card-body">
                <h5 className="card-title">Turtle</h5>
                <p className="card-text">
                  Turtles are known for their slow movements and long life span.
                  We take care of several species of turtles that are endangered
                  or protected.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animals;
