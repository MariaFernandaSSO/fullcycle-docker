# Full Cycle Docker - Desafio Go

Este é o desafio **Full Cycle** usando **Go** e **Docker**.

O objetivo é criar uma imagem Docker mínima que, ao ser executada, imprima:

```
Full Cycle Rocks!!
```

---

## 💻 Conteúdo do Projeto

- **`main.go`** → Código Go que imprime a mensagem
- **`Dockerfile`** → Arquivo para criar a imagem Docker mínima usando multi-stage build

---

## 🏗️ Como Buildar a Imagem Localmente

Dentro da pasta do projeto, execute:

```bash
docker build -t mariaferoliv/fullcycle .
```

---

## 🚀 Como Executar

```bash
docker run mariaferoliv/fullcycle
```

---

## 🐳 Docker Hub

A imagem está disponível no Docker Hub:

**Link:** [mariaferoliv/fullcycle](https://hub.docker.com/repository/docker/mariaferoliv/fullcycle/general)

Para baixar e executar diretamente:

```bash
docker pull mariaferoliv/fullcycle
docker run mariaferoliv/fullcycle
```

---

## 📦 Estrutura do Projeto

```
.
├── main.go
├── Dockerfile
└── README.md
```