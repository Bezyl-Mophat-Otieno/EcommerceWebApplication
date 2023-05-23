import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
  } from "@paypal/react-paypal-js";
  import { useSelector } from "react-redux";
  import { useDispatch } from "react-redux";
  import { useEffect } from "react";
  import { useRouter } from "next/router";
  // Custom component to wrap the PayPalButtons and handle currency changes
 function ButtonWrapper ({ currency, showSpinner,createOrder })  {
    
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const cart = useSelector((state)=>{
        return state.cart
    })
    const style = { layout: "vertical" };
    const amount = cart.total;
    


  

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function async (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  export default ButtonWrapper;