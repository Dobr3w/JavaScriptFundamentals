function movies(array) {

    let movies = [];

    for (let command of array) {
        if (command.includes("addMovie")) {

            let movieName = command.split("addMovie ")[1];
            let movieObj = { name: movieName };

            movies.push(movieObj);

        } else if (command.includes("directedBy")) {

            let movieName = command.split(" directedBy ")[0];
            let movieDirector = command.split(" directedBy ")[1];
            let movieObj = { director: movieDirector };

            let movie = movies.find(movie => movie.name == movieName);

            if (movie) {
                movie.director = movieDirector;
            }

        } else if (command.includes("onDate")) {

            let movieName = command.split(" onDate ")[0];
            let movieDate = command.split(" onDate ")[1];

            let movie = movies.find(movie => movie.name == movieName);

            if (movie) {
                movie.date = movieDate;
            }
        }
    }

    for (let movie of movies) {

        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
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

movies([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo'
]);