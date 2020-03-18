// OpenPLC Modbus server address
const host = "localhost";
const port = "502";

// What is unitId here for?
const unitId = 1;

const Modbus = require('jsmodbus');
const net = require('net');
const socket = new net.Socket();
const client = new Modbus.client.TCP(socket);
const options = {
'host' : host,
'port' : port
}

socket.on('connect', function () {
 
    // make some calls
    
    
    client.readCoils(0, 13).then(function (resp) {
     
        // resp will look like { response : [TCP|RTU]Response, request: [TCP|RTU]Request }
        // the data will be located in resp.response.body.coils: <Array>, resp.response.body.payload: <Buffer>
        console.log(`The following are the PLC output coils: \n${resp}`);
     
    }, console.error);

    client.readHoldingRegisters(0, 10).then(function (resp) {
        console.log(`The following are the PLC holding registers: \n${resp}`);
    }, console.error);
     
});

socket.connect(options);