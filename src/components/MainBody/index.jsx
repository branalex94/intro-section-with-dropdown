import DataBiz from "../../assets/icons/ClientDatabiz";
import AudioPhile from "../../assets/icons/ClientAudiophile";
import Meet from "../../assets/icons/ClientMeet";
import Maker from "../../assets/icons/ClientMaker";

export default function MainBody() {
  return (
    <main className="home">
      {/* Hero image */}
      <div className="home__hero">
        <div className="home__hero-image"></div>
      </div>
      <div className="home__left-container--desktop">
        {/* Page header title */}
        <h1>Make remote work</h1>
        {/* Page paragraph */}
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        {/* Call to action button */}
        <button className="home__btn">Learn more</button>
        <ul className="home-brands__list">
          <li className="home-brands__item">
            <DataBiz />
          </li>
          <li className="home-brands__item">
            <AudioPhile />
          </li>
          <li className="home-brands__item">
            <Meet />
          </li>
          <li className="home-brands__item">
            <Maker />
          </li>
        </ul>
      </div>
    </main>
  );
}
