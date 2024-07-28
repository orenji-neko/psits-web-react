import React, { useState, useEffect } from "react";
import TableComponent from "../../components/Custom/TableComponent";
import { membershipHistory } from "../../api/admin";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { InfinitySpin } from "react-loader-spinner";

function MembershipHistory() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleExportPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [
        [
          "Reference ID",
          "ID",
          "Name",
          "Course",
          "Year",
          "Type",
          "Date",
          "Admin",
        ],
      ],
      body: filteredData.map((item) => [
        item.reference_code,
        item.id_number,
        item.name,
        item.course,
        item.year,
        item.type,
        item.date,
        item.admin,
      ]),
      startY: 20,
      styles: {
        fontSize: 10,
        cellPadding: 2,
      },
      headStyles: {
        fillColor: [22, 160, 133],
        textColor: [255, 255, 255],
        fontSize: 12,
      },
      margin: { top: 10 },
    });
    doc.save("membership_history.pdf");
  };

  const columns = [
    {
      key: "reference_code",
      label: "Reference ID",
      sortable: true,
    },
    {
      key: "id_number",
      label: "ID",
      sortable: true,
    },
    {
      key: "name",
      label: "Name",
      sortable: true,
    },
    {
      key: "course",
      label: "Course",
      sortable: true,
    },
    {
      key: "year",
      label: "Year",
      sortable: true,
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
  ];

  return (
    <>
      <TableComponent
        columns={columns}
        data={filteredData}
        style={" md:h-[300px] lg:h-[350px] xl:h-[310px] "}
        handleExportPDF={handleExportPDF}
      />
    </>
  );
}

export default MembershipHistory;
