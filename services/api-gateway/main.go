package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

type HealthResponse struct {
	Status  string `json:"status"`
	Service string `json:"service"`
	Version string `json:"version"`
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	response := HealthResponse{
		Status:  "healthy",
		Service: "api-gateway",
		Version: "0.1.0",
	}
	
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	router := mux.NewRouter()
	
	router.HandleFunc("/health", healthHandler).Methods("GET")
	router.HandleFunc("/api/v1/health", healthHandler).Methods("GET")
	
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000", "http://localhost:3001"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"*"},
		AllowCredentials: true,
	})

	handler := c.Handler(router)
	
	log.Printf("API Gateway starting on port %s", port)
	if err := http.ListenAndServe(":"+port, handler); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}