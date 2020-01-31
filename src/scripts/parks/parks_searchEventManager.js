const parks_searchEventManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("search-parks-btn");
        // console.log(button);
        button.addEventListener("click", () => {
            // console.log("HELLO");
            const option = document.getElementById("parkSelector");
            const searchCriteria = option.value;
            const searchResultPromise = parks_apiManager.searchParks(searchCriteria);
            let loader = `
            <div class="boxLoading">Loading Searches...</div>`;
            document.getElementById('search-results').innerHTML = loader;
            searchResultPromise.then(searchResults => {
                // console.log(searchResults);
                parks_searchResultsDomManager.renderSearchResults(searchResults);
            });

        });
    }
};