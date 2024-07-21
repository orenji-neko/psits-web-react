import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../common/navbar/NavbarAdmin";
import ProfileHeader from "../ProfileHeader";

const AdminLayout = () => {
  const location = useLocation();
  const [label, setLabel] = useState("");

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const extractedLabel = pathParts[2];
    setLabel(
      extractedLabel === "profile" ? "Account Settings" : extractedLabel
    );
  }, [location]);

  return (
    <div className="flex w-full bg-secondary">
      <SideBar /> {/* Example: Admin sidebar */}
      <main className="flex-1 ml-16 px-2  sm:px-4 sm:ml-20 ">
        <ProfileHeader label={label} />
        <div className="relative min-h-main mt-20 sm:mt-[5rem] py-3   sm:py-5 md:py-10 container mx-auto">
          <Outlet /> {/* This is where nested routes will be rendered */}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
