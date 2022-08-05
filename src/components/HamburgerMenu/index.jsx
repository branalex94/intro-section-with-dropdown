import CloseMenu from "../../assets/icons/CloseMenu";
import Todo from "../../assets/icons/Todo";
import Calendar from "../../assets/icons/Calendar";
import Reminder from "../../assets/icons/Reminder";
import Planning from "../../assets/icons/Planning";
import ArrowDown from "../../assets/icons/ArrowDown";

export default function HamburgerMenu({ setIsMenuOpen, isMenuOpen }) {
  const handleClick = () => {
    setIsMenuOpen(false);
  };
  const handleContext = (e) => {
    e.currentTarget.children[1].classList.toggle(
      "hamburger-menu__list-item__context--open"
    );
    e.currentTarget.children[0].classList.toggle("open");
  };
  return (
    <>
      {/*Hamburger menu start */}
      <div
        className={`hamburger-menu  ${
          isMenuOpen ? "hamburger-menu--open" : ""
        }`}
      >
        <div className="hamburger-menu__close-btn" onClick={handleClick}>
          <CloseMenu />
        </div>
        <ul className="hamburger-menu__list">
          <li
            className="hamburger-menu__list-item context-menu"
            onClick={handleContext}
          >
            Features <ArrowDown />
            <ul className="hamburger-menu__list-item__context">
              <li className="hamburger-menu__list-item__context-item">
                <Todo /> Todo List
              </li>
              <li className="hamburger-menu__list-item__context-item">
                <Calendar /> Calendar
              </li>
              <li className="hamburger-menu__list-item__context-item">
                <Reminder /> Reminders
              </li>
              <li className="hamburger-menu__list-item__context-item">
                <Planning /> Planning
              </li>
            </ul>
          </li>
          <li
            className="hamburger-menu__list-item context-menu"
            onClick={handleContext}
          >
            Company <ArrowDown />
            <ul className="hamburger-menu__list-item__context">
              <li className="hamburger-menu__list-item__context-item">
                History
              </li>
              <li className="hamburger-menu__list-item__context-item">
                Our Team
              </li>
              <li className="hamburger-menu__list-item__context-item">Blog</li>
            </ul>
          </li>
          <li className="hamburger-menu__list-item">Careers</li>
          <li className="hamburger-menu__list-item">About</li>
        </ul>
        <div className="hamburger-menu__btns">
          <p className="hamburger-menu__login">Login</p>
          <button className="hamburger-menu__register-btn">Register</button>
        </div>
      </div>
      {/* Hamburger menu end */}
    </>
  );
}
