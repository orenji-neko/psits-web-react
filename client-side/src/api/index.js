import "../App.css";
import backendConnection from "./backendApi";
import axios from "axios";
import { showToast } from "../utils/alertHelper";
import { setAuthentication } from "../authentication/Authentication";
import { jwtDecode } from "jwt-decode";

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

    const { token } = response.data;
    const data = jwtDecode(token);
    console.log(data.role);
    console.log(token);
    if (data.role === "Admin" || data.role === "Student") {
      showToast("success", "Signed in successfully");
      setAuthentication(token);

      return data.role;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    showToast("error", "An error occurred. Please try again.");
    return null;
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

    return true;
  } catch (error) {
    console.error("Error:", error);
    showToast("error", "An error occurred. Please try again.");
    return null;
  }
};
