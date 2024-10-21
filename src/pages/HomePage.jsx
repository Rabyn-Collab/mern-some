import { useSelector } from "react-redux"


const HomePage = () => {

  const { posts } = useSelector((state) => state.postSlice);

  return (
    <div>




    </div>
  )
}
export default HomePage