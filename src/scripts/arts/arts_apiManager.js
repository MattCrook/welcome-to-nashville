const arts_apiBaseUrl = "https://data.nashville.gov/resource/eviu-nxp6.json";

const arts_apiManager = {
    searchArts(searchCriteria) {
        // console.log(searchCriteria);
        const url = arts_apiBaseUrl + `?location=${searchCriteria}`;
        return fetch(url).then(resp => resp.json());
    }
};

const arts_api_locations_Manager = {
    searchArts() {
        // console.log(searchCriteria);
        const url = arts_apiBaseUrl;
        return fetch(url).then(resp => resp.json());
    }
};