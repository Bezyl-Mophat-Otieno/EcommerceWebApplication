import Order from "../../../models/Order";
import dbConnect from "../../../utils/mongodb";

export  default async function handler  (req,res){

   const {method,query:{id}} = req;

   await dbConnect()

   // Add an orders

   if(method === "PUT"){
     try {

        const updatedOrders = await Order.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})

        res.status(200).json(updatedOrders)
        
     } catch (error) {
        console.log(error.message)
     }
    
   }

   // getting single  order

   if(method === "GET"){
    try {
        const order = await Order.findById(id);
        res.status(200).json(order)
        
    } catch (error) {
        res.status(error.statusCode).json(error.message)
        
    }
    
   }

   // delete an order

      if(method === "DELETE"){


        try {

            const orderToBeDeleted = await Order.findById(id)

          if ( orderToBeDeleted ) {
              await orderToBeDeleted.remove()
              res.status(200).json({msg:"order deleted successfully from the database"})

          }else{
              res.status(404).json({msg:"order not found"})

          }
            
        } catch (error) {
            res.status(error.statusCode).json(error.message)
            
        }
        
       }
    


}