import Task from "./Task.jsx";

const Tasks = ({ tasks, actions }) => {
  return (
    <>
      {tasks.map((item) => (
        <Task key={item.id} task={item} actions={actions}/>
      ))}
    </>
  );
};

export default Tasks;
