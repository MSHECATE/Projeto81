canvas = document.getElementById("canvas");
ctx= canvas.getContext("2d");
color = "blue";
ctx.beginPath(); 
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI); // Sintaxe - arc(x, y, r, startAngle, endAngle); PI=180graus
ctx.stroke(); //desenha o circulo
canvas.addEventListener("mousedown", myMousedown); //canvas.addEventListener("evento", nomeFunção que fará o envento);
  
function myMousedown(e)
   //e será a variável evento para o evento mousedown 
   { 
    mouseX = e.clientX - canvas.offsetLeft; 
   // e.clientX fornece as coordenadas x do cursor quando pressionado 
   mouseY = e.clientY - canvas.offsetTop; 
   //e.clientX não fornecerá a real coordenada de x. usamos canvas.offsetLeft
   circle(mouseX , mouseY); //manda as variaveis para a função circle
color = document.getElementById("color").value;//obtém a cor da caixa de inserção
}
circle(mouseX , mouseY); //manda as variaveis para a função circle
color = document.getElementById("color").value;//obtém a cor da caixa de inserção
function circle(mouseX , mouseY) { ctx.beginPath(); 
    
    ctx.strokeStyle = color;
     ctx.lineWidth = 2;
      ctx.arc(mouseX ,mouseY, 40 ,0 , 2*Math.PI); 
      ctx.stroke(); }
