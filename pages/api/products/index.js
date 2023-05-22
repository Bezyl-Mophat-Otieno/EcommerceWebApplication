// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Product from "../../../models/Product";
import dbConnect from "../../../utils/mongodb";


export default async function handler(req, res) {

  const {method} = req;
  // making a database connection 
  await   dbConnect();

  // getting all the products
  if (method === "GET") {

    try {

      const products = await Product.find();
      res.status(200).json(products)
      
    } catch (error) {
      res.status(error.status).json({error:error.message})
      
    }


  } 
// created a new product
  if (method === "POST"){

    try {

      const requestBody = req.body;
      const productCreated = await Product.create(requestBody)
  
      res.status(201).json({product :  productCreated})
  
    } catch (error) {
  
      res.status(500).json({msg :"Server error: " + error.message})
      
    }

  }



  }
  