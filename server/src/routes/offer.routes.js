import  Routes  from "express";
import OfferController from "../controllers/offer.controller.js";


const RoutesOffers = Routes();
RoutesOffers.route("/offers")
    .get(OfferController.getAllOffers)
    .post(OfferController.createOffer)
    .put(OfferController.updateOffer)
    .delete(OfferController.deleteOffer)
export default RoutesOffers;
