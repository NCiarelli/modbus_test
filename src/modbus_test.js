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
