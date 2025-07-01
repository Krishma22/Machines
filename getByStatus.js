import { useState } from 'react';
import axios from 'axios';
import MachineTable from './machineTable';

function GetByStatus() {
  const [status, setStatus] = useState('');
  const [machines, setMachines] = useState([]);

  const fetchMachines = () => {
    if (!status) return;
    axios.get(`http://localhost:3005/machines/status/${status}`)
      .then(res => setMachines(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h3>Select machine status</h3>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">-- Select Status --</option>
        <option value="running">Running</option>
        <option value="paused">Paused</option>
        <option value="terminated">Terminated</option>
      </select>

      <button onClick={fetchMachines} style={{ marginLeft: '10px' }}>
        Submit
      </button>

      {machines.length > 0 && <MachineTable machines={machines} />}
    </div>
  );
}

export default GetByStatus;