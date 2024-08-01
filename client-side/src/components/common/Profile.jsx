import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  getUser,
  getMembershipStatus,
  getRenewStatus,
} from "../../authentication/Authentication";

const Profile = () => {
  const location = useLocation().pathname.split("/")[1];
  const [name, position] = getUser();

  return (
    <div className="flex items-center space-x-3">
      <Link
        to={`/${
          location === "admin"
            ? "admin"
            : location === "student"
            ? "student"
            : ""
        }/profile`}
        className="text-md md:text-md"
      >
        <i className="fas fa-user"></i>
      </Link>
      <h3 className="text-sm sm:text-base md:text-sm hidden sm:block">
        {name}
        <span className="text-xs md:text-sm block">
          {position === "N/A" ? "Membership: " : ""}
          <span
            className={`inline-block py-1 px-2 rounded ${
              (getMembershipStatus() === "Accepted" &&
                getRenewStatus() === "None") ||
              getRenewStatus() === "Accepted"
                ? "bg-green-500 text-white"
                : getMembershipStatus() === "Pending"
                ? "bg-yellow-500 text-yellow-100"
                : getMembershipStatus() === "None" ||
                  getRenewStatus() === "Pending"
                ? "bg-gray-500 text-white"
                : ""
            }`}
          >
            {position !== "N/A"
              ? position
              : (getMembershipStatus() === "Accepted" &&
                  getRenewStatus() === "None") ||
                getRenewStatus() === "Accepted"
              ? "Active"
              : getMembershipStatus() === "Pending"
              ? "Pending"
              : "None"}
          </span>
        </span>
      </h3>
    </div>
  );
};

export default Profile;
