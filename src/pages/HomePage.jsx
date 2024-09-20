import age, { comments, data } from "../data/data"

const HomePage = () => {
  console.log(age);

  return (
    <div>

      {data.map((d, i) => {

        return <h1 key={i}>{d}</h1>;
      })}

      {comments.map((comment) => {
        return <div key={comment.id}>
          <h1>{comment.email}</h1>
          <p>{comment.body}</p>
          <p>{comment.body}</p>

        </div>
      })}

    </div>
  )
}

export default HomePage

