package config

import (
    "context"
    "fmt"
    "log"
    "time"

    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
    "go.mongodb.org/mongo-driver/mongo/readpref"
)

type MongoInstance struct {
    Client *mongo.Client
    DB     *mongo.Database
}

var MI MongoInstance
const dbName = "users"
const mongoURI = "mongodb://mongo:27017/" + dbName


func ConnectDB() {
    client, err := mongo.NewClient(options.Client().ApplyURI(mongoURI))
    if err != nil {
        log.Fatal(err)
    }

    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()

	db := client.Database(dbName)
	
    err = client.Connect(ctx)
    if err != nil {
        log.Fatal(err)
    }

    err = client.Ping(ctx, readpref.Primary())
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println("Database connected!")

    MI = MongoInstance{
        Client: client,
        DB:     db,
    }
}