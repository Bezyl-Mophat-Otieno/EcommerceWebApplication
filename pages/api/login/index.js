import cookie from "cookie"
import MyApp from '../../_app';

export default async function handler (req,res){
    if(req.method ==="POST"){
     const {username,password} = req.body;

     try {

        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD){
            res.setHeader("Set-Cookie",cookie.serialize("token",process.env.TOKEN,
            {maxAge:60*60,sameSite:"strict",path:"/"}))
            res.status(200).json({message:"success"})
   
       }else{
           res.status(404).json({message:"Invalid credentials"})
       }
        
     } catch (error) {
        console.log(error.message)
        
     }

}
}