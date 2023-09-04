// App.jsx
import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  // Datos de ejemplo para las tareas
  const tasks = [
    { name: 'Tarea 1', completed: false },
    { name: 'Tarea 2', completed: true },
    { name: 'Tarea 3', completed: false },
  ];

  return (
    <div className="app">
      <Header />
      <main>
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
