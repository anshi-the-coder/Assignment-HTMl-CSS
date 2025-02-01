import PropTypes from 'prop-types';

const TaskList = ({ tasks, onDelete, onEdit }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
                        <span>{task}</span>
                        <div>
                            <button className="text-blue-500 mr-2" onClick={() => onEdit(index)}>Edit</button>
                            <button className="text-red-500" onClick={() => onDelete(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
  };

export default TaskList