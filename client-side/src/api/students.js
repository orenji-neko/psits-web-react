import "../App.css";
import backendConnection from "./backendApi";
import axios from "axios";
import { showToast } from "../utils/alertHelper";
import { setRetrieveStudent } from "../authentication/Authentication";

export const edit = async (formData) => {
  try {
    const response = await axios.post(
      `${backendConnection()}/api/edit`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { student, message } = response.data;
    if (response.status === 200) {
      showToast("success", message);

      setRetrieveStudent(student.email, student.course, student.year);
    } else {
      showToast("error", message);
    }
  } catch (error) {
    if (error.response && error.response.data) {
      showToast("error", error.response.data.message || "An error occurred");
    } else {
      showToast("error", "An error occurred");
    }
    console.error("Error:", error);
  }
};
