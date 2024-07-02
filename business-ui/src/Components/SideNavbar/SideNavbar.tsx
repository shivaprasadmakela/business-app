import "@fortawesome/fontawesome-free/css/all.min.css";

import "./sideNavbar.css";
import { Link } from "react-router-dom";

const MenuDetails = [
  {
    id: 1,
    icon: "fa-brands fa-deezer",
    displayText: "Dashboard",
    linkUrl: "/",
  },
  {
    id: 2,
    icon: "fa-regular fa-bell",
    displayText: "Notifications",
    linkUrl: "/notifications",
  },
  {
    id: 3,
    icon: "fa-regular fa-user",
    displayText: "My Profile",
    linkUrl: "/profile",
  },
  {
    id: 4,
    icon: "fa-solid fa-users",
    displayText: "Customer",
    linkUrl: "/customers",
  },
];

function SideNavbar() {
  return (
    <div className="nav-container">
      <img src="Assets/BetaLogo.svg" alt="logo" className="app-logo" />
      <div className="menu-logout-container">
        <ul className="navlinks-container">
          {MenuDetails.map((each) => (
            <Link to={each.linkUrl} className="link">
              <li className="each-navlink">
                <i className={each.icon}></i>
                <p className="buttons">{each.displayText}</p>
              </li>
            </Link>
          ))}
        </ul>
        <div className="logout-container">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <p className="buttons">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
