# 📘 Guia Essencial – TypeScript e POO

Este documento resume os principais conceitos de **TypeScript**, com foco especial em **Programação Orientada a Objetos (POO)**.

---

# 🚀 1. TypeScript

TypeScript é um **superset do JavaScript** que adiciona **tipagem estática** e recursos avançados de orientação a objetos.

### Exemplo básico:

```bash
function soma(a: number, b: number): number {
  return a + b;
}
```

---

# ⚙️ 1.1 ts-node

`ts-node` permite executar arquivos TypeScript diretamente sem precisar compilar manualmente.

### Instalação:

```bash
npm install -D ts-node typescript
```

### Executando:

```bash
npx ts-node index.ts
```

---

# 🛠 1.2 tsconfig.json

Arquivo de configuração do TypeScript.

Criar:

```bash
npx tsc --init
```

### Configurações importantes:

```bash
{
  "target": "ES2020",
  "module": "commonjs",
  "rootDir": "./src",
  "outDir": "./dist",
  "strict": true
}
```

### 🔎 O que significam:
- target → versão do JS gerado
- module → sistema de módulos
- rootDir → pasta fonte
- outDir → pasta compilada
- strict → ativa tipagem mais rígida (recomendado)

---

# 🔄 1.3 Promise e Callback

## 🔹 Callback

Função passada como argumento para outra função.

```bash
function processar(callback: () => void) {
  callback();
}

processar(() => {
  console.log("Executado!");
});
```

📌 Problema: pode gerar "callback hell".

---

## 🔹 Promise

Representa uma operação assíncrona.

```bash
function buscarDados(): Promise<string> {
  return new Promise((resolve, reject) => {
    resolve("Dados recebidos");
  });
}
```

Uso:

```bash
buscarDados()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

---

## 🔹 Async/Await (forma moderna)

```bash
async function executar() {
  try {
    const dados = await buscarDados();
    console.log(dados);
  } catch (err) {
    console.log(err);
  }
}
```

---

# 🧱 1.4 Fundamentos de POO com TypeScript

POO é baseada em:

- Classe
- Objeto
- Encapsulamento
- Herança
- Polimorfismo
- Abstração

---

## 🔹 Classe e Objeto

```bash
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome}`;
  }
}

const pessoa1 = new Pessoa("Maria", 25);
```

---

## 🔹 Modificadores de Acesso

| Modificador | Acesso |
|-------------|--------|
| public | Acessível em qualquer lugar |
| private | Apenas dentro da classe |
| protected | Classe e subclasses |

Exemplo:

```bash
class Conta {
  private saldo: number = 0;

  depositar(valor: number) {
    this.saldo += valor;
  }
}
```

---

## 🔹 Herança

```bash
class Animal {
  emitirSom(): void {
    console.log("Som genérico");
  }
}

class Cachorro extends Animal {
  emitirSom(): void {
    console.log("Au Au");
  }
}
```

---

## 🔹 Polimorfismo

Capacidade de sobrescrever métodos.

```bash
const animal: Animal = new Cachorro();
animal.emitirSom();
```

---

# 🧩 1.5 Interface 

Interfaces definem a **estrutura de um objeto** e são fundamentais na POO com TypeScript.

---

## 🔹 Interface básica

```bash
interface Usuario {
  nome: string;
  email: string;
}
```

Uso:

```bash
const user: Usuario = {
  nome: "João",
  email: "joao@email.com"
};
```

---

## 🔹 Interface com método

```bash
interface Animal {
  nome: string;
  emitirSom(): void;
}
```

---

## 🔹 Classe implementando Interface

```bash
interface Forma {
  calcularArea(): number;
}

class Quadrado implements Forma {
  lado: number;

  constructor(lado: number) {
    this.lado = lado;
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }
}
```

📌 A interface define o contrato.  
📌 A classe é obrigada a implementar os métodos definidos.

---

# 🧠 Resumo Geral

| Conceito | Função |
|----------|--------|
| TypeScript | JavaScript com tipagem |
| ts-node | Executa TS direto |
| tsconfig.json | Configuração do compilador |
| Callback | Função dentro de função |
| Promise | Operação assíncrona |
| Classe | Modelo de objeto |
| Encapsulamento | Proteção de dados |
| Herança | Reutilização de código |
| Polimorfismo | Sobrescrita de métodos |
| Interface | Define contrato de estrutura |

---

