import "../App.css";
import { showToast } from "../utils/alertHelper";
import backendConnection from "./backendApi";
import axios from "axios";

export const login = async (formData) => {
  try {
    const response = await axios.post(
      `${backendConnection()}/api/login`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    showToast("success", response.data.message);

    sessionStorage.setItem("Token", response.data.token);
    return sessionStorage.getItem("Token") !== "" ? response.data.role : null;
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "An error occurred");
    }
    console.error("Error:", error);
  }
};

export const register = async (formData) => {
  try {
    const response = await axios.post(
      `${backendConnection()}/api/register`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return true;
    } else {
      showToast("error", response.data.message);
    }
    console.log(response.data.message);
  } catch (error) {
    console.error("Error:", error.response.data.message);
    showToast("error", error.response.data.message);
    return null;
  }
};

export const handleLogouts = async () => {
  try {
    const response = await axios.post(
      `${backendConnection()}/api/logout`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      return true;
    } else {
      showToast("error", response.data.message);
    }

    console.log(response.data.message);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data.message : error.message
    );
    showToast(
      "error",
      error.response ? error.response.data.message : error.message
    );
    return null;
  }
};
