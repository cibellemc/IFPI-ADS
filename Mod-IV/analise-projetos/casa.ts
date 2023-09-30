enum Acabamento {
    Liso,
    Texturizado,
    Pintado,
    Outro,
}

enum TipoTelha {
    Cerâmica,
    Metálica,
    Ardósia,
    Outro,
}

enum TipoVidro {
    Comum,
    Temperado,
    Reflectivo,
    Outro,
}

class Endereco {
    constructor(public logradouro: string, public numero: string, public cep: string) {}
}

interface Moradia {
    area: number;
    endereco: Endereco;
}

interface Parede {
    altura: number, 
    largura: number, 
    acabamento: Acabamento
}

interface Telhado {
    tipoTelha: TipoTelha;
    area: number;
}

interface Espelho {
    tipoVidro: TipoVidro,
    altura: number,
    largura: number
}

class Casa implements Moradia {
    constructor(
        public telhadoAreaExterna: Telhado,
        public telhadoAreaInterna: Telhado,
        public paredeBanheiro: Parede,
        public paredeCozinha: Parede,
        public espelhoCorredor: Espelho,
        public area: number,
        public endereco: Endereco
    ) {}
}

/*const endereco = new Endereco('Rua Principal', '123', '12345');

const telhadoExterno = { tipoTelha: TipoTelha.Cerâmica, area: 100 };
const telhadoInterno = { tipoTelha: TipoTelha.Metálica, area: 50 };

const paredeBanheiro: Parede = {
    altura: 3.5,
    largura: 2.0,
    acabamento: Acabamento.Pintado,
};

const paredeCozinha: Parede = {
    altura: 2.8,
    largura: 4.0,
    acabamento: Acabamento.Texturizado,
};

const espelhoCorredor: Espelho = {
    tipoVidro: TipoVidro.Comum,
    altura: 180,
    largura: 50
}

const minhaCasa = new Casa(
    telhadoExterno,
    telhadoInterno,
    paredeBanheiro,
    paredeCozinha,
    espelhoCorredor,
    150,
    endereco
);

// Exemplo de como acessar os atributos da casa
console.log('Área da casa:', minhaCasa.area);
console.log('Endereço:', minhaCasa.endereco.logradouro, minhaCasa.endereco.numero, minhaCasa.endereco.cep);
console.log('Telhado da área externa:', minhaCasa.telhadoAreaExterna.tipoTelha);
console.log('Telhado da área interna:', minhaCasa.telhadoAreaInterna.tipoTelha);
console.log('Parede do banheiro - Altura:', minhaCasa.paredeBanheiro.altura, 'Largura:', minhaCasa.paredeBanheiro.largura);
console.log('Parede da cozinha - Acabamento:', minhaCasa.paredeCozinha.acabamento);
console.log('Espelho do corredor - Tipo de Vidro:', minhaCasa.espelhoCorredor.tipoVidro);
console.log('Espelho do corredor - Altura:', minhaCasa.espelhoCorredor.altura, 'Largura:', minhaCasa.espelhoCorredor.largura);
*/