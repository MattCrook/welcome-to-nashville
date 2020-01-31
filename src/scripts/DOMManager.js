const DOMManager = {
    toggleItenreary() {
        document.getElementById("search").classList.add("hidden");
        document.getElementById("search-results").classList.add("hidden");
        document.getElementById("itinerary").classList.add("hidden");
        document.getElementById("search-result-title").classList.add("hidden");
        document.getElementById("itinerary-title").classList.add("hidden");
        const myEle = document.getElementById("searching-for");
        if (myEle) {
            document.getElementById("searching-for").classList.add("hidden");
        }

        const myElet = document.getElementById("pagination");
        if (myElet) {
            document.getElementById("searching-for").classList.add("hidden");
        }

        

        const allIten = document.getElementById("all-itineraries");

        apiManager.getItenerary()
            .then(data => {
                let allIteHTML = "";

                for (const prop in data) {
                    allIteHTML += `
                    <section id="itinerary-${data[prop].id}">
                        <div id="park__itin">Park:${data[prop].park}</div>
                        <div id="concert__itin">Concert:${data[prop].concert}</div>
                        <div id="restaurant__itin">Restaurant:${data[prop].restaurant}</div>
                        <div id="arts__itin">Arts: ${data[prop].arts}</div>
                    </section>
                    `
                }
                allIten.innerHTML = allIteHTML;
            });

    },
    untoggleItenreary() {
        document.getElementById("search").classList.remove("hidden");
        document.getElementById("search-results").classList.remove("hidden");
        document.getElementById("itinerary").classList.remove("hidden");
        document.getElementById("search-result-title").classList.remove("hidden");
        document.getElementById("itinerary-title").classList.remove("hidden");

        const myEle = document.getElementById("searching-for");
        if (myEle) {
            document.getElementById("search-header").classList.remove("hidden");
        }

        const myElet = document.getElementById("pagination");
        if (myElet) {
            document.getElementById("pagination").classList.remove("hidden");
        }

        const allIten = document.getElementById("all-itineraries");
        allIten.innerHTML = "";

    }
}