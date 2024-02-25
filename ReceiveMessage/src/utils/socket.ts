import {io} from 'socket.io-client';
import configValues from '../config';
const socket = io(configValues.API_URL, {
  extraHeaders: {
    Authorization:
      '721338d4744a17b619875b502ee17f51c3c428e5bcf1245c0ac6645c6e125af3',
  },
});

export default socket;
