import { useSelector } from "react-redux"
import { SampleCard } from "../components/SampleCard";


const HomePage = () => {

  const { posts } = useSelector((state) => state.postSlice);

  return (
    <div className="grid grid-cols-3 p-5 gap-6">

      {posts.map((post, i) => {
        return <SampleCard key={i} post={post} index={i} />
      })}




    </div>
  )
}
export default HomePage