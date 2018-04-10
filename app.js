"use strict"

console.log(`I\`m client`)

const WebSocket =require('ws')

const options={
    data:{x:3,y:4},
    x:1,
    y:2
}
const ws=new WebSocket(
    'ws://localhost:3005',options
    
)

ws.on('open', function open() {
    console.log(`连接成功`)
    ws.send('something');
  });
  
ws.on('message', function incoming(data) {
    console.log(data);
});