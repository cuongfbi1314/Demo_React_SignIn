// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
export default () => {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const poolData = {
    UserPoolId: 'us-west-2_12BBCqOUc',
    ClientId: '60jidnoi750gg6l6nr7niubv1m'
  };

  const UserPool =  new CognitoUserPool(poolData);

  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        alert(err.message);
      }
      console.log(data);
    });
  };


  return(
    <div>
      <form onSubmit={onSubmit} >
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
};
