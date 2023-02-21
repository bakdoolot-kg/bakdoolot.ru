import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import profileImage from "../../assets/profile.jpg";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div
            className="home__img"
            style={{
              backgroundImage: `url(${profileImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              boxShadow: "inset 0 0 0 9px rgb(255 255 255 / 30%)",
              order: "1",
              justifySelf: "center",
              width: "300px",
              height: "300px",
              animation: "profile__animate 8s ease-in-out infinite 1s",
            }}
          ></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
