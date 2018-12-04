const filmes = [{
        id: 1,
        titulo: 'O Grinch',
        posterUrl: 'moviePosters/grinch.jpg'
    },
    {
        id: 2,
        titulo: 'O Quebra-Nozes e os Quatro Reinos',
        posterUrl: 'moviePosters/quebraNozes.jpg'
    },
    {
        id: 3,
        titulo: 'Pé Pequeno',
        posterUrl: 'moviePosters/PePequeno.jpg'
    },
    {
        id: 4,
        titulo: 'Bohemian Rhapsody',
        posterUrl: 'moviePosters/d58677de7d7f64d820bfa646a78d95df.jpg'
    },
    {
        id: 5,
        titulo: 'Halloween',
        posterUrl: 'moviePosters/Halloween-2018-Poster-the-halloween-movies-41553252-1294-2048.png'
    },
    {
        id: 6,
        titulo: 'Jhonny English 3',
        posterUrl: 'moviePosters/MV5BMjI4Mj.jpg'
    },
    {
        id: 7,
        titulo: 'Venom',
        posterUrl: 'moviePosters/venompostertransform.jpg'
    },
    {
        id: 8,
        titulo: 'Tudo por um Popstar',
        posterUrl: 'moviePosters/5582578.jpg'
    },
    {
        id: 9,
        titulo: 'O Doutrinador',
        posterUrl: 'moviePosters/MV5BMGU4YjQyMGQtM.jpg'
    },
    {
        id: 10,
        titulo: 'Assim Nasce uma Estrela',
        posterUrl: 'moviePosters/a-star-is-born-portuguese-movie-poster.jpg'
    }
]

window.addEventListener('load', () => {
    filmes.forEach(filme => {

        // append carousel
        let div = document.createElement('div')
        div.className = "item"
        let html = `
            <div class="tile" style="background: url('${filme.posterUrl}') center center no-repeat; background-size: 100% 100%; object-fit: contain;">
                <div class="over">
                    <span id = "movie_title">
                        ${filme.titulo}
                        <a class = "information" data-toggle="collapse" href="#collapseExample${filme.id}" role="button">
                            <i class="fas fa-plus-circle fa-3x" style="color: yellow;"></i>
                        </a>                                
                    </span>                            
                </div>
            </div>
            <div class="triangulo"></div>
        `
        div.innerHTML = html
        document.querySelector('.resCarousel-inner').appendChild(div)
    })
})