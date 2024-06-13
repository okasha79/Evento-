const BACKEND_DOMAIN = "http://localhost:9000";

const getImgUrl = (image_name) => {
  return `${BACKEND_DOMAIN}/uploads/items/${image_name}`;
};

module.exports = { BACKEND_DOMAIN, getImgUrl };
