# cria com a menor distro linux 
FROM golang:alpine AS builder 

# criando a pasta
WORKDIR /app 

# copia os arquivos do meu projeto, no caso o main.go pra dentro do container
COPY . . 

# instala o upx, que é um compressor de executáveis
RUN apk add upx 

# compila o codigo em go mais otimizado
RUN go build -ldflags="-s -w" -o main main.go 

# comprimimos o arquivo usando o upx. 
RUN upx --best --lzma main 

# segunda etapa -> imagem vazia
FROM scratch  

# pega o arquivo da primeira etapa
COPY --from=builder /app/main . 

# comando :) agora funciona se Deus quiser
CMD ["./main"] 