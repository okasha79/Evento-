import { Form } from "react-router-dom";
import "../style/Payment.css";
import Swal from "sweetalert2";
import axios from "axios";
import { getAuthUser } from "../../../Core/Helper/storage";
import { BACKEND_DOMAIN, getImgUrl } from "../../../API/config";
import { useState } from "react";


const BasketForm = ({ price, setBasketdata, basketData }) => {
  const auth = getAuthUser()

  const [data, setData] = useState({
    eventDate: "",
    eventTime: "",
    address: "",
    phone: "",
    paymentMethod: "cash",
    comment: "",
    loading: false,
    err: [],
  });

  const handleBadResponse = (message, items) => {
    const cardsHtml = items.map(card => `
    <div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px;">
      <img src="${getImgUrl(card.image)}" alt="${card.title}" style="width: 100px; height: 100px; object-fit: cover;"/>
      <h4>${card.title}</h4>
      <p><strong>Category:</strong> ${card.category}</p>
      <p><strong>Description:</strong> ${card.description}</p>
      <p><strong>Price:</strong> ${card.price}</p>
      <p><strong>Event Date:</strong> ${data.eventDate}</p>
    </div>
  `).join('');

    // Show the SweetAlert2 alert
    Swal.fire({
      title: 'Order has been failed',
      html: `
      <p>${message}</p>
      ${cardsHtml}
    `,
      icon: 'error',
      width: '600px', // Adjust width to fit content
      showCloseButton: true,
      confirmButtonText: 'OK'
    });
  };
  const handleSubmittedSwal = () => {
    Swal.fire("Your Order Has Been Successfully Submitted!");
  }

  const CheckoutForm = (e) => {
    e.preventDefault();
    console.log(data)
    setData({ ...data, loading: true, err: [] });
    axios.post(`${BACKEND_DOMAIN}/api/items/basket/checkout`, {
      eventDate: data.eventDate,
      eventTime: data.eventTime,
      address: data.address,
      phone: data.phone,
      paymentMethod: data.paymentMethod,
      comment: data.comment,
    }, { headers: { authorization: auth.token } })
      .then((resp) => {
        setData({ ...data, loading: false, err: [] });
        handleSubmittedSwal()
        setBasketdata({ ...basketData, reload: basketData.reload + 1 })
        // window.location.reload()
      })
      .catch((errors) => {
        console.log(errors.response, 500)
        let message = errors.response?.data?.message
        let items = errors.response?.data?.data?.reservedItems
        setData({
          ...data,
          loading: false,
          err: [{
            message,
            items
          }], // Handle undefined errors array
        });
        if (errors.response.status == 400) {
          handleBadResponse(message, items)
        }
      });
  };
  return (
    <>
      <Form className="payment" onSubmit={CheckoutForm}>
        <div class="card">
          <div class="title">
            <p class="heading">Complete Your Details</p>
          </div>
          <div class="wrapper">
            <div class="color black">
              Event Day
              <span class="hex">
                <input type="date" name="Delivery Time" required={true} onChange={(e) => setData({ ...data, eventDate: e.target.value })} />
              </span>
            </div>
            <div class="color eerie-black">
              event time
              <span class="hex">
                <input type="time" name="event time" required={true} onChange={(e) => setData({ ...data, eventTime: e.target.value })} />
              </span>
            </div>
            <div class="color chinese-black">
              Address
              <span class="hex">
                <input type="text" placeholder="write your address" required={true} onChange={(e) => setData({ ...data, address: e.target.value })} />
              </span>
            </div>
            <div class="color night-rider">
              Phone
              <span class="hex">
                <input type="text" placeholder="write your number" required={true} onChange={(e) => setData({ ...data, phone: e.target.value })} />
              </span>
            </div>
            <div class="color chinese-white">
              payment Method
              <span class="hex">
                {" "}
                <select value={data.paymentMethod} onChange={(e) => setData({ ...data, paymentMethod: e.target.value })}>
                  <option value="cash" name="Cash">
                    Cash
                  </option>
                  <option value="Instapay" name="Instapay">Instapay</option>
                </select>
              </span>
            </div>
            <div class="color anti-flash-white">
              you have any comment?
              <span class="hex">
                <textarea
                  required={false}
                  placeholder="if you have any comment?"
                  className="basketcomment"
                  onChange={(e) => setData({ ...data, comment: e.target.value })}
                ></textarea>
              </span>
            </div>
            <div class="title">
              <h2>Total Price: <span style={{ letterSpacing: 1 }}>{price} EGP</span></h2>
            </div>
            <div class="color white">
              <span class="hex">
                <button class="button" type="submit">
                  Submit
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                </button>
              </span>
            </div>
          </div>
        </div>
      </Form>
    </>

  );
};
export default BasketForm;
