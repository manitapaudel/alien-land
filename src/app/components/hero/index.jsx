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
      <Image
        src="/images/spaceship.svg"
        alt="A spaceship where an alien is being taken in and another one standing by"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Hero;
