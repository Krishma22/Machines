function MachineTable({ machines }) {
  return (
    <table border="1" style={{ width: '100%', marginTop: '10px' }}>
      <thead>
        <tr>
          <th>Machine Id</th>
          <th>IP Address</th>
          <th>Status</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {machines.map((m, i) => (
          <tr key={i}>
            <td>{m.machineId}</td>
            <td>{m.ip_address}</td>
            <td>{m.status}</td>
            <td>{m.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MachineTable;