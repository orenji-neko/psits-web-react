let storedData;
let storedRole;

export const getRoute = () => {
  return storedRole || null;
};

export const setInformationData = (data, role) => {
  storedData = data;
  storedRole = role;
};

export const getInformationData = () => {
  return {
    id_number: storedData?.id_number || null,
    name: storedData?.name || null,
    email: storedData?.email || null,
    course: storedData?.course || null,
    year: storedData?.year || null,
    role: storedRole || null,
    position: storedData?.position || null,
  };
};
export const removeAuthentication = () => {
  //TODO: Log
  sessionStorage.removeItem("Token");
  sessionStorage.removeItem("Data");
  sessionStorage.removeItem("hasReloaded");
  storedData = null;
  storedRole = null;
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
