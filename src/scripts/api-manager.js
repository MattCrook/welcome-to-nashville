const apiManager = {
    getItenerary(){
        return fetch("http://localhost:8088/itinerary")
        .then(response => response.json());
    },
    postDataIt(iteneraryObj) {
        return fetch("http://localhost:8088/itinerary", { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(iteneraryObj)
        });
    }
}

// apiManager.getItenerary();