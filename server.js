const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Add spaces before the text to push it to the right
  const indent = "                               "; // adjust as needed

  res.write(indent + "CAMARSE, JANNA LHOU\n");
  res.write(indent + "BSIT BA - 4102\n");
  res.write(indent + "I don't need a telescope to find you. You're in every star I see.\n");
  
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
