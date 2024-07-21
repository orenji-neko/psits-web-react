import { jwtDecode } from "jwt-decode";

//Set Authentication when successful login
export const setAuthentication = (token) => {
  const user = jwtDecode(token);
  const currentTime = new Date().getTime();
  const time = user.role === "Student" ? 20 * 60 * 1000 : 60 * 60 * 1000;
  const expiryTime = currentTime + time;

  const authen =
    user.role === "Admin"
      ? {
          name: user.name,
          id: user.id_number,
          position: user.position,
          expiry: expiryTime,
          role: user.role,
        }
      : {
          name: user.name,
          id: user.id_number,
          course: user.course,
          year: user.year,
          email: user.email,
          position: user.position,
          expiry: expiryTime,
          role: user.role,
        };
  localStorage.setItem("Data", JSON.stringify(authen));
  sessionStorage.setItem("Token", token);
};

//Retrive Token sa Private Route, every route e check if valid pa ang token
export const getAuthentication = () => {
  const authen = localStorage.getItem("Data");
  const sessionToken = sessionStorage.getItem("Token");
  if (!authen) return null;

  const item = JSON.parse(authen);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem("Data");
    sessionStorage.removeItem("Token");
    return null;
  }
  if (sessionToken) {
    if (item.role === "Admin") {
      return "Administrator";
    } else {
      return "Student";
    }
  } else {
    return null;
  }
};

//Edit Student
export const setRetrieveStudent = (email, course, year) => {
  const authen = localStorage.getItem("Data");
  if (!authen) return null;
  const student = JSON.parse(authen);

  const edited = {
    name: student.name,
    id: student.id_number,
    course: course,
    year: year,
    email: email,
    position: student.position,
    expiry: student.expiry,
    role: student.role,
  };
  localStorage.setItem("Data", JSON.stringify(edited));
};

export const getUser = () => {
  const authen = localStorage.getItem("Data");
  if (!authen) return null;
  const user = JSON.parse(authen);

  if (user.position === "N/A") return [user.name, user.role];

  return [user.name, user.position];
};

export const getStudent = () => {
  const authen = localStorage.getItem("Data");
  if (!authen) return null;

  const info = JSON.parse(authen);

  return [info.id, info.name, info.email, info.course, info.year, info.role];
};

//Remove Authentication after logout
export const removeAuthentication = () => {
  localStorage.removeItem("Data");
  sessionStorage.removeItem("Token");
};

//Attempt Increment
export const attemptAuthentication = () => {
  let attempt = parseInt(localStorage.getItem("attempt")) || 0;
  if (attempt === 2) {
    timeOutAuthentication();
  }
  attempt++;
  localStorage.setItem("attempt", attempt);
};

//Retrieve Attempt for conditional
export const getAttemptAuthentication = () => {
  return parseInt(localStorage.getItem("attempt")) || 0;
};
//Reset Attempt when successful login
export const resetAttemptAuthentication = () => {
  localStorage.removeItem("attempt");
};
//After 3 attempts, mu set og 1 minute rest para dili stress sa database
export const timeOutAuthentication = () => {
  const currentTime = new Date().getTime();
  const time = 60 * 1000;
  const expiryTime = currentTime + time;

  localStorage.setItem("timeout", expiryTime);
};
//E retrieve ang timeout
export const getTimeout = () => {
  const now = new Date();
  const time = localStorage.getItem("timeout");

  if (!time) {
    return null;
  }

  if (now.getTime() > time) {
    localStorage.removeItem("timeout");
    localStorage.removeItem("attempt");
    return null;
  }

  return time;
};
