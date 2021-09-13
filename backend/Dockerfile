# ./Dockerfile

FROM golang:1.16-alpine AS builder

# Move to working directory .
COPY . /app
WORKDIR /app

# Copy and download dependency using go mod.
COPY go.mod go.sum ./
RUN go mod download

# Export necessary port.
EXPOSE 3000


RUN CGO_ENABLED=0 GOOS=linux go build -o main 


# Command to run when starting the container.
CMD ["./main"]