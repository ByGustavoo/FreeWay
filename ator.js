// Códigos do Ator

let xAtor = 86;
let yAtor = 368;
let colisao = false
let meusPontos = 0;



function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 28, 28); 
}


function movimentaAtor(){
  if (keyIsDown (UP_ARROW)){
    yAtor -= 3
  }
  
  if (keyIsDown (DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3
    }
  }
}


function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 14)
    
    if(colisao){
      voltaAtorPosicaoInical(); // yAtor = 366;
      somDaColisao.play();
      
      if( pontosMaiorQueZero ()){
        meusPontos -= 1;
      }
    }
  }
}


function voltaAtorPosicaoInical(){
  yAtor = 366;
}


function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 0, 0));
  text(meusPontos, width / 5, 27);
}


function marcaPonto(){
  if (yAtor < 30){
    meusPontos += 1;
     somDoPonto.play();
    voltaAtorPosicaoInical();
  }  
}


function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}















