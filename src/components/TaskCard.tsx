import { useEffect, useState } from "react";
import TaskView from "./TaskView";

interface Props {
  task: Task;
}

const TaskCard = ({ task: { id, title, completed } }: Props) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (completed) {
      setColor("green-500");
    }
  }, [completed]);

  const handlerTask = () => {
    setOpen(true);
  };

  return (
    <div
      className={`relative border-${color} border-2 cursor-pointer`}
      onClick={(Event) => handlerTask()}
    >
      <p>Task # {id}</p>
      <p className="font-bold">{title}</p>
      <TaskView id={id} title={title} open={open} setOpen={setOpen} setColor={setColor} />
    </div>
  );
};

export default TaskCard;