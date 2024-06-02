import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    id_number: "",
    password: "",
    confirmpassword: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    course: "",
    year: "",
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      setPasswordMismatch(true);
      return;
    }

    setPasswordMismatch(false);

    try {
      const response = await fetch(
        "https://psits-web-react.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Registration successful:", data);
        window.location.href = "/login";
      } else {
        console.error("Registration failed");
        // Handle error
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div
              className="card-body text-white rounded-3"
              style={{ backgroundColor: "#074873 " }}
            >
              <form onSubmit={handleSubmit}>
                <div className="my-3 pt-2">
                  <label htmlFor="id_number" className="form-label">
                    ID Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="id_number"
                    name="id_number"
                    value={formData.id_number}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmpassword"
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                {passwordMismatch && (
                  <span id="passwordMismatch" style={{ color: "red" }}>
                    Passwords do not match
                  </span>
                )}
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="first_name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="middle_name" className="form-label">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="middle_name"
                        name="middle_name"
                        value={formData.middle_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="last_name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="course" className="form-label">
                        Course
                      </label>
                      <select
                        className="form-control"
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Course</option>
                        <option value="BSIT">BSIT</option>
                        <option value="BSCS">BSCS</option>
                        <option value="ACT">ACT</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="year" className="form-label">
                        Year
                      </label>
                      <select
                        className="form-control"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Year</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-6 ">
                    <button type="submit" className="btn btn-primary me-2">
                      Proceed
                    </button>
                    <a href="/login" className="btn btn-danger">
                      Back
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
