import React, { useEffect, useState } from 'react';

const kegiatan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data_siswa');
      const result = await response.json();
      setData(result); // Mengatur data dari API ke state
    };
    fetchData();
  }, []);

  // Mengambil hanya 10 data pertama
  const dataToDisplay = data.slice(0, 10);

  return (
    <div>
      <h1>Data from MySQL Database</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nama</th>
            <th>NPM</th>
            <th>Alamat</th>
            <th>No HP</th>
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((item) => (
            <tr key={item.id}>
              <td>{item.Nama}</td>
              <td>{item.Npm}</td>
              <td>{item.alamat}</td>
              <td>{item.no_hp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default kegiatan;
