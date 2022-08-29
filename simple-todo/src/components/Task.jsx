import Checkbox from "./checkbox";
import RecBin from "./recicle-bin.jsx";

const Task = ({ task, actions }) => {
  const done = task.complete? 'isComplete' : '';
  const onDelete = (event) => {
    actions[1](task.id);
  }

  const onMark = (event) => {
    actions[0](task.id);
  }

  return (
    <div className={`task ${done}`}>
      <div className="task__title">{task.title}</div>
      <div className="task__opt">
        <Checkbox checked={task.complete} onClick={onMark}/>
        <RecBin onClick={onDelete}/>
        {/* <div className={`task__state`}></div> */}
        {/* <div className={`task__state`}></div> */}
      </div>
    </div>
  );
};

export default Task;
