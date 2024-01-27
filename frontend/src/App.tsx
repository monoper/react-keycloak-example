import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth } from 'react-oidc-context';
import { useKeycloak } from '@react-keycloak/web';

export const App = () => {
  const { keycloak, initialized } = useKeycloak();

  console.log(keycloak.authenticated);

  if(keycloak.authenticated){
    return (<div>
        Hello {keycloak.tokenParsed!.preferred_username}{" "}
        <button onClick={() => {
          keycloak.logout();}
          }>Log out</button>
    </div>);
  }
  return <button onClick={() => void keycloak.login()}>Log in</button>;
}
