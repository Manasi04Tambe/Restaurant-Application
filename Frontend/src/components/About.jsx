import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            molestiae ipsa nobis id similique magni voluptates perspiciatis
            corrupti non ratione suscipit sequi expedita vel laudantium
            repellendus assumenda rerum debitis nesciunt eos, temporibus quae
            dolorum. Amet, cumque ut fugit modi maiores a iste eveniet iusto
            illo pariatur. Delectus voluptatem ab nam!
          </p>
          <Link to={"/"}>
            Explore Menu
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
