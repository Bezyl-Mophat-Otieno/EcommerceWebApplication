import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children,admin }) => {
  return (
    <>
      <Navbar loggedIn={admin} />
      {children}
      <Footer />
    </>
  );
};

export const getServerSideProps =  async (context,params)=>{

  const  myCookie = context.req?.cookies || "";
  let admin = true;
  if(myCookie.token !== process.env.TOKEN){
    admin=false
  }
  return {
    props: {
      admin:admin
    }
  }

}

export default Layout;
