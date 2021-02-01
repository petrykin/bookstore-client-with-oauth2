import {Auth} from 'aws-amplify';

export const loadData = async (url: RequestInfo) => {
  return fetch(url, {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }).then(response => response.json());
};

export const saveData = async (url: RequestInfo, body: string, method: string) => {
  return fetch(url, {
    'method': method,
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    },
    'body': body
  }).then(response => response.json());
};