const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8081, host: '192.168.5.27' }, () => {
  console.log("Signaling Server listening on Port: 8081");
});

wss.broadcast = (ws, data) => {
  wss.clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      console.log(data);
      client.send(data, {binary: false});
    }
  });
};

wss.on("connection", (ws) => {
  console.log(
    `Client Connected. Total Connected Clients: ${wss.clients?.size}`
  );

  ws.on("message", (resp) => {
    console.log(`Message Received: ${resp}\n\n`);
    wss.broadcast(ws, resp);
  });

  ws.on("close", (resp) => {
    console.log(`Client Disconnected. Total Clients ${wss.clients?.size}`);
  });

  ws.on("error", (resp) => {
    console.log(`Client Errored. Total Clients ${wss.clients?.size}`);
  });
});
