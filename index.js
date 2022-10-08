const EventEmitter = require("events");

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";
meuEmissor.on(nomeEvento, function (click) {
    console.log("usuario clicou", click);
});

// meuEmissor.emit(nomeEvento, "na barra de rolagem");
// meuEmissor.emit(nomeEvento, "ok");

// let count = 0;
// setInterval(() => {
//     meuEmissor.emit(nomeEvento, "no ok" + count++);
// }, 1000);

const stdin = process.openStdin();
stdin.addListener('data', (value)=> {
  console.log(`Você digitou: ${value.toString().trim()}`)
})