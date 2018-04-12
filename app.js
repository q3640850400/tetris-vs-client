"use strict"

console.log(`I\`m client`)

const WebSocket =require('ws')

const options={
    headers:{
        flueid:'0000000001'
    }
}
const ws=new WebSocket(
    'ws://139.199.37.143:3005',options
    
)
ws.on('open', function open() {
    console.log(`连接成功`)
    var msg={
        code:'ready0',
        data:'0000000001'
    }
    ws.send(JSON.stringify(msg));
  });
ws.on('message', function incoming(message) {
    console.log(message);
    var inmsg=JSON.parse(message)
    switch(inmsg.code){
        case 'start':{
            var outmsg={
                code:'score',
                data:'96956'
            }
            ws.send(JSON.stringify(outmsg))
            outmsg={
                code:'update',
                date:[1,2,3,4,5,6,7,8]
            }
            ws.send(JSON.stringify(outmsg))
            break
        }
        case 'pool':{
            var outmsg={
                code:'ready1'
            }
            ws.send(JSON.stringify(outmsg))
            break
        }
        default:{break}
    }
});