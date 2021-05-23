import axios from "axios";
import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

interface Props {}

const ListView = (props: Props) => {
  const [numberTasks, setNumberTasks] = useState("3");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (numberTasks !== "") {
      axios
        .get("https://tasks-app-api.herokuapp.com/tasks/" + numberTasks)
        .then((response) => {
          console.log(response);
          setTasks(response.data);
        });
    }
  }, [numberTasks]);

  return (
    <div className="mt-10">
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <p className="ml-3 font-medium text-white text-2xl">Tasks List</p>
            </div>
            <div className="order-2 mt-2 flex-shrink-0 w-auto sm:order-2 sm:mt-0 sm:w-auto">
              <p className="ml-3 font-medium text-white text-2xl"># of Tasks</p>
            </div>
            <div className="order-3 flex-shrink-0 sm:order-3 ml-3">
              <input
                type="number"
                name="nTasks"
                id="nTasks"
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-12 h-8 shadow-sm sm:text-sm border-gray-300 rounded-md px-2"
                value={numberTasks}
                onChange={(e) => setNumberTasks(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <dl className="space-y-10 mt-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
        {tasks.map((task: Task) => (
          <TaskCard key={task.id} task={task}/>
        ))}
      </dl>
    </div>
  );
};

export default ListView;
