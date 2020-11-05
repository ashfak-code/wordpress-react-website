import React from "react";
import MenuItem from "./MenuItem";
import "./MenuItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
class Navbar extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <nav className="navbar__item">
        <h1 className="navbar__logo">
          React <FontAwesomeIcon icon={faReact} />
        </h1>
        <div className="menu__icon" onClick={this.handleClick}>
          {this.state.clicked ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>

            <ul
              className={this.state.clicked ? "menu__active" : "menu__inactive"}
            >
              {MenuItem.map((item, i) => {
                return (
                  <li key={i}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
  
 
      </nav>
    );
  }
}

export default Navbar;
