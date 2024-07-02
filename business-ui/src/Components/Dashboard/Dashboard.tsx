import SideNavbar from "../SideNavbar/SideNavbar";
import TopNavbar from "../TopNavbar/TopNavbar";
import "./dashboard.css";
const DashboardDetails = [
  {
    id: 1,
    projectLogo: "/Assets/Shriram-Pristine-Estates-Logo 2.svg",
    mainImage: "/Assets/centerImage.svg",
    targetIrr: "13.1%",
    assetType: "Office",
    totalUnits: "1923 Sq.ft",
    assetValue: "Rs 76 Cr.",
  },
  {
    id: 2,
    projectLogo: "/Assets/Shriram-Pristine-Estates-Logo 2.svg",
    mainImage: "/Assets/centerImage.svg",
    targetIrr: "13.1%",
    assetType: "Office",
    totalUnits: "1923 Sq.ft",
    assetValue: "Rs 76 Cr.",
  },
  {
    id: 3,
    projectLogo: "/Assets/Shriram-Pristine-Estates-Logo 2.svg",
    mainImage: "/Assets/centerImage.svg",
    targetIrr: "13.1%",
    assetType: "Office",
    totalUnits: "1923 Sq.ft",
    assetValue: "Rs 76 Cr.",
  },
  {
    id: 4,
    projectLogo: "/Assets/Shriram-Pristine-Estates-Logo 2.svg",
    mainImage: "/Assets/centerImage.svg",
    targetIrr: "13.1%",
    assetType: "Office",
    totalUnits: "1923 Sq.ft",
    assetValue: "Rs 76 Cr.",
  },
];

function Dashboard() {
  return (
    <div className="dashboardContainer">
      <SideNavbar />
      <div>
        <TopNavbar />
        <h1>Explore More Properties</h1>
        <ul className="cards-container">
          {DashboardDetails.map((each) => (
            <li className="each-card">
              <div>
                <img
                  src={each.projectLogo}
                  alt="ProjectLogo"
                  className="projectLogo"
                />
                <img
                  src={each.mainImage}
                  alt="mainImage"
                  className="centerImage"
                />
                <div className="outerContainer">
                  <div className="innerContainer1">
                    <div>
                      <p className="name">Target IRR</p>
                      <p className="value">{each.targetIrr}</p>
                    </div>
                    <div>
                      <p className="name">Total Units</p>
                      <p className="value">{each.totalUnits}</p>
                    </div>
                  </div>

                  <div className="innerContainer2">
                    <div>
                      <p className="name">Asset Type</p>
                      <p className="value">{each.assetType}</p>
                    </div>
                    <div>
                      <p className="name">Asset Value</p>
                      <p className="value">{each.assetValue}</p>
                    </div>
                  </div>
                </div>
                <div className="buttons-contianer">
                  <button className="booknow button">Book Now </button>
                  <button className="details button">View Details</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
