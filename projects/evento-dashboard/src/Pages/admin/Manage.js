import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./css/Manage.css"; // Import your CSS file
import { Link } from "react-router-dom";
import { getAuthAdmin, getAuthUser } from "../../Core/Helper/storage";
import { BACKEND_DOMAIN, getImgUrl } from "../../API/config";
import axios from "axios";

const categories = [
  "decoration",
  "catering",
  "photography",
  "place",
  "workshop",
  "concert",
];

const Managepage = () => {
  const auth = getAuthAdmin();
  const [data, setdata] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });
  const [selectedCategory, setSelectedCategory] = useState("decoration");

  useEffect(() => {
    setdata({ ...data, loading: true });
    if (BACKEND_DOMAIN) {
      axios
        .get(`${BACKEND_DOMAIN}/admin/items?category=${selectedCategory}`, {
          headers: {
            authorization: auth?.token,
          },
        })
        .then((resp) => {
          setdata({ results: resp.data.data.items, loading: false, err: null });
        })
        .catch((err) => {
          setdata({
            ...data,
            loading: false,
            err: "Something went wrong, please try again later!",
          });
        });
    }
  }, [selectedCategory, data.reload]);

  const deletedata = (id) => {
    if (BACKEND_DOMAIN) {
      axios
        .delete(`${BACKEND_DOMAIN}/admin/items/${id}/delete`, {
          headers: {
            authorization: auth.token,
          },
        })
        .then(() => {
          setdata({ ...data, reload: data.reload + 1 });
        })
        .catch((err) => {});
    }
  };

  return (
    <div className="manage-data p-5">
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center">Manage {selectedCategory}</h3>
        <Link to={"/admin/add"} className="btn btn-success">
          Add New +
        </Link>
      </div>

      <div className="button-group mb-5">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-primary mx-2 ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            Manage {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>
                <img
                  src={getImgUrl(data.image)}
                  alt={data.title}
                  className="image-avatar"
                />
              </td>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>{data.price}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deletedata(data.id)}
                >
                  Delete
                </button>
                <button>
                  <Link
                    to={`/admin/items/${data.id}/update`}
                    className="btn btn-sm btn-primary mx-2"
                  >
                    Update
                  </Link>
                </button>
                {/* <Link to={"/" + data.id} className="btn btn-sm btn-info">
                  Show
                </Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Managepage;
