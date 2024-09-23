import { useState } from "react";

const HomePage = () => {


  const [count, setCount] = useState(0);

  const handleIncre = () => {
    setCount(count + 1);
  }

  console.log('render');
  return (
    <div>
      <button onClick={handleIncre}>Incre</button>

      <h1>{count}</h1>

      <h1>This is homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nemo consequuntur explicabo, odio, molestias corporis eveniet quae tempora molestiae qui magni exercitationem cum sapiente. Odit amet cupiditate dolorum laboriosam quibusdam.</p>


    </div>
  )
}
export default HomePage