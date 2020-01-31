const validateData = {
    validateGenre(input, genreObj) {
        for (prop in genreObj){
            if (input == genreObj[prop].name) {
                return true;
            }
        }
    },
    isEmpty(input){
        let isEmpty = true;
        if(/\S/.test(input)){
            isEmpty = false;
        }
        return isEmpty;
    }
};