import SideNavbar from "../SideNavbar/SideNavbar";
import TopNavbar from "../TopNavbar/TopNavbar";
import "./notifications.css";

function Notifications() {
  return (
    <div className="notificationsContainer">
      <SideNavbar />
      <div>
        <TopNavbar />
        <p>Notificaions Comming Soon</p>
      </div>
    </div>
  );
}

export default Notifications;
