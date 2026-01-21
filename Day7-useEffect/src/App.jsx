import React, { useEffect, useState } from 'react';

const App = () => {
  const [list, setList] = useState([]);

  const handleApi = async () => {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await res.json();
      setList(data);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card">
            <h2>User Details</h2>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  list?.map((value, index) => {
                    const { name, username, email } = value;
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{name}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
