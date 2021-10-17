import { io } from 'socket.io-client';
import { baseURL } from 'constants/apiConstants';

const socket = io(baseURL)

export default socket;
