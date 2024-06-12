import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import Navbar from "../components/Navbar";
import BigSidebar from "../components/BigSidebar";
import SmallSidebar from "../components/SmallSidebar";
import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "zephyr" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toggleDarkTheme() {
    console.log("toggle dark theme");
  }

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  async function logoutUser() {
    console.log("logout user");
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
