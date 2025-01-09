import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Cover from "../../shared/Cover";
import orderImg from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Order() {
  const categories = ["dessert", "soup", "pizza", "salad", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Order Food | Bistro Boss</title>
      </Helmet>

      <Cover img={orderImg} title="Order Food" />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Desserts</Tab>
          <Tab>Soup</Tab>
          <Tab>Pizza</Tab>
          <Tab>Salad</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
