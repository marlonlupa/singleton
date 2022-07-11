class App {
    constructor() {
        this.divApp = document.querySelector('#app')
    }

    inserirTexto(text) {
        this.divApp.innerHTML = text;
    }
}

const instancia1 = new App();

instancia1.inserirTexto('texto1');

 // outro ponto do sistema
const instancia2 = new App();

instancia2.inserirTexto('texto2');

// verificando referência de memória
console.log('Referência normal', instancia1 === instancia2)


class AppSingleton {
    static instancia;

    constructor() {
        this.divApp = document.querySelector('#app')
    }

    inserirTexto(text) {
        this.divApp.innerHTML = text;
    }

    static getInstance() {
        if (!this.instancia) {
            this.instancia = new AppSingleton();
        }
        return this.instancia;
    }
}

const instanciaSingletone1 = AppSingleton.getInstance();

instanciaSingletone1.inserirTexto('texto1');

 // outro ponto do sistema
const instanciaSingletone2 = AppSingleton.getInstance();

instanciaSingletone2.inserirTexto('texto2');

// verificando referência de memória
console.log('Referência singletone', instanciaSingletone1 === instanciaSingletone2)