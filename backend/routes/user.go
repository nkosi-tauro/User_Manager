package routes

import (
    "github.com/gofiber/fiber/v2"
    "github.com/nkosi-tauro/User_Manager/controllers" // replace
)

func UsersRoute(route fiber.Router) {
    route.Get("/", controllers.GetAllUser)
    route.Get("/:id", controllers.GetUser)
    route.Post("/", controllers.AddUser)
    route.Put("/:id", controllers.UpdateUser)
    route.Delete("/:id", controllers.DeleteUser)
}