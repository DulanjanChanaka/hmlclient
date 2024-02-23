const sendCartData = async () => {
    try {
      const filterProducts = products.filter((val) => val.quantity > 0);
  
      const quantities = filterProducts.map(({ _id, quantity }) => ({ productId: _id, quantity }));
  
      const requestBody = {
        code: selectedShop,
        description: username,
        quantity: quantities
      };
  
      console.log(requestBody);
  
      const response = await fetch("https://caltexserver.netlify.app/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send cart data");
      }
  
      console.log("Cart data sent successfully");
    } catch (error) {
      console.error("Error sending cart data:", error);
    }
  };











  const sendCartData = async () => {
    try {
      const filterProducts = products.filter((val) => val.quantity > 0);
  
      const quantities = filterProducts.map(({ code, quantity }) => ({ productId: code, quantity }));
  
      const requestBody = {
        code: selectedShop,
        description: username,
        quantity: quantities
      };
  
      console.log(requestBody);
  
      const response = await fetch("https://caltexserver.netlify.app/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send cart data");
      }
  
      console.log("Cart data sent successfully");
    } catch (error) {
      console.error("Error sending cart data:", error);
    }
  };

  const sendCartData = async () => {
    try {
      const filterProducts = products.filter((val) => val.quantity > 0);
  
      const quantities = filterProducts.map(({ code, quantity }) => ({ productId: code, quantity }));
  
      const requestBody = {
        code: selectedShop,
        description: username,
        quantity: quantities
      };
  
      console.log(requestBody);
  
      const response = await fetch("https://caltexserver.netlify.app/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send cart data");
      }
  
      console.log("Cart data sent successfully");
    } catch (error) {
      console.error("Error sending cart data:", error);
    }
  };

  