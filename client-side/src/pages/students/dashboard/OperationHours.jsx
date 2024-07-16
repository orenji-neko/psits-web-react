import React, { useState, useEffect } from 'react';
import logo from '../../../assets/images/login.png'


const OperationHours = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getHours = () => {
      const date = new Date();  
      const day = date.getDay();
      const hours = date.getHours();
      
      const isSunday = day === 0;
      const isHoliday = false; // Add your holiday logic here

      if (isSunday || isHoliday) {
        setStatus("Closed");
      } else {
        const isOpen = (hours >= 7 && hours <= 11) || (hours >= 13 && hours <= 17);
        setStatus(isOpen ? "Open" : "Closed");
      }
    };

    getHours();
    
    const interval = setInterval(getHours, 60000);
    return () => clearInterval(interval);
  }, []);

  const statusColor = status === "Open" ? "bg-green-500" : "bg-gray-500";

  return (
    <div className="sm:p-6 rounded-lg max-w-lg bg-transparent sm:bg-white space-x-1 sm:space-y-3 text-start ">

      <h4 className="text-md sm:text:lg font-semibold flex sm:flex-col items-center justify-between sm:items-stretch">Current Office Status
          <span className={`block text-xs sm:text-xl ml-2 sm:ml-0 sm:mt-4 py-2 px-4 text-center text-white rounded-lg ${statusColor}`}>{status}</span>

      </h4>
      <div className="space-y-4 hidden sm:block">
        <p className="text-gray-700 flex flex-col">
          <span className="font-semibold">Open</span>
             Monday to Saturday
          <span className="font-normal">7-11 am, 1-5 pm</span>

        </p>
        <p className="text-gray-700">
        </p>
        <p className="text-gray-700 flex flex-col">
          <span className="font-semibold">Closed</span> Sunday & Holidays
        </p>
      <p className="flex flex-col">
        <i className="fas fa-location mb-2" />
        PSITS Office, Room 101, Student Union Building
      </p>
      </div>
    </div>
  );
}

export default OperationHours;
