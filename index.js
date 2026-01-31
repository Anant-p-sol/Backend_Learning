import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home Page");
    
  }else if (req.url === "/about") {
    res.end("This is the About Page");
    
  } else if (req.url === "/contact") {
    res.end("Contact us at contact@example.com"); 
  } else {
    res.end("404 Page Not Found");
  }
  res.end("Jay Guru");
});

server.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
