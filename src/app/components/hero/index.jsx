import Image from "next/image";

import "./_hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="description">
        <h1>They are coming</h1>
        <h2>Be Prepared</h2>
        <p>Sign up now to join the list!</p>
        <button className="sign-up-btn">Sign Up</button>
      </div>
      <div className="image-container">
        <Image
          src="/images/spaceship.svg"
          alt="A spaceship where an alien is being taken in and another one standing by"
          fill
        />
      </div>
    </div>
  );
};

export default Hero;
