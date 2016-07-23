import * as socket from '../socket';



var sock = new socket.SocketTcp();

sock.onconnect = () => {
    console.log('Connected');
    sock.write('GET /\n\n');
};

sock.ondata = (data) => {
    console.log('Received:');
    console.log(data);
};

sock.connect({host: '192.168.1.150', port: 80});


