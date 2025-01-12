import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} Zoo World. All rights reserved.
        </p>
        <p>
          Follow us on: 
          <a
            href="#"
            className="text-info ms-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="text-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="text-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </p>
        <p>
          Email us on: 
          <a
           href="mailto:cinema.fantasy.malinda@gmail.com"
            className="text-info ms-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            cinema.fantasy.malinda@gmail.com
          </a>
          </p>
      </div>
      
    </footer>
  );
};

export default Footer;
