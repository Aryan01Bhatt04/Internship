
const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a38889a94emsh9f73095ba437bdep1db200jsne4e92cf29611',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};


// async function getMovies(){
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         const resultList = JSON.parse(result);
        
//     } catch (error) {
//         console.error(error);
//     }
// }



// for (const element of resultList){
//     let GenreList = element['genre'];
//     if (GenreList.includes('Action')){
//         movieList.push(element['title'])
//     }
    
// }


let selectedGenre = document.querySelector("#Genre").addEventListener('change',async function getMovies(e){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const resultList = JSON.parse(result);
        console.log(e.target.value);
    let addMovieList = document.querySelector("#Movie");
    if (addMovieList.hasChildNodes){
        let removeMovie = document.querySelectorAll("#addedMovie");
        for (movie of removeMovie){
            addMovieList.removeChild(movie);
        }
    }
    
    switch(e.target.value){
        case "Action":
            
            for (const element of resultList){
                let addMovie = document.createElement("option");
                addMovie.setAttribute("id","addedMovie");
                let GenreList = element['genre'];
                if (GenreList.includes('Action')){
                    addMovie.innerText = element['title'];
                    addMovieList.appendChild(addMovie);
                }
            }
            break;

        case "Comedy":
            
            for (const element of resultList){
                let addMovie = document.createElement("option");
                addMovie.setAttribute("id","addedMovie");
                let GenreList = element['genre'];
                if (GenreList.includes('Comedy')){
                    addMovie.innerText = element['title'];
                    addMovieList.appendChild(addMovie);
                }
            }
            break;

        case "Thriller":
            
            for (const element of resultList){
                let addMovie = document.createElement("option");
                addMovie.setAttribute("id","addedMovie");
                let GenreList = element['genre'];
                if (GenreList.includes('Thriller')){
                    addMovie.innerText = element['title'];
                    addMovieList.appendChild(addMovie);
                }
            }
            break;

        case "Sci-Fi":
            
            for (const element of resultList){
                let addMovie = document.createElement("option");
                addMovie.setAttribute("id","addedMovie");
                let GenreList = element['genre'];
                if (GenreList.includes('Sci-Fi')){
                    addMovie.innerText = element['title'];
                    addMovieList.appendChild(addMovie);
                }
            }
            break;

        case "Romance":
            
            for (const element of resultList){
                let addMovie = document.createElement("option");
                addMovie.setAttribute("id","addedMovie");
                let GenreList = element['genre'];
                if (GenreList.includes('Romance')){
                    addMovie.innerText = element['title'];
                    addMovieList.appendChild(addMovie);
                }
            }
            break;

        case "Horror":
            
            for (const element of resultList){
                let addMovie = document.createElement("option");
                addMovie.setAttribute("id","addedMovie");
                let GenreList = element['genre'];
                if (GenreList.includes('Horror')){
                    addMovie.innerText = element['title'];
                    addMovieList.appendChild(addMovie);
                }
            }
            break;    

        case "Drama":
            
            for (const element of resultList){
                let addMovie = document.createElement("option");
                addMovie.setAttribute("id","addedMovie");
                let GenreList = element['genre'];
                if (GenreList.includes('Drama')){
                    addMovie.innerText = element['title'];
                    addMovieList.appendChild(addMovie);
                }
            }
            break;

        case "Crime":

            for (const element of resultList){
                let addMovie = document.createElement("option");
                addMovie.setAttribute("id","addedMovie");
                let GenreList = element['genre'];
                if (GenreList.includes('Crime')){
                    addMovie.innerText = element['title'];
                    addMovieList.appendChild(addMovie);
                }
            }
            break;
    }
        
    } catch (error) {
        console.error(error);
    }
});


