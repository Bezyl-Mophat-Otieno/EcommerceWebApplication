import dbConnect from "../../../utils/mongodb";
import Order from "../../../models/Order";

export  default async function handler  (req,res){

   const  {method} = req;
   await dbConnect()
   // Add an orders

   if(method === "POST"){

  
     try {

        const order = await Order.create(req.body)
        res.status(201).json(order)
        
     } catch (error) {
        console.log(error.message)
     }
    
   }

   // getting all the orders

   if(method === "GET"){


    try {

        const orders = await Order.find();
        res.status(200).json(orders)
        
    } catch (error) {
        res.status(error.statusCode).json(error.message)
        
    }
    
   }



}