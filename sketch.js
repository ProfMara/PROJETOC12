var rua, jogador, borda1, borda2;
var ruaIMG, jogadorIMG;


function preload() {
    //carregar a imagem da rua

    //carregar a imagem do jogador

}

function setup() {

    createCanvas(400, 400);

    //criar a sprite para a rua

    //adicionar a imagem da rua na sprite

    //fazer a rua ter velocidade Y para ela se mover na vertical

    //definir o tamanho da rua
    rua.scale = 1.2;



    //criar a sprite do garoto

    //adicionar a imagem do garoto na sprite

    //definir o tamanho do jogador
    jogador.scale = 0.08;



    // criar a borda esquerda 1
    borda1 = createSprite(0, 0, 100, 800);
    //definir a visibilidade da borda esquerda 1
    borda1.


    //criar a borda direita 2
    borda2 = createSprite(410, 0, 100, 800);
    //definir a visibilidade da borda direita 1
    borda2.
    edges = createEdgeSprites();


}

function draw() {
    background(0);
    rua.velocityY = 4;

    // jogador se move junto com o mouse


    // garoto colide com a borda debaixo
    boy.collide(edges[3]);


    //código para resetar a rua
    if (rua.y > 400) {
        rua.y = height / 2;
    }

    drawSprites();
}