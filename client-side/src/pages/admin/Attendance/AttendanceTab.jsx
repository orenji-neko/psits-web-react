import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ButtonsComponent from "../../../components/Custom/ButtonsComponent";
import TableComponent from "../../../components/Custom/TableComponent";
import FormButton from "../../../components/forms/FormButton";
import { useNavigate } from "react-router-dom";
import { getInformationData } from "../../../authentication/Authentication";
import { higherOfficers } from "../../../components/tools/clientTools";

const AttendanceTabs = ({
  columns,
  filteredData,
  searchQuery,
  setSearchQuery,
  setIsFilterOpen,
  setShowModal,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const user = getInformationData();

  const branches = higherOfficers()
    ? ["All", "UC-Main", "UC-Banilad", "UC-LM", "UC-PT"]
    : [user.campus];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const renderTabPanelContent = (branchName) => {
    // Apply filtering if branch is not "All"
    const branchFilteredData =
      branchName === "All"
        ? filteredData
        : filteredData.filter((item) => item.campus === branchName);

    return (
      <div className="overflow-x-auto">
        <TableComponent
          columns={columns}
          data={branchFilteredData} // Use filtered data
          customButtons={
            <div className="flex flex-col justify-between gap-5 container">
              <div className="flex flex-col justify-between gap-2">
                <div className="flex justify-end gap-2">
                  <FormButton
                    type="button"
                    text="Filter"
                    icon={<i className="fas fa-filter"></i>}
                    styles="bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 rounded-md px-4 py-2 text-sm transition duration-150 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center gap-2"
                    textClass="sm:block hidden text-white"
                    whileHover={{ scale: 1.01, opacity: 0.95 }}
                    whileTap={{ scale: 0.98, opacity: 0.9 }}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between items-center gap-2 container">
                {/* Left Section */}
                <div>
                  <ButtonsComponent>
                    <div className="flex flex-row items-center gap-2">
                      <FormButton
                        type="button"
                        text="Scan QR"
                        icon={<i className="fas fa-qrcode text-base"></i>}
                        onClick={() => navigate("/admin/qrCodeScanner")}
                        styles="bg-blue-100 text-blue-800 hover:bg-blue-200 active:bg-blue-300 rounded-md px-4 py-2 text-sm transition duration-150 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center gap-2"
                        textClass="sm:block hidden text-gray-800"
                        whileHover={{ scale: 1.01, opacity: 0.95 }}
                        whileTap={{ scale: 0.98, opacity: 0.9 }}
                      />
                      <FormButton
                        type="button"
                        text="Refresh"
                        icon={<i className="fas fa-refresh"></i>}
                        styles="bg-blue-400 text-white hover:bg-blue-600 active:bg-blue-700 rounded-md px-4 py-2 text-sm transition duration-150 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center gap-2"
                        textClass="sm:block hidden text-white"
                        whileHover={{ scale: 1.01, opacity: 0.95 }}
                        whileTap={{ scale: 0.98, opacity: 0.9 }}
                      />
                    </div>
                  </ButtonsComponent>
                </div>

                {/* Right Section */}
                <div>
                  <ButtonsComponent>
                    <div className="flex flex-row justify-right gap-2">
                      <CSVLink
                        data={
                          branchFilteredData.length ? branchFilteredData : []
                        }
                        filename={`attendance-${branchName}.csv`}
                      >
                        <FormButton
                          type="button"
                          text="Export CSV"
                          icon={<i className="fas fa-file"></i>}
                          styles="bg-green-500 text-white hover:bg-green-600 active:bg-green-700 rounded-md px-4 py-2 text-sm transition duration-150 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center gap-2"
                          textClass="sm:block hidden text-white"
                          whileHover={{ scale: 1.01, opacity: 0.95 }}
                          whileTap={{ scale: 0.98, opacity: 0.9 }}
                        />
                      </CSVLink>
                    </div>
                  </ButtonsComponent>
                </div>
              </div>
            </div>
          }
        />
      </div>
    );
  };

  return (
    <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
      <TabList>
        {branches.map((branch) => (
          <Tab key={branch}>{branch}</Tab>
        ))}
      </TabList>
      {branches.map((branch) => (
        <TabPanel key={branch}>{renderTabPanelContent(branch)}</TabPanel>
      ))}
    </Tabs>
  );
};

export default AttendanceTabs;
