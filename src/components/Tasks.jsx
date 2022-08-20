import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <Fragment>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </Fragment>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default Tasks;
