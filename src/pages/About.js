import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1>About Us</h1>
        <p className="lead">Learn more about our mission, vision, and the animals we protect.</p>
      </div>

      <div className="row mb-5">
        {/* Zoo History Section */}
        <div className="col-md-6">
          <h3>The History of Our Zoo</h3>
          <p>
            Founded in 1985, our zoo started with just a few animal exhibits and has since
            grown to become one of the most respected wildlife institutions in the country. Our
            goal has always been to provide a safe and natural habitat for animals, promote
            environmental education, and support wildlife conservation efforts worldwide.
          </p>
          <p>
            Over the years, we have expanded our facilities, adding new habitats and
            increasing our commitment to conservation, research, and public engagement. 
            Today, we host over 500 species of animals from across the globe.
          </p>
        </div>

        {/* Zoo Mission & Vision Section */}
        <div className="col-md-6">
          <h3>Our Mission & Vision</h3>
          <p><strong>Mission:</strong> Our mission is to promote a greater understanding of wildlife and conservation through immersive experiences, education, and research. We aim to inspire a love for nature and empower people to take action in preserving wildlife.</p>
          <p><strong>Vision:</strong> To be a leader in wildlife conservation and education, safeguarding endangered species and supporting sustainable ecosystems for future generations.</p>
        </div>
      </div>
    
      {/* Animal Protection Gallery Section */}
      <div className="mb-5">
        <h2>Animal Protection Gallery</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/endagered.jpg"} /* Replace with actual image of endangered species */
                className="card-img-top"
                alt="Endangered Species"
              />
              <div className="card-body">
                <h5 className="card-title">Endangered Species</h5>
                <p className="card-text">
                  Discover the incredible animals we are working to protect, including tigers, mammals, pandas & many more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/wildlifeRescue.jpg"} /* Replace with image of a wildlife rescue operation */
                className="card-img-top"
                alt="Wildlife Rescue"
              />
              <div className="card-body">
                <h5 className="card-title">Wildlife Rescue</h5>
                <p className="card-text">
                  Learn about our efforts in rescuing injured and orphaned animals, and giving them a second chance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/naturalHabitats.avif"} /* Replace with an image of animal habitat */
                className="card-img-top"
                alt="Animal Habitat"
              />
              <div className="card-body">
                <h5 className="card-title">Natural Habitats</h5>
                <p className="card-text">
                  Explore our well-designed habitats that mimic the animals’ natural environments, allowing them to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Conservation Efforts Section */}
      <div className="mb-5">
        <h2>Conservation Efforts</h2>
        <p>
          At our zoo, we are committed to the protection of endangered species and the preservation
          of their habitats. We work closely with wildlife conservation organizations to support
          global initiatives aimed at reducing the impact of human activities on wildlife.
        </p>
        <p>
          Some of the key areas of focus for our conservation programs include:
          <ul>
            <li>Habitat restoration for endangered species.</li>
            <li>Breeding programs for threatened animals.</li>
            <li>Wildlife rescue and rehabilitation efforts.</li>
            <li>Awareness campaigns to reduce poaching and illegal wildlife trade.</li>
            <li>Support for global conservation research and studies.</li>
          </ul>
        </p>
        <p>
          Our zoo participates in several international programs focused on the protection of
          species such as elephants, tigers, pandas, and many more. With the help of donations,
          our dedicated staff, and our visitors, we are making a real difference.
        </p>
      </div>

      {/* Visitor Engagement Section */}
      <div className="mb-5">
        <h2>How You Can Help</h2>
        <p>
          As a visitor, you play a crucial role in helping us achieve our conservation goals.
          There are several ways you can get involved and make an impact:
        </p>
        <ul>
          <li>Adopt an animal: Help care for an animal through our adoption programs.</li>
          <li>Donate: Your donations directly support conservation projects and animal care.</li>
          <li>Volunteer: Join us as a volunteer and assist with daily zoo activities.</li>
          <li>Spread the word: Share your love for wildlife by raising awareness in your community.</li>
          <li>Visit regularly: Every ticket purchase contributes to supporting our mission.</li>
        </ul>
        <p>
          Together, we can make a difference and ensure the future of our planet's wildlife.
        </p>
      </div>

    </div>
  );
};

export default About;
