import { useState } from 'react';
import axios from 'axios';

function AddMachine() {
  

  const [machine, setMachine] = useState({
    machineId: '',
    ip_address: '',
    status: 'running',
    createdAt: '',
  });

  const handleChange = (e) =>
    setMachine({ ...machine, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    axios.post('http://localhost:3005/machines', machine)
      .then(() => alert('Machine added successfully!'))
      .catch(console.error);
  };

  return (
    <div>
      <h3>Add a Machine</h3>

      <input
        name="machineId"
        placeholder="Machine ID"
        value={machine.machineId}
        onChange={handleChange}
      /><br />

      <input
        name="ip_address"
        placeholder="IP Address"
        value={machine.ip_address}
        onChange={handleChange}
      /><br />

      <label>Status:</label><br />
      <select name="status" value={machine.status} onChange={handleChange}>
        <option value="running">Running</option>
        <option value="paused">Paused</option>
        <option value="terminated">Terminated</option>
      </select><br />

      <label>Created At:</label><br />
      <input
        type="date"
        name="createdAt"
        value={machine.createdAt}
        onChange={handleChange}
      /><br />
      

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AddMachine;
