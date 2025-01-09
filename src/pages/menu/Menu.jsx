import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import PopularMenu from "../home/PopularMenu";

import menuImg from "../../assets/menu/banner3.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";

import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";

export default function Menu() {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu" />
      <SectionTitle subHeading="Don't Miss" heading="today's offer" />
      <MenuCategory items={offered} />

      <MenuCategory items={desserts} title="dessert" img={dessertImg} />
      <MenuCategory items={pizza} title="pizza" img={pizzaImg} />
      <MenuCategory items={soup} title="soup" img={soupImg} />
      <MenuCategory items={salad} title="salad" img={saladImg} />
    </div>
  );
}
