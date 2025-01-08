import React, { useState } from "react";
import ManageRoutes from "./ManageRoutes"; // Your ManageRoutes component
// import ManageDrivers from './ManageDrivers'; // Your ManageDrivers component
import ManageStops from "./ManageStops"; // Your ManageStops component
import ManageComplaints from "./ManageComplaints"; // Your ManageComplaints component
import ManageDriversContainer from "./ManageDriversContainer";
import {  MdOutlineDirectionsBus, MdOutlineManageHistory } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaPerson } from "react-icons/fa6";
import { BsStoplights } from "react-icons/bs";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { AiOutlineDashboard } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Viewer from "./GPS/ViewerSideGPS";

const AdminPanel = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const navigate = useNavigate();
  const [selectedView, setSelectedView] = useState("dashboard"); // state to track selected view
  const handleLogout = () => {
    if(window.confirm("Are you sure you want to logout?")){
    localStorage.removeItem("token");
    navigate("/admin/auth/login");
    }
  };
    // Function to handle sidebar item click and change selected view
  const handleSidebarClick = (view) => {
    setSelectedView(view);
  };

  return (
   
        <div className="h-screen overflow-hidden flex flex-col bg-gray-100 -z-10">
          {/* Navbar */}
          <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center -z-0">
          <div className="logo text-2xl font-extrabold text-white drop-shadow-lg">
                    Admin Panel
                </div>
            <nav className="flex space-x-4">
              <button
                className="flex items-center gap-1 bg-white font-bold text-blue-600 border-2 border-blue-600 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleLogout}
              >
                <BiLogOut />
                Logout
              </button>
            </nav>
          </header>

          {/* Main Content */}
          <div className="flex flex-1 overflow-x-auto z-30">
           
            <aside
              className={`relative  mr-8 bg-gradient-to-b from-blue-800 via-blue-600 to-blue-600 text-white h-full transition-all z-30 duration-1000 ${
                isSidebarExpanded ? "w-56" : "w-16"
              }`}
            >
              <button
                className={` absolute -right-7 top-3 flex items-center my-2 gap-2`}
                onClick={()=>setIsSidebarExpanded(!isSidebarExpanded)}
              >
                {isSidebarExpanded ? (
                  <GoSidebarExpand
                    size={22}
                    className="text-blue-600 font-extrabold"
                  />
                ) : (
                  <GoSidebarCollapse
                    size={22}
                    className="text-blue-600 font-extrabold"
                  />
                )}
              </button>
              <nav className="mt-4">
                <ul>
                  <li
                    onClick={() => handleSidebarClick("dashboard")}
                    className={`cursor-pointer p-2 my-1 mx-3 rounded-md transition-all duration-1000 ${
                      isSidebarExpanded ? "" : "my-[20px]"
                    }  hover:bg-blue-400 ${selectedView === "dashboard" ? "bg-blue-400" : ""}`}
                  >
                    <button className="flex items-center gap-2">
                      <AiOutlineDashboard
                        className={`${isSidebarExpanded ? "size-4 " : "size-6"}`}
                      />
                      {isSidebarExpanded && <span>Dashboard</span>}
                    </button>
                  </li>
                  <li
                    onClick={() => handleSidebarClick("manage-drivers")}
                    className={`cursor-pointer p-2 my-1 mx-3 rounded-md transition-all duration-1000 ${
                      isSidebarExpanded ? "" : "my-[20px]"
                    }  hover:bg-blue-400  ${selectedView === "manage-drivers" ? "bg-blue-400" : ""}`}
                  >
                    <button className="flex items-center  gap-2">
                      {" "}
                      <FaPerson
                        className={`${isSidebarExpanded ? "size-4" : "size-6"}`}
                      />
                      {isSidebarExpanded && <span> Drivers</span>}
                    </button>
                  </li>
       
           
                  <li
                    onClick={() => handleSidebarClick("manage-stops")}
                    className={`cursor-pointer p-2 my-1 mx-3 rounded-md transition-all duration-1000 ${
                      isSidebarExpanded ? "" : "my-[20px]"
                    }  hover:bg-blue-400 ${selectedView === "manage-stops" ? "bg-blue-400" : ""}`}
                  >
                    <button className="flex items-center gap-2">
                      <BsStoplights
                        className={`${isSidebarExpanded ? "size-4" : "size-6"}`}
                      />
                      {isSidebarExpanded && <span> Stops</span>}
                    </button>
                  </li>
                  <li
                    onClick={() => handleSidebarClick("manage-routes")}
                    className={`cursor-pointer p-2 my-1 mx-3 rounded-md transition-all duration-1000 ${
                      isSidebarExpanded ? "" : "my-[20px]"
                    }  hover:bg-blue-400 ${selectedView === "manage-routes" ? "bg-blue-400" : ""}`}
                  >
                    <button className="flex items-center gap-2">
                      <MdOutlineDirectionsBus 
                        className={`${isSidebarExpanded ? "size-4" : "size-6"}`}
                      />
                      {isSidebarExpanded && <span className=""> Routes</span>}
                    </button>
                  </li>
                  <li
                    onClick={() => handleSidebarClick("manage-complaints")}
                    className={`cursor-pointer p-2 my-1 mx-3 rounded-md transition-all duration-1000 ${
                      isSidebarExpanded ? "" : "my-[20px]"
                    }  hover:bg-blue-400 ${selectedView === "manage-complaints" ? "bg-blue-400" : ""}`}
                  >
                    <button className="flex items-center  gap-2">
                      <MdOutlineManageHistory
                        className={`${isSidebarExpanded ? "size-4" : "size-6"}`}
                      />
                      {isSidebarExpanded && <span>Complaints</span>}
                    </button>
                  </li>
                  <li
                    onClick={() => handleLogout()}
                    className={`cursor-pointer p-2 my-1 mx-3 rounded-md transition-all duration-1000 ${
                      isSidebarExpanded ? "" : "my-[20px]"
                    }  hover:bg-blue-400 ${selectedView === "logout" ? "bg-blue-400" : ""}`}
                  >
                    <button className="flex items-center gap-2">
                      <BiLogOut
                        className={`${isSidebarExpanded ? "size-4" : "size-6"}`}
                      />
                      {isSidebarExpanded && <span>Logout</span>}
                    </button>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Dashboard Content */}
            <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
              {/* Conditionally render content based on selected view */}
              {selectedView === "dashboard" &&     <div className='relative left-0 -z-0'><Viewer/></div>}
              {selectedView === "manage-routes" && <ManageRoutes />}
              {selectedView === "manage-drivers" && <ManageDriversContainer />}
              {selectedView === "manage-stops" && <ManageStops />}
              {selectedView === "manage-complaints" && <ManageComplaints />}
            </main>
          </div>
        </div>
      
  );
};

export default AdminPanel;
