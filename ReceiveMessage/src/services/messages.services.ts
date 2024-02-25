import configValues from '../config';

export const getMessages = async () => {
  const response = await fetch(configValues.API_URL + '/messages');
  return response.json().then(data => data);
};
