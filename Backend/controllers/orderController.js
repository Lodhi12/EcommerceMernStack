import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel";

//Placing orders using COD Method
const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    return res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    return res.json({ success: false, meesage: error.message });
  }
};

//Placing orders using Easypaisa Method
const placeOrderEasyPaisa = async (req, res) => {};

//All orders data for admin panel
const allOrders = async (req, res) => {};

//User order data for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    return res.json({ success: true, orders });
  } catch (error) {
    return res.json({ success: false, meesage: error.message });
  }
};

//Update order status from admin panel
const updateStatus = async (req, res) => {};

export {
  placeOrderEasyPaisa,
  placeOrderStripe,
  placeOrderEasyPaisa,
  allOrders,
  userOrders,
  updateStatus,
};
