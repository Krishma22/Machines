import { useEffect, useState } from 'react';
import axios from 'axios';
import MachineTable from './machineTable';



function Machines() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3005/machines')
      .then(res => {
        //setMachines(res.data);
        //console.log(res.data);
        setMachines(res.data); // Set data to state
      })
      .catch(err => {
        console.error('Error fetching machines:', err);
      });
  }, []);

  return (
 <div>
      <h3>All Machines</h3>
      <MachineTable machines={machines} />
    </div>
  );
}

export default Machines;