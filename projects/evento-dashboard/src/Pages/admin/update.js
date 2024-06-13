import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "./css/update.css"; // Import your CSS file
import { getAuthAdmin, getAuthUser } from "../../Core/Helper/storage";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_DOMAIN, getImgUrl } from "../../API/config";


const Updatepage = () => {
  const navigate = useNavigate()
  let { id } = useParams();
  const auth = getAuthAdmin();
  const [data, setdata] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
    err: "",
    loading: false,
    reload: false,
    success: null,
  });
  const image = useRef(null);

  const updatedata = (e) => {
    e.preventDefault();
    setdata({ ...data, loading: true });
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    if (image.current.files && image.current.files[0]) {
      formData.append("image", image.current.files[0]);
    }
    if (BACKEND_DOMAIN) {
      axios
        .put(`${BACKEND_DOMAIN}/admin/items/${id}/update`, formData, {
          headers: {
            authorization: auth?.token,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => {
          setdata({
            ...data,
            loading: false,
            success: "Data updated successfully!",
            reload: data.reload + 1,
          });
          navigate("/admin/manage")
        })
        .catch((err) => {
          setdata({
            ...data,
            loading: false,
            success: null,
            err: "Something went wrong, please try again later!",
          });
        });
    }
    
  };

  useEffect(() => {
    if (BACKEND_DOMAIN) {
      axios
        .get(`${BACKEND_DOMAIN}/admin/items/${id}`, {
          headers: {
            authorization: auth?.token
          }
        })
        .then((resp) => {
          setdata({
            title: resp.data.data.item.title,
            description: resp.data.data.item.description,
            price: resp.data.data.item.price,
            image: getImgUrl(resp.data.data.item.image),
          });
        })
        .catch((err) => {
          console.log(err)
          setdata({
            ...data,
            loading: false,
            success: null,
            err: "Something went wrong, please try again later!",
          });
        });
    }
  }, [data.reload]);
  return (
    <div className="update-container">
      <h1>Update</h1>

      {(
        <>
          {data.err && (
            <Alert variant="danger" className="p-2">
              {data.err}
            </Alert>
          )}

          {data.success && (
            <Alert variant="success" className="p-2">
              {data.success}
            </Alert>
          )}

          <Form onSubmit={updatedata} className="text-center py-2">
            <img
              alt={data.title}
              style={{
                width: "50%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid #ddd",
                marginBottom: "10px",
              }}
              src={data.image}
            />

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Data Name"
                value={data.title}
                onChange={(e) => setdata({ ...data, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <textarea
                className="form-control"
                placeholder="Description"
                value={data.description}
                onChange={(e) =>
                  setdata({ ...data, description: e.target.value })
                }
                rows={5}
              ></textarea>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Price"
                value={data.price}
                onChange={(e) => setdata({ ...data, price: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <input type="file" className="form-control" ref={image} />
            </Form.Group>

            <Button
              className="btn btn-dark w-100"
              variant="primary"
              type="submit"
            >
              Update
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default Updatepage;
