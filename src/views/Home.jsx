import React, { useContext, useEffect } from "react";
import { ApplicationBar } from "../components";
import AboutUs from "./FrontPage/aboutus/AboutUs";
import Services from "./FrontPage/services/Services";
import AppFooter from "../components/Footer/Footer";
import HeroBanner from "./FrontPage/herobanner/HeroBanner";
import ContactUs from "./FrontPage/contactus/ContactUs";
import Testimonials from "./FrontPage/testimonials/Testimonials";
import { GlobalContext } from "../core/context/GlobalContext";
import { localstoragehelper } from "../core/utils/storage";
import MessengerCustomerChat from "react-messenger-customer-chat";
const pageId = process.env.REACT_APP_FB_PAGE_ID;
const appId = process.env.REACT_APP_FB_APP_ID;

const Home = () => {
  const contextValues = useContext(GlobalContext);
  const { tokenScanned, adminScanned } = contextValues;
  useEffect(() => {
    adminScanned();
    const __key__ = localstoragehelper.load("key_identifier");
    const token = localstoragehelper.load("appid");
    if (!__key__ || !token) {
    } else {
      tokenScanned(0);
    }
  }, []);
  return (
    <div>
      <ApplicationBar title={"Ecommerce"} />
      <HeroBanner />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
      <AppFooter />
      <MessengerCustomerChat pageId={pageId} appId={appId} />
    </div>
  );
};

export default Home;
