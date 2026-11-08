import { useState, useEffect } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Task');

  const fetchTasks = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/tasks`);
      const data = await res.json();
      if (Array.isArray(data)) setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch(`${API_BASE}/api/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, category, status: 'Todo' })
    });
    setTitle('');
    fetchTasks();
  };

  const updateStatus = async (id, nextStatus) => {
    await fetch(`${API_BASE}/api/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: nextStatus })
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_BASE}/api/tasks/${id}`, { method: 'DELETE' });
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>TaskFlow Board</h1>
      <form onSubmit={addTask} className="task-form">
        <input 
          placeholder="What needs to be done?" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Task">Task</option>
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <div className="board-grid">
        {['Todo', 'In Progress', 'Done'].map(col => (
          <div key={col} className="board-column">
            <h3>{col}</h3>
            {tasks.filter(t => t.status === col).map(t => (
              <div key={t._id} className="task-card">
                <span className="task-badge">{t.category}</span>
                <p className="task-title">{t.title}</p>
                <div className="task-actions">
                  {col !== 'Done' && (
                    <button 
                      onClick={() => updateStatus(t._id, col === 'Todo' ? 'In Progress' : 'Done')}
                      className="btn-advance"
                    >
                      Advance ➔
                    </button>
                  )}
                  <button onClick={() => deleteTask(t._id)} className="btn-delete">✕</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

