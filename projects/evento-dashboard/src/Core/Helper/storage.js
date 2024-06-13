// COOKIES, LOCAL STORAGE

/* Public Storage*/
export const setAuthType = (type = "guest") => {
  localStorage.setItem("user_type", type);
};
export const getAuthType = () => {
  return localStorage.getItem("user_type");
};

/* User Storage*/
export const setAuthUser = (user, token) => {
  localStorage.setItem("user", JSON.stringify({ ...user, token }));
  localStorage.setItem("user_auth_token", token);
  setAuthType("user")
};

export const getAuthUser = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  }
};

export const removeAuthUser = () => { // user logout
  if (localStorage.getItem("user")) localStorage.removeItem("user");
  if (localStorage.getItem("user_auth_token")) localStorage.removeItem("user_auth_token");
  setAuthType("guest")
};

/* Admin Storage */
export const setAuthAdmin = (admin, token) => {
  localStorage.setItem("admin", JSON.stringify({ ...admin, token }));
  localStorage.setItem("admin_auth_token", token);
  setAuthType("admin")
};

export const getAuthAdmin = () => {
  if (localStorage.getItem("admin")) {
    return JSON.parse(localStorage.getItem("admin"));
  }
};

export const removeAuthAdmin = () => { // admin logout
  if (localStorage.getItem("admin")) localStorage.removeItem("admin");
  if (localStorage.getItem("admin_auth_token")) localStorage.removeItem("admin_auth_token");
  setAuthType("guest")
};

