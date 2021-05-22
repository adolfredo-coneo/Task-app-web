import axios from "axios";
import { useEffect, useState } from "react";

interface Props {}

const ListView = (props: Props) => {
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("https://tasks-app-api.herokuapp.com/tasks/10").then((response) => {
      console.log(response);
      setTasks(response.data);
    });
  }, []);

  return (
    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
        {
          tasks.map((task: any)=>(
            <div key={task.id} className="relative border-black border-2">{task.title}</div>
          ))
        }
      </dl>
    </div>
  );
};

export default ListView;
