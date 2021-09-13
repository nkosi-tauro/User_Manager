package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
    "github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/nkosi-tauro/User_Manager/config"

)

func main() {
    app := fiber.New()
	config.ConnectDB()

	app.Use(cors.New())
    app.Use(logger.New())

    app.Get("/", func(c *fiber.Ctx) error {
        return c.SendString("Hello, World 👋!")
    })

    app.Listen(":3000")
}