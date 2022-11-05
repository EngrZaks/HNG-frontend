import "./home.scss";
import image from "../../assets/zaks.jpg";
import Footer from "../footer/footer";
import { BsGithub, BsSlack } from "react-icons/bs";
import Links from "./Links";
function Home() {
  return (
    <div className="home">
      <section className="profile">
        <div className="image">
          <img src={image} alt="Zaks display" id="profile__img" />
        </div>
        <p id="twitter">@Engr_zaks</p>
        <p id="slack">DevZaks</p>
      </section>
      <Links />
      <section className="icons">
        <a href="https://hng9.slack.com" target="_blank" rel="noreferrer">
          <BsSlack />
        </a>
        <a href="https://github.com/EngrZaks" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
