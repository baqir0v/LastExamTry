import productModel from "../models/productModel.js";

const productActions = {
  getAll: async (req, res) => {
    try {
      const all = await productModel.find({});
      res.send(all);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  getByID: async (req, res) => {
    try {
      const byID = await productModel.findById(req.params.id);
      res.send(byID);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  createNew: async (req, res) => {
    try {
      const { title, image, price } = req.body;
      const newOne = new productModel({
        title: title,
        image: image,
        price: price,
      });
      await newOne.save()
      res.send(newOne)
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  deleteByID:async (req,res)=>{
    try {
        const deleteOne = await productModel.findByIdAndDelete(req.params.id)
        res.send(`${deleteOne.title} deleted`)
    } catch (error) {
        res.status(500).json({ message: error });
    }
  }
};

export default productActions
