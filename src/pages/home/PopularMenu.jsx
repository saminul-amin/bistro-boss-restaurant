import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../shared/MenuItem";
import useMenu from "../../hooks/useMenu";

export default function PopularMenu() {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle subHeading="Popular Items" heading="From Our Menu" />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}
