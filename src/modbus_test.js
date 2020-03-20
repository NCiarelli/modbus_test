'use strict'

// JSMODBUS SECTION

// OpenPLC Modbus server address
const host = "localhost";
const port = "502";

// What is unitId here for?
const unitId = 1;

const modbus = require('jsmodbus')
const net = require('net')
const socket = new net.Socket()
const options = {
  'host': host,
  'port': port
}
const client = new modbus.client.TCP(socket)

socket.on('connect', function () {
  client.readCoils(0, 8)
    .then(function (resp) {
      console.log(resp.response._body.valuesAsArray)
      socket.end()
    }).catch(function () {
      console.error(arguments)
      socket.end()
    })
    client.readHoldingRegisters(0, 10)
    .then(function (resp) {
      console.log(resp.response._body.valuesAsArray)
      socket.end()
    }).catch(function () {
      console.error(require('util').inspect(arguments, {
        depth: null
      }))
      socket.end()
    })
})

socket.on('error', console.error)
socket.connect(options)


// MODBUS-SERIAL SECTION

// // create an empty modbus client
// var ModbusRTU = require("modbus-serial");
// var client = new ModbusRTU();
 
// // open connection to a tcp line
// client.connectTCP(host, { port: 502 });
// client.setID(1);
 
// // read the values of 10 registers starting at address 0
// // on device number 1. and log the values to the console.
// setInterval(function() {
//     client.readHoldingRegisters(1024, 10, function(err, data) {
//         console.log(data.data);
//     });
//     client.readCoils(0, 10, function(err, data) {
//         console.log(data.data);
//     });
// }, 1000);