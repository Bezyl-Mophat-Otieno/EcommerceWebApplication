import Product from "../../../models/Product";
import dbConnect from "../../../utils/mongodb";


export default async function handler(req,res) {

    const {method,query:{id}} = req;
    await dbConnect()
    //Getting a single product
    if(method==="GET"){
     try {

        const product = await Product.findById(id)
        res.status(200).json(product)
        
     } catch (error) {
        res.status(error.status).json(error.message)
        
     }
      
     

    }
    if(method==="PUT"){
        
    }

    // delete a product 
    if(method==="DELETE"){

      try {
         await Product.findByIdAndRemove(id)
         res.status(200).json("Product Deleted Successfully")
         
      } catch (error) {
         
         console.log(error)
      } 
        
    }
    
} 