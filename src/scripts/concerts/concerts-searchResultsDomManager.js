const concertsDOMManager = {
    resultHTML(concert, i) {
        // const noteProp = "pleaseNote";
        // const note = noteProp in concert ? concert.pleaseNote : "";
        let addressLine1 = "address" in concert._embedded.venues[0] ? concert._embedded.venues[0].address.line1 : "No Address Listed";


        let concertHTML = `
        <section id="concert-${i}" class="concert">
            <div class="concert-text">
                <p id="concert-name-${i}">${concert.name} @ ${concert._embedded.venues[0].name}</p>
                <p>${addressLine1} | ${concert._embedded.venues[0].city.name}, ${concert._embedded.venues[0].state.stateCode} ${concert._embedded.venues[0].postalCode}</p>
                <p><a href="${concert.url}">Buy Tickets</a></p>
                <button type="submit" id="concert-btn-${i}">Save</button>
                </div>
                <div class="concert-img">
                <img src="${concert.images[0].url}" alt="Picture for ${concert.name} concert ">
                </div>
                </section>
                <hr>
                `;

        // <!-- <p style="font-size: 12px;">${note}</p> -->
        return concertHTML;
    },
    renderResults(concerts, pages, searchType, searchText, currentID) {

        let i = 0;
        const resultContainer = document.querySelector("#search-results");
        resultContainer.innerHTML = "";
        if (typeof concerts == "string") {
            resultContainer.innerHTML = `<p>${concerts}</p>`;
        } else {
            concerts.forEach(concert => {
                i++;
                resultContainer.innerHTML += this.resultHTML(concert, i, pages);
            });

            i = 0;

            // const searchHeader = document.createElement(`section`);
            // searchHeader.id = "search-header";

            const searchHeader = document.getElementById("search-header");
            searchHeader.innerHTML = "";

            const pageContainer = document.createElement(`section`);
            pageContainer.id = "pagination";

            const searchTitle = document.createElement(`section`);
            searchTitle.id = "searching-for";
            searchTitle.innerHTML = `<h3>Searching for concerts with "${searchText}" as a ${searchType}</h3>`;

            // searchHeader.append(searchTitle, pageContainer);
            searchHeader.appendChild(searchTitle);
            searchHeader.appendChild(pageContainer);


            for (let j = 0; j < pages; j++) {
                let pageButtonHTML = `<button type="submit" id="page-${j + 1}">${j + 1}</button>`;
                pageContainer.innerHTML += pageButtonHTML;
                if (`page-${j + 1}` == currentID) {
                    document.getElementById(currentID).style.backgroundColor = "grey";

                }
            }

            for (let j = 0; j < pages; j++) {
                concertEventManager.addPagesButtonEvents(document.getElementById(`page-${j + 1}`), j, searchType);
            }

            concerts.forEach(() => {
                i++;
                concertEventManager.addSaveButtonEvent(i);
            });

        }

    },
    renderItinerary(name) {
        const concertItinContainer = document.getElementById("concert__itin");
        concertItinContainer.innerHTML = `Concert: ${name}`;
    },
    renderSearch(searchForm) {
        searchForm.innerHTML = `
         <div>
            <label for="search-concerts">Genres</label>
            <input list="genre-options" type="list" id="search-concerts">
            <datalist id="genre-options"></datalist>
            <button type="submit" id="search-concerts-btn">Submit</button>
        </div>
        <div>
            <label for="search-concerts-keyword">Keyword</label>
            <input type="text" id="search-concerts-keyword">
            <button type="submit" id="search-concerts-keyword-btn">Submit</button>
        </div>
        `;
    },
    renderDropDown(navbarDrop, nameArray, category) {
        // const dropHTML = document.createElement("section");
        navbarDrop.innerHTML = `
        <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color:azure">
            Pick Search Parameter
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="drop-options">
        </div>
    </div>
        `;
        // navbarSearch.prepend(dropHTML);

        const dropOptions = document.getElementById("drop-options");

        let idArray = [];

        nameArray.forEach(element => {
            const id = `${category}-${element.toLowerCase()}-option`;
            idArray.push(id);
            dropOptions.innerHTML +=
                `<a class="dropdown-item" id="${id}">${element}</a>`;


        });


        idArray.forEach(element => {
            concertEventManager.dropEvent(element);
            // console.log(document.getElementById(`${element}`));


        })

    },
    renderSearchInput(id) {
        if (id == "concerts-genres-option") {
            return `
            <input class="form-control mr-sm-2" type="search" placeholder="Search Genres" list="genre-options" id="search-concerts">
                <datalist id="genre-options"></datalist>
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit" id="search-concerts-btn">Search</button>
            `
        } else if (id == "concerts-keyword-option") {
            return `
            <input class="form-control mr-sm-2" type="search" placeholder="Search Keyword" id="search-concerts-keyword">
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit" id="search-concerts-keyword-btn">Search</button>
            `
        }

    }
};