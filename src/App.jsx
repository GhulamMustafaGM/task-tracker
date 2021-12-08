import Header from "./components/Header";
import Tasks from "./components/Tasks";

const initialTasks = [
  {
    id: 1,
    text: "Task 1",
    day: "Dec 10th at 2:00PM",
    reminder: true,
  },
  {
    id: 2,
    text: "Task 2",
    day: "Dec 12th at 5:00Pm",
    reminder: false,
  },
  {
    id: 3,
    text: "Task 3",
    day: "Dec 10th at 9:00AM",
    reminder: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      {/* {initialTasks.map((task) => (
        <p key={task.id}>{task.text}</p>
      ))} */}

      <Tasks tasks={initialTasks} />
      
    </div>
  );
}

export default App;
