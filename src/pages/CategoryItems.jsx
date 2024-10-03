import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CardList } from "../components/CardList";

const CategoryItems = () => {

  const { category } = useParams();


  const [data, setData] = useState();
  const [load, setLoad] = useState();
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: category
        }
      });
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setLoad(false);
      setErr(err.messgae);

    }

  }



  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return <h1>Loading....</h1>
  }





  return (
    <div className="p-4">

      {data && <CardList meals={data.meals} />}



    </div>
  )
}
export default CategoryItems