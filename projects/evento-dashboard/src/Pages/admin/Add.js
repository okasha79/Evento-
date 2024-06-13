import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { getAuthAdmin, getAuthUser } from "../../Core/Helper/storage";
import axios from "axios";
import "./css/add.css"; // Import your CSS file
import { BACKEND_DOMAIN } from "../../API/config";

const Addpage = () => {
  const auth = getAuthAdmin();
  const [category, setCategory] = useState("");
  const [movie, setMovie] = useState({
    name: "",
    description: "",
    price: "",
    err: "",
    loading: false,
    success: null,
  });

  const image = useRef(null);

  const createMovie = (e) => {
    e.preventDefault();

    setMovie({ ...movie, loading: true });

    const formData = new FormData();
    formData.append("title", movie.name);
    formData.append("description", movie.description);
    formData.append("price", movie.price);
    formData.append("category", category);
    if (image.current.files && image.current.files[0]) {
      formData.append("image", image.current.files[0]);
    }
    if (BACKEND_DOMAIN) {
      axios
        .post(`${BACKEND_DOMAIN}/admin/items/create`, formData, {
          headers: {
            authorization: auth?.token,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => {
          setMovie({
            name: "",
            description: "",
            price: "",
            err: null,
            loading: false,
            success: `${category.charAt(0).toUpperCase() + category.slice(1)
              } Created Successfully!`,
          });
          image.current.value = null;
        })
        .catch((err) => {
          setMovie({
            ...movie,
            loading: false,
            success: null,
            err: "Something went wrong, please try again later!",
          });
        });
    }
  };

  return (
    <div className="login-container">
      <h1>
        Add New{" "}
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "Item"}{" "}
        Form
      </h1>
      <div className="category-buttons">
        <Button variant="primary" onClick={() => setCategory("decoration")}>
          Decoration
        </Button>
        <Button variant="primary" onClick={() => setCategory("catering")}>
          Catering
        </Button>
        <Button variant="primary" onClick={() => setCategory("photography")}>
          Photographers
        </Button>
        <Button variant="primary" onClick={() => setCategory("place")}>
          Places
        </Button>
        <Button variant="primary" onClick={() => setCategory("workshop")}>
          workshop
        </Button>
        <Button variant="primary" onClick={() => setCategory("concert")}>
          concert
        </Button>
      </div>
      {category && (
        <>
          {movie.err && (
            <Alert variant="danger" className="p-2" style={{ color: "red" }}>
              {movie.err}
            </Alert>
          )}
          {movie.success && (
            <Alert variant="success" className="p-2" style={{ color: "green" }}>
              {movie.success}
            </Alert>
          )}
          <Form onSubmit={createMovie}>
            <Form.Group className="mb-3">
              <Form.Control
                value={movie.name}
                onChange={(e) => setMovie({ ...movie, name: e.target.value })}
                type="text"
                required
                placeholder={`${category.charAt(0).toUpperCase() + category.slice(1)
                  } Name`}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <textarea
                className="form-control"
                placeholder="Description"
                value={movie.description}
                required
                onChange={(e) =>
                  setMovie({ ...movie, description: e.target.value })
                }
                rows={5}
              ></textarea>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Price"
                value={movie.price}
                onChange={(e) => setMovie({ ...movie, price: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <input
                type="file"
                className="form-control"
                ref={image}
                required
              />
            </Form.Group>
            <Button
              className="btn btn-dark w-100"
              variant="primary"
              type="submit"
            >
              Add New {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default Addpage;
