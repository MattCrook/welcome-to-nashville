let parks_num = 0;

const parks_searchResultsDomManager = {
    parksFactory(park) {
        const address = JSON.parse(park.mapped_location.human_address);
        parks_num++;
        return `
        <div class="park_info">
            <section id="park__${parks_num}" class="park">
                <div class="park__name">${park.park_name}</div>
                <div class="park__location">${address.address} ${address.city}, ${address.state} ${address.zip}</div>
                <div id="park__saveBtn"><button type="submit" id="park__saveBtn__${parks_num}" class="btn save__${parks_num}">Save</button></div>
            </section>
    </div>
        `
    },
    renderSearchResults(searchResults) {
        const container = document.getElementById("search-results");
        container.innerHTML = "";
        searchResults.forEach(park => {
            container.innerHTML += this.parksFactory(park);
        })
    }
};
