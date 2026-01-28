import http from 'http';

const server = http.createServer((req, res) => {
  res.end("Jay Guru");
});

server.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
