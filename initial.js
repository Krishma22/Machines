import React, { useState } from 'react';
import Machines from './machines';
import GetByIdOrIp from './getById';
import GetByStatus from './getByStatus';
import AddMachine from './addmachine';

function InitialOption() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>What information do you want to look for</h2>
      <div>
        <label>
          <input
            type="radio"
            value="Option 1"
            checked={selectedOption === 'Option 1'}
            onChange={handleChange}
          />
          1. get list of all machines in the sytem
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="Option 2"
            checked={selectedOption === 'Option 2'}
            onChange={handleChange}
          />
          2. get machines by ip_address or id
        </label>
      </div>

       <div>
        <label>
          <input
            type="radio"
            value="Option 3"
            checked={selectedOption === 'Option 3'}
            onChange={handleChange}
          />
          2. get machines by status
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="Option 4"
            checked={selectedOption === 'Option 4'}
            onChange={handleChange}
          />
          4. add a new machine in the system
        </label>
      </div>

      {selectedOption === 'Option 1' && <Machines />}
      {selectedOption === 'Option 2' && <GetByIdOrIp />}
      {selectedOption === 'Option 3' && <GetByStatus />}
      {selectedOption === 'Option 4' && <AddMachine/>}
    </div>
  );
}

export default InitialOption;
