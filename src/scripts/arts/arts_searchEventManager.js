const arts_searchEventManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("search-arts-btn");
        // console.log(button);
        button.addEventListener("click", () => {
            // console.log("HELLO");
            const option = document.getElementById("artSelector");
            const searchCriteria = option.value;
            // console.log(option.value);
            const searchResultPromise = arts_apiManager.searchArts(searchCriteria);
            let loader = `
            <div class="boxLoading">Loading Searches...</div>`;
            document.getElementById('search-results').innerHTML = loader;
            searchResultPromise.then(searchResults => {
                // console.log(searchResults);
                arts_searchResultsDomManager.renderSearchResults(searchResults);
            });

        });
    }
};