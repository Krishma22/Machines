import { useState } from 'react';
import axios from 'axios';
import MachineTable from './machineTable';

function GetByIdOrIp() {
  const [query, setQuery] = useState('');
  const [machines, setMachines] = useState([]);

  const handleSubmit = () => {
    axios.get(`http://localhost:3005/machines/${query}`)  //why it returns all machines
      .then(res =>{ 
        console.log(res.data);
        const data = res.data;
        setMachines(Array.isArray(data) ? data : [data]);
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h3>Enter machine ID or IP address</h3>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>

      {machines.length > 0 && <MachineTable machines={machines} />}
    </div>
  );
}

export default GetByIdOrIp;