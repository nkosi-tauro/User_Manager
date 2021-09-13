package models

import (
    "go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
    ID           primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
    Name    string             `json:"name,omitempty" bson:"name,omitempty"`
    Email  string             `json:"email,omitempty" bson:"email,omitempty"`
    Password string             `json:"password,omitempty" bson:"password,omitempty"`
    Title string             `json:"title,omitempty" bson:"title,omitempty"`
    Birthdate string             `json:"birthdate,omitempty" bson:"birthdate,omitempty"`
}