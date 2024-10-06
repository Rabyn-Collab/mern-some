const ProductCard = ({ image, text }) => {

  return (
    <div className=" border-2 border-black">
      <img className="w-full" src={image} alt="" />
      <h1>{text}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, facilis!</p>
    </div>
  )
}
export default ProductCard