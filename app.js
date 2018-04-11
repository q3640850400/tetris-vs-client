"use strict"

console.log(`I\`m client`)

const WebSocket =require('ws')

const options={
    headers:{
        flueid:'0000000001'
    }
}
const ws=new WebSocket(
    'ws://localhost:3005',options
    
)
var msg={
    code:'ready0',
    no:'0000000001'
}
ws.on('open', function open() {
    console.log(`连接成功`)
    ws.send(JSON.stringify(msg));
  });
  
ws.on('message', function incoming(data) {
    console.log(data);
});