import axios from "axios"
import { useEffect, useState } from "react"
import { CardCompo } from "../components/CardCompo";

const HomePage = () => {

  const [data, setData] = useState();
  const [load, setLoad] = useState();
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
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
    <div className="p-5 grid grid-cols-3 gap-6">
      {data && data.categories.map((cata) => {
        return <CardCompo key={cata.idCategory} cata={cata} />
      })}



    </div>
  )
}
export default HomePage