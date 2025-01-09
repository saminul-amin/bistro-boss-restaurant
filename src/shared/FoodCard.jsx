export default function FoodCard({ item }) {
  const { image, name, recipe, price } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-2 py-1 rounded-lg bg-slate-900 text-white">
          {price}
        </p>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
