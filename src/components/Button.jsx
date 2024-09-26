const Button = ({ color, label }) => {


  // const person = {
  //   name: 'hari',
  //   age: 90
  // };
  // const {name} = person;

  // console.log(color);

  return (
    <div>
      <button className={`bg-[${color}] text-white px-5 py-2 rounded-md`}>{label}</button>
    </div>
  )
}
export default Button