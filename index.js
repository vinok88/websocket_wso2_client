const WebSocket = require('ws');

// Replace with your WebSocket server URL and token
const wsUrl = 'wss://localhost:8099/chats/1/notifications';
const token = '5oWkRreU5qUTJaQSIsImtpZCI6Ik5XUXdPVFJrTWpBNU9XRmpObVUyTnpCbE5UTTNaRFV3T0RVellqWXdabUpsWlROa1pEQTRPRFU0WlRVd1pHSXdObVV5TW1abVpUTmhaRGt5TmpRMlpBX1JTMjU2IiwidHlwIjoiYXQrand0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1ZjQ4ZjAxOS0xZGUxLTRjOGYtYTliYS0zODA0MzhhY2JiMzQiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6IkN0b0dMRHdxSXVPcXl5VzNQNUhBdm9VbUpUc2EiLCJuYmYiOjE3MzkzMjg1MzcsImF6cCI6IkN0b0dMRHdxSXVPcXl5VzNQNUhBdm9VbUpUc2EiLCJzY29wZSI6ImRlZmF1bHQiLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo5NDQzL29hdXRoMi90b2tlbiIsImV4cCI6MTczOTMzMjEzNywiaWF0IjoxNzM5MzI4NTM3LCJqdGkiOiI5OWJhODhjNS1iODg5LTQzMjktYmMxYS0yNDA2NmZiZjVmMzIiLCJjbGllbnRfaWQiOiJDdG9HTER3cUl1T3F5eVczUDVIQXZvVW1KVHNhIn0.KDoYOGA4AfMfrlQ3vvgw9O3jhiT7FlwlONqtUY2mBLDZl8Yt38nioTmqFozUG3phM36EskkMBVYMNtiNxQsU1tYq2zm-Jk_QZ-wGGjSNcO_QRyqob3uLhcVfIeknxl8W9std85OtPl0aOg9Eo_476Z5DHiRqvg6ZzCiq9d1wZiip1dC3nn-559OFGFGp5sehMHslmXkiJ8pGUkEJcgUlI9Q_jrXzpdr-dLG-E3X5wbHF9kWqjsPT57nQmcph5Nq5DOPR8cRedmHTv_7RL9EWfoevzdPObMhDT8vcqnj4xqgKeZ-dK37mXGzLBRvcKg3rTU3RxHeiavSrWuk1-ypj0A';

// Create a new WebSocket client
const ws = new WebSocket(wsUrl, {
  headers: {
    'Authorization': `Bearer ${token}`
  },
  rejectUnauthorized: false // Accept self-signed certificates
});

// Event listener for connection open
ws.on('open', function open() {
  console.log('Connected to the WebSocket server');
  // Send a message to the server
  ws.send('Hello, server!');
});

// Event listener for receiving messages
ws.on('message', function incoming(data) {
  console.log('Received:', data);
});

// Event listener for connection close
ws.on('close', function close() {
  console.log('Disconnected from the WebSocket server');
});

// Event listener for errors
ws.on('error', function error(err) {
  console.error('WebSocket error:', err);
});