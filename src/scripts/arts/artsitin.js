const artsItin = document.getElementById("arts__itin");
const arts_button = document.getElementById("art__saveBtn");
const arts_searchResults = document.getElementById("search-results");

const artsItinSave = {
    addClickEventListener() {
        arts_button.addEventListener("click", () => {
            // console.log("SAVE CLICKED");
        });

    }
}

const arts_reply_click = (event) => {
    const arts_saveItin = document.getElementById(`arts__${event.target.id.split("__")[2]}`);
    // console.log(arts_saveItin);
    if (arts_saveItin !== null && arts_saveItin !== 'art__undefined') {
        // console.log(arts_saveItin.childNodes);
        const save__arts__itin = "'" + arts_saveItin.childNodes[1].innerText.split(" | ")[0] + "' by artist, " + arts_saveItin.childNodes[1].innerText.split(" | ")[1] + ", on display at " + arts_saveItin.childNodes[3].innerText;
        const display__arts__itin = save__arts__itin;
        // console.log(display__arts__itin);
        artsItin.innerHTML = `<div id="arts__itin">Public Arts Collection: ${display__arts__itin}</div>`
    } else {
        // console.log("OUCH! Please be careful where you click.")
    }
}

arts_searchResults.addEventListener("click", arts_reply_click);