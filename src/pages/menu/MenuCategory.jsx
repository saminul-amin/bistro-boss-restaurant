import { Link } from "react-router-dom";
import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem";

export default function MenuCategory({ items, title, img }) {
  return (
    <div>
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
}
