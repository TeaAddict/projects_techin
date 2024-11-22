import { useState } from "react";

const TabbedContent = () => {
  const [currentTab, setCurrentTab] = useState("");

  return (
    <>
      <div className="tabbedContent">
        <button onClick={() => setCurrentTab("Home")}>Home</button>
        <button onClick={() => setCurrentTab("Profile")}>Profile</button>
        <button onClick={() => setCurrentTab("Settings")}>Settings</button>
      </div>
      {currentTab == "Home" && <h1>Home page</h1>}
      {currentTab == "Profile" && <h1>Profile page</h1>}
      {currentTab == "Settings" && <h1>Settings page</h1>}
    </>
  );
};

export default TabbedContent;
