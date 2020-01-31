const parksItin = document.getElementById("park__itin");
const park_save_button = document.getElementById("park__saveBtn");
const parks_searchResults = document.getElementById("search-results");

const parksItinSave = {
    addClickEventListener() {
        park_save_button.addEventListener("click", () => {
            // console.log("SAVE CLICKED");
        });

    }
}

const parks_reply_click = (event) => {
    // console.log(event.target.id);
    const saveItin = document.getElementById(`park__${event.target.id.split("__")[2]}`);
    if (saveItin !== null) {
        const save__parks__itin = saveItin.childNodes[1];
        const display__parks__itin = save__parks__itin.innerText;
        // console.log(display__parks__itin);
        parksItin.innerHTML = `<div id="park__itin">Park: ${display__parks__itin}</div>`
    } else {
        // console.log("OUCH! Please be careful where you click.")
    }
}

parks_searchResults.addEventListener("click", parks_reply_click);
