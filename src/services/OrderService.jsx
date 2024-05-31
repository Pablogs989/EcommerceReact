import axios from "axios";

const API_URL = "http://localhost:3001/orders";

const createOrder = async (cart) => {
  const token = localStorage.getItem("token");
  const ids = cart.map(item => item.id);
  await axios.post(
    API_URL,
    { productIds: ids },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

const orderService = {
  createOrder,
};

export default orderService;
