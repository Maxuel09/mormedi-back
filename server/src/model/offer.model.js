import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const OfferModel = {
  getAllOffers: async () => {
    try {
      const offers = await prisma.offers.findMany();
      res.json(offers);
    } catch (error) {
      console.log(error);
    }
},

  createOffer: async (data) => {
    try {
      const newOffer = await prisma.offers.create({
        data
      });
      // res.json(newOffer);
      return newOffer
    } catch (error) {
      console.log(error);
    }
  },

  updateOffer: async (req, res) => {
    try {
      const updatedOffer = await prisma.offers.update({
        where: {
          id: req.params.id,
        },
        data: req.body,
      });
      res.json(updatedOffer);
    } catch (error) {
      console.log(error);
    }
  },

  deleteOffer: async (req, res) => {
    try {
      const deletedOffer = await prisma.offers.delete({
        where: {
          id: req.params.id,
        },
      });
      res.json(deletedOffer);
    } catch (error) {
      console.log(error);
    }
  },

}

export default OfferModel;