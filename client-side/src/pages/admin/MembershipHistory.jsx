import React, { useState, useEffect, useRef } from "react";
import TableComponent from "../../components/Custom/TableComponent";
import { membershipHistory } from "../../api/admin";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { InfinitySpin } from "react-loader-spinner";
import ButtonsComponent from "../../components/Custom/ButtonsComponent";
import FormButton from "../../components/forms/FormButton";
import ReactToPrint from "react-to-print";
import Receipt from "../../components/common/Receipt";
import { getPosition } from "../../authentication/Authentication";
import { CSVLink } from "react-csv";

function MembershipHistory() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [rowData, setPrintData] = useState("");
  const [selectedStudent, setSelectedStudentName] = useState("");
  const componentRef = useRef();
  const printRef = useRef();
  const position = getPosition();

  const headers = [
    { label: "Reference ID", key: "reference_code" },
    { label: "ID", key: "id_number" },
    { label: "Name", key: "name" },
    { label: "Course", key: "course" },
    { label: "Type", key: "type" },
    { label: "Date", key: "date" },
    { label: "Admin", key: "admin" },
  ];

  const csvData = filteredData.map((item) => ({
    reference_code: item.reference_code,
    id_number: item.id_number,
    name: item.name,
    course: `${item.course}-${item.year}`,
    type: item.type,
    date: item.date,
    admin: item.admin,
  }));

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await membershipHistory();
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const id_number = item.id_number ? item.id_number.toLowerCase() : "";
      const reference_code = item.reference_code
        ? item.reference_code.toLowerCase()
        : "";
      const name = item.name ? item.name.toLowerCase() : "";
      const type = item.type ? item.type.toLowerCase() : "";
      const course = item.course ? item.course.toLowerCase() : "";
      const year = item.year ? item.year.toLowerCase() : "";
      const date = item.date ? item.date.toLowerCase() : "";
      const admin = item.admin ? item.admin.toLowerCase() : "";

      return (
        id_number.includes(searchQuery.toLowerCase()) ||
        name.includes(searchQuery.toLowerCase()) ||
        course.includes(searchQuery.toLowerCase()) ||
        year.includes(searchQuery.toLowerCase()) ||
        date.includes(searchQuery.toLowerCase()) ||
        type.includes(searchQuery.toLowerCase()) ||
        reference_code.includes(searchQuery.toLowerCase()) ||
        admin.includes(searchQuery.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const handlePrintData = (row) => {
    setPrintData(row);
    const name = row.name;
    const words = name.split(" ");
    let fullName = "";

    for (let i = 0; i < words.length - 1; i++) {
      fullName += words[i].charAt(0) + ".";
    }
    fullName += " " + words[words.length - 1];

    setSelectedStudentName(fullName);
  };
  useEffect(() => {
    if (rowData) {
      printRef.current.click();
    }
  }, [rowData]);

  const handlePrintComplete = () => {
    setPrintData("");
  };

  const columns = [
    {
      key: "reference_code",
      label: "Reference ID",
      sortable: true,
    },

    {
      key: "name",
      label: "Name",
      sortable: true,
      cell: (row) => (
        <div className="text-xs">
          <div>{`${row.name} `}</div>
          <div className="text-gray-500">ID: {row.id_number}</div>
          <div className="text-gray-500">RFID: {row.rfid}</div>
        </div>
      ),
    },
    {
      key: "course",
      label: "Course",
      sortable: true,
      cell: (row) => (
        <div className="text-xs">
          <div>{`${row.course} - ${row.year} `}</div>
        </div>
      ),
    },

    {
      key: "type",
      label: "Type",
      sortable: true,
    },
    {
      key: "date",
      label: "Date",
      sortable: true,
    },
    {
      key: "admin",
      label: "Admin",
      sortable: true,
    },
    {
      key: "Print",
      label: "Print",
      sortable: true,
      cell: (row) => (
        <ButtonsComponent>
          <FormButton
            type="button"
            text={
              position !== "Treasurer" &&
              position !== "Assistant Treasurer" &&
              position !== "Auditor" &&
              position !== "Developer"
                ? "Not Authorized"
                : "Print"
            }
            onClick={() => {
              if (
                position === "Treasurer" ||
                position === "Assistant Treasurer" ||
                position === "Auditor" ||
                position === "Developer"
              ) {
                handlePrintData(row);
              }
            }}
            icon={
              <i
                className={`fa ${
                  position !== "Treasurer" &&
                  position !== "Assistant Treasurer" &&
                  position !== "Auditor" &&
                  position !== "Developer"
                    ? "fa-lock"
                    : "fa-print"
                }`}
              ></i>
            }
            styles={`relative flex items-center space-x-2 px-4 py-2 rounded text-white ${
              position !== "Treasurer" &&
              position !== "Assistant Treasurer" &&
              position !== "Auditor" &&
              position !== "Developer"
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500"
            }`}
            textClass="text-white"
            whileHover={{ scale: 1.02, opacity: 0.95 }}
            whileTap={{ scale: 0.98, opacity: 0.9 }}
            disabled={
              position !== "Treasurer" &&
              position !== "Assistant Treasurer" &&
              position !== "Auditor" &&
              position !== "Developer"
            }
          />
          <div style={{ display: "none" }}>
            <ReactToPrint
              trigger={() => (
                <button ref={printRef} style={{ display: "none" }}>
                  Print
                </button>
              )}
              content={() => componentRef.current}
              onAfterPrint={handlePrintComplete}
            />
            <Receipt
              ref={componentRef}
              reference_code={rowData.reference_code}
              course={rowData.course}
              product_name={rowData.product_name}
              batch={rowData.batch}
              size={rowData.size}
              variation={rowData.variation}
              total={rowData.type === "Membership" ? "50" : "50"}
              cash={rowData.cash}
              year={rowData.year}
              name={selectedStudent}
              type={rowData.type}
              admin={rowData.admin}
              reprint={true}
              qty={rowData.qty}
              itemTotal={rowData.itemTotal}
            />
          </div>
        </ButtonsComponent>
      ),
    },
  ];
  return (
    <>
      <TableComponent
        columns={columns}
        data={filteredData}
        customButtons={
          <ButtonsComponent>
            <CSVLink
              data={csvData}
              headers={headers}
              filename={"membership_history.csv"}
            >
              Export to CSV
            </CSVLink>
          </ButtonsComponent>
        }
      />
    </>
  );
}

export default MembershipHistory;
