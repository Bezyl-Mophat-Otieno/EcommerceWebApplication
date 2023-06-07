
import Product from "../../../../models/Product";
import dbConnect from "../../../../utils/mongodb";


export default async function handler(req, res) {

  const {method} = req;
  // making a database connection 
  await  dbConnect();

  // getting all the products
  if (method === "GET") {

    try {

      const products = await Product.find()
      res.status(200).json(products)
      
    } catch (error) {
      res.status(500).json(error.message)
      
    }


  } 
}