function books(arr) {
    let favGenres = arr.shift().split(' | ');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Stop!') break;

        let tokens = arr[i].split(' ');
        let action = tokens[0];

        if (action === 'Join') {
            let newGenre = tokens[1];
            if (!favGenres.includes(newGenre)) {
                favGenres.push(newGenre);
            }
        } else if (action === 'Drop') {
            let genreToRemove = tokens[1];
            favGenres = favGenres.filter(genre => genre !== genreToRemove);
        } else if (action === 'Replace') {
            let oldGenre = tokens[1];
            let newGenre = tokens[2];
            if (favGenres.includes(oldGenre) && !favGenres.includes(newGenre)) {
                favGenres = favGenres.map(genre => (genre === oldGenre ? newGenre : genre));
            }
        } else if (action === 'Prefer') {
            let index1 = parseInt(tokens[1]);
            let index2 = parseInt(tokens[2]);
            if (index1 >= 0 && index1 < favGenres.length && index2 >= 0 && index2 < favGenres.length) {
                [favGenres[index1], favGenres[index2]] = [favGenres[index2], favGenres[index1]];
            }
        }
    }

    console.log(favGenres.join(' '));
}

books([
    "Romance | Fiction | Horror | Mystery",
    "Drop Romance",
    "Join Fantasy",
    "Prefer 1 2",
    "Stop!"
]);

books(["Poetry | Romance",
    "Drop Children",
    "Replace Fantasy Crime",
    "Stop!"]);

books(["Thriller | Young | Crime",
    "Join Political",
    "Replace Young Fairytale",
    "Prefer 6 2",
    "Stop!"]);