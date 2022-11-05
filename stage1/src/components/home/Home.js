import "./home.scss";
import image from "../../assets/zaks.jpg";
import Footer from "../footer/footer";
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

      <section className="links">
        <a
          className="link"
          id="btn__twitter"
          href="https://twitter.com/Engr_zaks"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          className="link"
          id="btn__zuri"
          href="https://training.zuri.team/"
          target="_blank"
          rel="noreferrer"
        >
          Zuri training
        </a>
        <a
          className="link"
          id="books"
          href="http://books.zuri.team"
          target="_blank"
          rel="noreferrer"
          title="this is where you find books about design and coding"
        >
          This is where you find books about design and coding
        </a>
        <a
          className="link"
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=DevZaks"
          target="_blank"
          rel="noreferrer"
          title="python for beginners book"
        >
          Buy python for beginners
        </a>
        <a
          className="link"
          id="pitch"
          href="https://background.zuri.team"
          target="_blank"
          rel="noreferrer"
          title="background check"
        >
          Checking the background of your coder before a gig has never been
          easier
        </a>
        <a
          className="link"
          id="book__design"
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noreferrer"
          title="background check"
        >
          Grab the best design book in town for FREE
        </a>
        <a className="link" href="/contact">
          Contact Me
        </a>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
