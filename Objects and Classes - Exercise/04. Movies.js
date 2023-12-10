function movies(arr) {
    let movies = [];

    for (let currLine of arr) {

        if (currLine.includes('addMovie')) {
            let movieName = currLine.split('addMovie ')[1];
            let movieObj = {
                name: movieName,
            }
            movies.push(movieObj);
        } else if (currLine.includes('directedBy')) {
            let [movieName, directorName] = currLine.split(' directedBy ');
            let movie = movies.find(movie => movie.name == movieName);

            if (movie) {
                movie.director = directorName;
            }

        } else if (currLine.includes('onDate')) {
            let [movieName, movieDate] = currLine.split(' onDate ');
            let movie = movies.find(movie => movie.name == movieName);

            if (movie) {
                movie.date = movieDate;
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            let json = JSON.stringify(movie);
            console.log(json);
        }
    }

}


movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);