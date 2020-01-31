let arts_num = 0;

let artsOptionsArray = [];

const arts_searchResultsDomManager = {
    artsFactory(art) {
        arts_num++;
        return `
            <section id="arts__${arts_num}" class="art">
                <div class="art__name">${art.artwork} | ${art.first_name} ${art.last_name}</div>
                <div class="art__location">${art.location}</div>
                <div class="art__description">${art.description}</div>
                <div class="art__link"><a href="${art.page_link.url}" target="_blank">more info</a></div>
                <div id="art__saveBtn"><button type="submit" id="art__saveBtn__${arts_num}" class="btn save__${arts_num}">Save</button></div>
            </section>
        `
    },
    renderSearchResults(searchResults) {
        const container = document.getElementById("search-results");
        container.innerHTML = "";
        searchResults.forEach(art => {
            container.innerHTML += this.artsFactory(art);
        })
    },
    parseLocationResults(searchResults) {
        searchResults.forEach(art => {
            artsOptionsArray.push(art.location);
        })
    }
};
