import OfferModel from "../model/offer.model.js";

const OfferController = {
  getAllOffers: async (req, res) => {
    try {
      const offers = await OfferModel.getAllOffers();
      res.json(offers);
    } catch (error) {
      console.log(error);
    }
  },

  createOffer: async (req, res) => {
    try {
      const newOffer = await OfferModel.createOffer(req.body);
      res.json(newOffer);
    } catch (error) {
      console.log(error);
    }
 },

  deleteOffer: async (req, res) => {
    try {
      const deletedOffer = await OfferModel.deleteOffer(req, res);
      res.json(deletedOffer);
    } catch (error) {
      console.log(error);
    }
  },

  updateOffer: async (req, res) => {
    try {
      const updatedOffer = await OfferModel.updateOffer(req, res);
      res.json(updatedOffer);
    } catch (error) {
      console.log(error);
    }
  },
}

export default OfferController
