import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const ItemDetail = () => {
  const { id } = useParams();


  const [data, setData] = useState();
  const [load, setLoad] = useState();
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
        params: {
          i: id
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


  const meal = data?.meals[0];
  const key = meal?.strYoutube.split('=')[1];

  return (
    <div className="p-4">

      {meal && <div className="space-y-4">
        <iframe
          className="h-[300px] w-[400px]"
          src={`https://www.youtube.com/embed/${key}`}>
        </iframe>
        <p>{meal.strInstructions}</p>
      </div>}





    </div>
  )
}
export default ItemDetail