// Import necessary packages
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
)

// Define the Recipe struct
type Recipe struct {
	Title       string   `json:"title"`
	Ingredients []string `json:"ingredients"`
	Link        string   `json:"link"`
}

// Define the SearchResults struct
type SearchResults struct {
	Results []Recipe `json:"results"`
}

// Define the endpoint function
func recipesHandler(w http.ResponseWriter, r *http.Request) {
	// Parse the query parameters
	q := r.URL.Query().Get("q")
	exclusive := r.URL.Query().Get("exclusive")

	// Split the query into ingredients
	ingredients := strings.Split(q, ",")

	// Call the API and get the results
	resp, err := http.Get("http://www.recipepuppy.com/api/?i=" + q + "&p=1")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	// Decode the response body into a SearchResults struct
	var searchResults SearchResults
	err = json.NewDecoder(resp.Body).Decode(&searchResults)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Filter the results if exclusive is true
	if exclusive == "true" {
		var filteredResults []Recipe
		for _, result := range searchResults.Results {
			if containsIngredients(result.Ingredients, ingredients) {
				filteredResults = append(filteredResults, result)
			}
		}
		searchResults.Results = filteredResults
	}

	// Encode the filtered results as JSON and send the response
	w.Header().Set("Content-Type", "application/json")
	err = json.NewEncoder(w).Encode(searchResults)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

// Helper function to check if a recipe contains all the required ingredients
func containsIngredients(recipeIngredients []string, requiredIngredients []string) bool {
	for _, requiredIngredient := range requiredIngredients {
		found := false
		for _, recipeIngredient := range recipeIngredients {
			if strings.TrimSpace(strings.ToLower(requiredIngredient)) == strings.TrimSpace(strings.ToLower(recipeIngredient)) {
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}
	return true
}

func main() {
	// Register the endpoint function
	http.HandleFunc("/recipes", recipesHandler)

	// Start the server
	fmt.Println("Server started on http://localhost:8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}
}
