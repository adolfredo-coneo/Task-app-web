import { useEffect, useState } from "react";
import TaskView from "./TaskView";

interface Props {
  task: Task;
}

const TaskCard = ({ task: { id, title, completed } }: Props) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("gray");
  const [completedText, setCompletedText] = useState("Pending");


  useEffect(() => {
    if (completed) {
      setColor("green-500");
      setCompletedText("Completed");
    }
  }, [completed]);

  const handlerTask = () => {
    setOpen(true);
  };

  return (
    <div
      className={`relative bg-${color} border-4 cursor-pointer`}
      onClick={(Event) => handlerTask()}
    >
      <p>Task # {id}</p>
      <p className="font-bold">{title}</p>
      <p className="font-medium text-left m-2 italic">{completedText}</p>
      <TaskView id={id} title={title} open={open} setOpen={setOpen} setColor={setColor} setCompletedText={setCompletedText} />
    </div>
  );
};

export default TaskCard;
