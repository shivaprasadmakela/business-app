import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const MenuDetails = [
  {
    id: 1,
    icon: "fa-brands fa-deezer",
    displayText: "Dashboard",
  },
  {
    id: 2,
    icon: "fa-regular fa-bell",
    displayText: "Notifications",
  },
  {
    id: 3,
    icon: "fa-regular fa-user",
    displayText: "My Profile",
  },
  {
    id: 4,
    icon: "fa-solid fa-users",
    displayText: "Customer",
  },
];

function SideNavbar() {
  return (
    <div className="nav-container">
      <img src="Assets/BetaLogo.svg" alt="logo" />
      <div className="menu-logout-container">
        <ul>
          {MenuDetails.map((each) => (
            <li>
              <i className={each.icon}></i>
              <button>{each.displayText}</button>
            </li>
          ))}
        </ul>
        <div className="logout-container">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
