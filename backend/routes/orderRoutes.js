import express from "express";
import {
  placeOrderCod,
  placeOrderStripe,
  placeOrderRazorpay,
  allorders,
  userOrders,
  updatStatus,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//Admin features
orderRouter.post("/list", adminAuth, allorders);
orderRouter.post("/status", adminAuth, updatStatus);

//Payment Features
orderRouter.post("/cod", authUser, placeOrderCod);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//user Features
orderRouter.post("/userorders", authUser, userOrders);

//verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
