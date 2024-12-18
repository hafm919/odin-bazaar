function ProductCard({ title, image, price }) {
  return (
    <div className=" max-h-full shadow-md flex flex-col place-content-around items-center">
      <img src={image} className="size-1/2"></img>
      <div className="flex flex-col place-items-center p-4">
        <h1 className="font-sans max-w-full text-3xl text-center  ">
          {title.length > 40 ? `${title.substring(0, 40)}...` : title}
        </h1>
        <h2 className="font-sans text-2xl font-light">${price}</h2>
        <div className="flex gap-4">
          <button className="text-2xl font-thin">-</button>
          <input
            className="border-b-2 text-center font-light"
            size={1}
            value={0}
          ></input>
          <button className="text-2xl font-thin">+</button>
          <button className="border px-2 border-black">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
