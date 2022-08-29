
const Form = (props) => {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <input className="todo-text" placeholder="Add new item..."></input>
      <button className="">Add</button>
    </form>
  );
};

export default Form;
