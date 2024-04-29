import hand_icon from "./Assets/hand_icon.png";
import arrow_icon from "./Assets/arrow.png";
import hero_image from "./Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h2>Nouveautés</h2>
        <div>
          <div className="hero__hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="icone main" />
          </div>
          <p>collections</p>
          <p>pour tous</p>
        </div>
        <div className="hero__latest-btn">
          <div>Dernière collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero__right">
        <img src={hero_image} alt="Photo femme" />
      </div>
    </div>
  );
};

export default Hero;
