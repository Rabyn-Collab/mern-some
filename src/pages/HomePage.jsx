import axios from "axios"
import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react"
import { BlogCard } from "../components/BlogCard";

const HomePage = () => {

  const [data, setData] = useState();

  const getData = async () => {
    try {

      const response = await axios.get('https://dummyjson.com/quotes');

      setData(response.data.quotes);

    } catch (err) {
      console.log(err);
    }
  }

  // getData();

  useEffect(() => {
    getData();
  }, []);

  console.log(data);


  return (
    <div className="p-4 grid grid-cols-4 gap-4">
      {data && data.map((item) => (
        <BlogCard text={item.quote} />
        // <ProductCard image={item.image} text={item.quote} />
      ))}

      {/* <ProductCard image={'assets/snim.jpg'} text={'hello 1'} />
      <ProductCard image={'assets/MERN-stack-1.png'} text={'hello 2'} />
      <ProductCard image={'assets/Screenshot_1.png'} text={'hello 3'} /> */}





    </div>
  )
}
export default HomePage