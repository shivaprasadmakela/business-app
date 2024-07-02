import SideNavbar from "../SideNavbar/SideNavbar";
import TopNavbar from "../TopNavbar/TopNavbar";
import "./profile.css";

function Profile() {
  return (
    <div className="profileContainer">
      <SideNavbar />
      <div>
        <TopNavbar />
        <p>Profile Section Comming Soon</p>
      </div>
    </div>
  );
}

export default Profile;
