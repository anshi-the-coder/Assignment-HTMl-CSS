import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import TaskManager from "./TaskManager";

const App = () => {
  return (
      <Router>
          <div className="w-full min-h-screen bg-gray-200 flex flex-col items-center">
                <nav className="w-full bg-white shadow-md p-4 flex justify-center space-x-4 fixed top-0">
                    <Link className="text-blue-500" to="/">Home</Link>
                    <Link className="text-blue-500" to="/tasks">Task Manager</Link>
                </nav>
                <div className="mt-16 w-full flex flex-col items-center p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tasks" element={<TaskManager />} />
                    </Routes>
                </div>
            </div>
      </Router>
  );
};

export default App;
