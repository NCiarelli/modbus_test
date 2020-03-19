// JSMODBUS SECTION

// // OpenPLC Modbus server address
// const host = "localhost";
// const port = "502";

// // What is unitId here for?
// const unitId = 1;

// const Modbus = require('jsmodbus');
// const net = require('net');
// const socket = new net.Socket();
// const client = new Modbus.client.TCP(socket);
// const options = {
// 'host' : host,
// 'port' : port
// }



// socket.on('connect', function () {
 
//     // make some calls
    
    
//     client.readCoils(0, 13).then(function (resp) {
     
//         // resp will look like { response : [TCP|RTU]Response, request: [TCP|RTU]Request }
//         // the data will be located in resp.response.body.coils: <Array>, resp.response.body.payload: <Buffer>
//         console.log(`The following are the PLC output coils: \n${resp}`);
     
//     }, console.error);

//     // client.readHoldingRegisters(1024, 10).then(function (resp) {
//     //     console.log(`The following are the PLC holding registers: \n${resp}`);
//     // }, console.error);
     
// });

// socket.connect(options);


// MODBUS-SERIAL SECTION

// create an empty modbus client
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();
 
// open connection to a tcp line
client.connectTCP("127.0.0.1", { port: 502 });
client.setID(1);
 
// read the values of 10 registers starting at address 0
// on device number 1. and log the values to the console.
setInterval(function() {
    client.readHoldingRegisters(1024, 10, function(err, data) {
        console.log(data.data);
    });
    client.readCoils(0, 10, function(err, data) {
        console.log(data.data);
    });
}, 1000);