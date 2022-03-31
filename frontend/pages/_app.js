import "../styles/reset.css";
import "../styles/globals.css";

//404-styles
import "../src/components/star/star-error.css";

import Header from "../src/header";
import Footer from "../src/footer";
import {useState, setState} from 'react';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    if(cart.includes(item)){
      return null
    }
    const newItem = [...cart, item]
    setCart(newItem)
  }

  const removeItem = (id) => {
    const newItems = cart.filter((item) => item.id != id);
    setCart(newItems);
  };

  return (
    <>
      <Header cart={cart}/>
      <Component {...pageProps} cart={cart} addCart={addCart} removeItem={removeItem}/>
      <Footer />
    </>
  );
}

export default MyApp;
