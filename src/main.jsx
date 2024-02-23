import React, { useEffect, useState } from "react";
import { useCartdata } from "./context/cart";

const username = "amila";

const HomeComponent = () => {
  const [selectedShop, setSelectedShop] = useState("");
  const [products, setProducts] = useState([]);
  const [shopList, setShopList] = useState([]);
  const { cartData, setCartData } = useCartdata();
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // Fetch product list from the API
    const fetchProductList = async () => {
      try {
        const response = await fetch(
          "https://caltexserver.netlify.app/api/product"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product list");
        }
        const data = await response.json();
        setProducts(data); // Assuming the response data structure is an array of products
      } catch (error) {
        console.error("Error fetching product list:", error);
      }
    };

    fetchProductList();
  }, []);

  useEffect(() => {
    // Fetch shop list from the API
    const fetchShopList = async () => {
      try {
        const response = await fetch(
          "https://caltexserver.netlify.app/api/shop"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch shop list");
        }
        const data = await response.json();
        setShopList(data); // Assuming the response data structure is an array of shops
      } catch (error) {
        console.error("Error fetching shop list:", error);
      }
    };

    fetchShopList();
  }, []);

  const calculateTotalValue = () => {
    let total = 0;
    products.forEach((product) => {
      if (product.quantity && product.quantity > 0) {
        total += product.whole * product.quantity;
      }
    });
    return total;
  };

  // send cart data
  const sendCartData = async () => {
    try {
      const filterProducts = products.filter((val) => val.quantity > 0);

      const quantities = filterProducts.map(({ _id, code, quantity }) => ({
        productId: _id,
        code,
        quantity,
      }));

      const requestBody = {
        code: selectedShop,
        description: username,
        quantity: quantities,
      };

      console.log(requestBody);

      const response = await fetch(
        "https://caltexserver.netlify.app/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send cart data");
      }

      console.log("Cart data sent successfully");
    } catch (error) {
      console.error("Error sending cart data:", error);
    }
  };

  useEffect(() => {
    setTotalValue(calculateTotalValue());
  }, [products]);

  console.log(cartData);
  return (
    <div className="mx-5">
      <h1 className="mt-3 font-bold text-lg">Select Shop</h1>
      <select
      className=" border-2  border-slate-500 "
        onChange={(e) => {
          setSelectedShop(e.target.value);
        }}
      >
        {shopList?.map((val) => (
          <option key={val._id} value={val.shopcode}>
            {val.name}
          </option>
        ))}
      </select>
      <h1 className="mt-4  mb-2 font-bold text-lg">Select Products</h1>
      {products?.map((val, index) => (
        <div key={val._id} className="flex flex-row gap-3 pb-2">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <input
              readOnly
              onChange={(e) => {}}
              type={"checkbox"}
              checked={val.checked || false}
            />
            <p>{val.code} </p>
          </div>
          <div>
            <input
           
              type={"number"}
              onChange={(e) => {
                setProducts((pre) => {
                  const temp = [...pre];
                  temp[index] = {
                    ...temp[index],
                    quantity: +e.target.value,
                    checked: true,
                  };
                  return temp;
                });
              }}
              className="box-border border border-1  border-slate-500 w-16 ml-2"
            ></input>
          </div>
        </div>
      ))}
      <div className="font-semibold text-lg mt-3">Total Value: {totalValue}</div>
      <button onClick={sendCartData} className="bg-blue-600 py-2 px-8 rounded-lg font-semibold text-base text-white mt-4">Send</button>
    </div>
  );
};

export default HomeComponent;
