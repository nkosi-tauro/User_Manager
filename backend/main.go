package main

import (
	"log"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
    "github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/nkosi-tauro/User_Manager/config"
	"github.com/nkosi-tauro/User_Manager/routes"

)

func setupRoutes(app *fiber.App) {
    app.Get("/", func(c *fiber.Ctx) error {
        return c.Status(fiber.StatusOK).JSON(fiber.Map{
            "success":     true,
            "message":     "Welcome to the User Management App 👷",
            "github_repo": "https://github.com/nkosi-tauro/User_Manager",
        })
    })

    api := app.Group("/api")

    routes.UsersRoute(api.Group("/users"))
}

func main() {
    app := fiber.New()
	config.ConnectDB()

	app.Use(cors.New())
    app.Use(logger.New())

	setupRoutes(app)

   	err := app.Listen(":3000")
   	if err != nil {
		log.Fatal("Error app failed to start")
		panic(err)
	}
}