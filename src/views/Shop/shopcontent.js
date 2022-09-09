import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, CardMedia, CardContent } from "@mui/material";
import { productsData, shopCategoriesData } from "../../core/utils/helper";
import { ApplicationCard, AppButton } from "../../components";

const ShopContent = () => {
  const [item, setItem] = useState({ name: "all" });
  const [products, setProducts] = useState([]);
  const [mobileView, setMobileView] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    //get projects base on item
    if (item.name === "all") {
      setProducts(productsData);
    } else {
      const newProducts = productsData.filter((product) => {
        return product.category.toLowerCase() === item.name;
      });
      setProducts(newProducts);
    }

    window.addEventListener('resize', () => {
      return window.innerWidth < 1024 ? setMobileView(true) : setMobileView(false);
    })
  }, [item]);

  const handleChange = (e) => {
    setItem({ name: e.target.value.toLowerCase() });
  };

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      {/* SHOPPING LIST START */}
      <Box className="flex flex-col items-center lg:flex-row lg:items-start">
        {/* LEFT SIDE START */}
        <Box className="flex flex-col w-[100%] text-center gap-4 lg:w-[18%] lg:text-left">
          <h1 className="text-2xl font-body">Categories</h1>
          <h1 className="text-md font-body text-center lg:text-left">Filter by:</h1>
          {mobileView ? (
            <>
              <nav className="mb-12 max-w-xl mx-auto">
                <ul className="flex lg:flex-col">
                  {shopCategoriesData.map((item, index) => {
                    return (
                      <li
                        onClick={(e) => {
                          handleClick(e, index);
                        }}
                        className={`${
                          active === index ? "active" : ""
                        } cursor-pointer capitalize m-4`}
                        key={index}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </>
          ) : (
            <>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={item.name}
                  name="radio-buttons-group"
                >
                  {shopCategoriesData.map((item, index) => {
                    return (
                      <>
                        <FormControlLabel
                          onChange={handleChange}
                          value={item.name}
                          control={<Radio />}
                          label={item.label}
                          key={index}
                        />
                      </>
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </>
          )}
          <hr className="text-gray w-[70%]" />
        </Box>
        {/* LEFT SIDE END */}
        {/* RIGHT SIDE START */}
        <Box className="w-[82%] mb-20">
          <Box className="grid lg:grid-cols-3 gap-y-16 lg:gap-x-8 lg:gap-y-16">
            {products.map((item) => {
              return (
                <>
                  <ApplicationCard
                    className="cursor-pointer"
                    key={item.id}
                    cardmedia={
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt="product image"
                        style={{ width: "100%" }}
                        className="hover:scale-105 duration-100"
                      />
                    }
                    children={
                      <>
                        <h1 className="text-xl font-logo font-semibold text-center mt-4">
                          {item.name}
                        </h1>
                        <CardContent>
                          <Box className="flex gap-2 justify-center">
                            <AppButton
                              buttonColor="button-white"
                              buttonName={"View Details"}
                              style={{
                                width: "100%",
                              }}
                              variant={"contained"}
                              size={"small"}
                            />
                            <AppButton
                              buttonColor="button-black"
                              buttonName={"Buy"}
                              style={{
                                width: "100%",
                              }}
                              variant={"contained"}
                              size={"small"}
                            />
                          </Box>
                        </CardContent>
                      </>
                    }
                  />
                </>
              );
            })}
          </Box>
        </Box>
        {/* RIGHT SIDE END */}
      </Box>
      {/* SHOPPING LIST END */}
    </>
  );
};

export default ShopContent;
