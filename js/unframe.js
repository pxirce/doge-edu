var unframe = `
  <style>
  
    *{
      font-family: "Nunito Sans", sans-serif;
      margin: 0;
      padding: 0;
    }
  
    body {
      height: 100vh;
      width: 100vw;
      background: rgb(0, 16, 48);
    }

    div{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
      
    h1 { font-size: 25px; color: white; margin-bottom: 10px;}
    h4 { font-size: 10px; color: white; margin-top: 5px;}
    .btn { font-weight: bold; font-size: 18px; background: white; color: black; border: none;
      padding: 12px 42px; 
      border-radius: 6px;
      transition: all 0.8s ease;
      margin-bottom: 5px;
    }
    
    .btn:hover{
      transform: scale(1.03);
    }
    
  </style>
  <div class="container">
  <h1>Error 404</h1>
  <button class="btn btn-secondary" onclick="UnframedRedirect()">Go Home</button>
  <h4>doge-edu.glitch.me</h4>
  </div>
`
if (window.self !== window.top) {
    if (!document.referrer.includes(window.location.href)) {
        document.querySelector("html").innerHTML = unframe;
    }
}

function UnframedRedirect() {
  open(self.location)
}