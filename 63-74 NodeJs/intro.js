// console.log('hellow world');
// print('oii');

const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Before and after selector</title>
      <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
  </head>
  
  <body>
      <h2>Before and after selector</h2>
      <header>
          <nav class="navbar">
              <ul class="navigation">
                  <li class="item">Home</li>
                  <li class="item">About</li>
                  <li class="item">Services</li>
                  <li class="item">Contact us</li>
              </ul>
          </nav>
  
      </header>
      <section>
          <h3>Welcome to coding world</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, blanditiis sunt. Sapiente nesciunt amet a quis culpa rerum facere illum unde saepe ex! Sed quibusdam cupiditate maxime explicabo et possimus.</p>
      </section>
      <hr>
      <style>
          body{
              margin: 0;
              padding: 0;
              background-color: black;
              color: white;
              
          }
          header::before{
              background: url("https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") no-repeat center center/cover;
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              z-index: -1;
              opacity: 0.4;
          }
          header{
              display: flex;
              flex-direction: column;
          }  
          .navigation{
              display: flex;
              /* text-decoration: none; */
              font-family: 'Indie Flower', cursive;
              font-weight: bold;
  
          }
          .navigation li{
              list-style: none;
              padding: 20px 23px;
          }
          section{
              margin: 3px 33px;
              height: 380px;
              display: flex;
              flex-direction: column;
              align-items: center;
              /* border: 2px solid red; */
              justify-content: center;
              font-size: 1.5rem;
              font-family: 'Indie Flower', cursive;
          }
          section h3{
              font-size: 3rem;
          }
          section p{
              text-align: center;
          }
          /* section::before{
              content: "This is a before section content";
          } */
      </style>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});