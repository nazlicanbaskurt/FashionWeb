import React from "react";
import Slider from "../components/Slider/Sliders";
import Category from "../components/Categories/Category";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import Blog from "../components/Blog/Blog";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";


const HomePage = () => {
  return (
    <React.Fragment>
      <Slider />
      <Category />
      <Products />
      <Campaigns />
      <Products />
      <Blog />
      <Brands />
      <CampaignSingle />
      
    </React.Fragment>
  );
};

export default HomePage;
