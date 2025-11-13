FROM golang:alpine AS builder

WORKDIR /app

COPY . . 

RUN go build main.go

FROM scratch
COPY --from=builder /app/main .
ENTRYPOINT ["./main"]