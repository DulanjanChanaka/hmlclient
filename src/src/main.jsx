import React, { useEffect, useState } from "react";
import { useCartdata } from "./context/cart";

const username = "amila";

const HomeComponent = () => {
  const [selectedShop, setSelectedShop] = useState("");
  const [products, setProducts] = useState([]);
  const [shopList, setShopList] = useState([]);
  const { cartData, setCartData } = useCartdata();

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

  // send cart data
  const sendCartData = () => {
    const filterProducts = products.filter((val) => val.checked === true);

    if (!cartData.name) {
      setCartData((pre) => {
        const temp = { ...pre, name: username };
        return temp;
      });
    }

    if (!cartData.shops) {
      setCartData((pre) => {
        const temp = { ...pre };
        temp.shops = [
          {
            shopID: selectedShop,
            orderList: filterProducts,
          },
        ];
        return temp;
      });
    } else {
      setCartData((pre) => {
        const temp = { ...pre };
        temp.shops.push({
          shopID: selectedShop,
          orderList: filterProducts,
        });
        return temp;
      });
    }
  };

  console.log(cartData);
  return (
    <div className="mx-5">
      <h1>Shop</h1>
      <select
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
      <h1>Select Products</h1>
      {products?.map((val, index) => (
        <div key={val._id} className="flex flex-row gap-3 pb-2">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* {console.log(val._id)} */}
            <input
              readOnly
              onChange={(e) => {
                // setProducts((pre) => {
                //   const temp = [...pre];
                //   temp[index] = { ...temp[index], checked: e.target.checked };
                //   return temp;
                // });
              }}
              type={"checkbox"}
              checked={val.checked || false}
            />
            <p>{val.code} </p>
          </div>
          <div>
            {/* quantity */}
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
              className="box-border border border-1 w-10"
            ></input>
          </div>
        </div>
      ))}
      <button onClick={sendCartData}>Send</button>
    </div>
  );
};

export default HomeComponent;
