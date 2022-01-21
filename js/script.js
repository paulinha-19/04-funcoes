//1 - crie uma função que exiba uma mensagem no console
const mensagem = () =>
    'Módulo 2 vwn';
console.log(mensagem());

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
const nome = (nome) => {
    console.log(`Nome: ${nome}`);
}
nome("Paula");

//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console
const nomeIdadeEstiloMusical = (nome, idade, estiloMusical) => {
    console.log(`Nome: ${nome}, Idade: ${idade}, Estilo Musical: ${estiloMusical}`);
}
nomeIdadeEstiloMusical("Paula", 24, "Gosto de tudo um pouco");

//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console
function filmeEMusicaFavorita (filmeFavorito, musicaFavorita) {
    console.log(`Filme favorito: ${filmeFavorito}, Música favorita: ${musicaFavorita}`);
}
filmeEMusicaFavorita("Nasce uma Estrela", "Gosto de muitas músicas dificil escolher uma");
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
let random = Math.floor(Math.random() * 11);
const numeroTriplo = function (triplo) {
    console.log(`O número recebido no parâmetro foi: ${triplo}. Seu triplo é: ${triplo*3}.`);
}
numeroTriplo(random);