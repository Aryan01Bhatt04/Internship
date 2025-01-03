const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a38889a94emsh9f73095ba437bdep1db200jsne4e92cf29611',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

let movieList = [];

async function getMovies(){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const resultList = JSON.parse(result);
        // for (const element of resultList){
        //     let GenreList = element['genre'];
        //     if (GenreList.includes('Action')){
        //         console.log(element['title']);
        //     }
            
        // }
        console.log(resultList);
        } catch (error) {
            console.error(error);
        }
}

getMovies();