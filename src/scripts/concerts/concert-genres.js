const getGenreInformation = {
    getGenreId(genre, genresObj) {
        const searchText = genre;
        let genreId;
        genresObj.forEach(element => {
            if (element.name == searchText) {
                genreId = element.id;
            }
        });
        return genreId;
    },
    getGenreList() {
        APIManager.fetchGenreList()
            .then(data => {
                let genreObj = [];
                data._embedded.genres.forEach(element => {
                    genreObj.push({
                        name: element.name,
                        id: element.id
                    });
                });
                makeOptions.makeConcertOptions(genreObj);
            });

    }
};

