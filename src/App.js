import React from 'react';
import './App.css';
import { useUserApiRequest } from './custom-hooks/useUserApi';

function App() {
  /* Conventional code to make an api request in a React Component */
  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState('');
  // React.useEffect(() => {
  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((json) => {
  //     setData(json);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 1000);
  //   })
  //   .catch((error) => {
  //     setError(error?.message);
  //   });
  // });

  const [data, isLoading, error] = useUserApiRequest();
  return (
    <div className='App'>
      {isLoading ? (
        <p>Loading ....</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(({ id, name, phone, username, email, website }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
