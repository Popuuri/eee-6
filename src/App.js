import React from 'react';
import './App.css';

function App() {
 const data = [
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Terrill',
      gender: 'male',
      email: 'hbingley1@plala.or.jp',
      university: 'Capitol University',
      universityIP: '117.29.86.254',
    },
    {
      id: 2,
      firstName: 'Miles',
      lastName: 'Medhurst',
      gender: 'male',
      email: 'atuny0@sohu.com',
      university: 'Stavropol State Technical University',
      universityIP: '253.240.20.181',
    },
    {
      id: 3,
      firstName: 'Hills',
      lastName: 'male',
      gender: 'rshawe2@51.la',
      email: 'yraigatt3@nature.com',
      university: 'University of Cagayan Valley',
      universityIP: '205.226.160.3',
    },
    {
      id: 4,
      firstName: 'Cummerata',
      lastName: 'male',
      gender: 'yraigatt3@nature.com',
      email: 'rshawe2@earthlink.net',
      university: 'Shenyang Pharmaceutical University',
      universityIP: '243.20.78.113',
    },
 ];

 return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>University</th>
            <th>University IP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.university}</td>
              <td>{item.universityIP}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
}

export default App;