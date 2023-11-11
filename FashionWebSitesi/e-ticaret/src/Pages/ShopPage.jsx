import { Fragment } from "react";
import Products from "../components/Products/Products";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

const ShopPage = () => {
  return (
    <Fragment>
      <Products />
      <CampaignSingle />
    </Fragment>
  );
};

export default ShopPage;
