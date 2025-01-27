import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import FormButton from "../../../components/forms/FormButton";
import { FaUserCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ViewStudentAttendance = ({
  isVisible,
  onClose,
  studentData,
  eventId,
  eventName,
}) => {
  if (!isVisible) return null;

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Modal Data:", studentData);
  }, [studentData]);

  const markAsPresent = () => {
    navigate(
      `/admin/attendance/${eventId}/markAsPresent/${studentData.id_number}`,
      {
        state: { eventName: eventName },
      }
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
          aria-label="Close modal"
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Modal Header */}
        <h2
          id="modal-title"
          className="text-xl font-bold text-gray-900 border-b pb-2 mb-4"
        >
          Student Attendance
        </h2>

        {/* Modal Content */}
        <div id="modal-description" className="space-y-4">
          {Object.entries(studentData || {})
            .filter(([key]) => key !== "_id" && key !== "isAttended") // Exclude specific keys
            .map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="font-medium text-gray-700 capitalize">
                  {key.replace(/_/g, " ")}:
                </span>
                <span className="text-gray-900">{value}</span>
              </div>
            ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <FormButton
            type="button"
            text="Mark as Present"
            onClick={() => {
              markAsPresent();
              onClose();
            }}
            icon={<FaUserCheck size={20} />} // Simple icon
            styles="px-4 bg-[#074873] text-[#DFF6FF] hover:bg-[#09618F] active:bg-[#0B729C] rounded-md p-2 text-sm transition duration-150 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0A5C88] flex items-center gap-2"
            textClass="text-blue-100" // Elegant text color
            whileHover={{ scale: 1.02, opacity: 0.95 }}
            whileTap={{ scale: 0.98, opacity: 0.9 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewStudentAttendance;
