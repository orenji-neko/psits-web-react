import "../App.css";
import backendConnection from "./backendApi";
import axios from "axios";
import { showToast } from "../utils/alertHelper";


export const login = async (formData) => {
  try {
    const response = await axios.post(
      `${backendConnection()}/api/login`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    const { message } = response.data;

    showToast("success", "Signed in successfully");
    return response.data.role;
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


