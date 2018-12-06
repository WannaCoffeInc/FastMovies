const basePosterUrl = 'http://image.tmdb.org/t/p/w500'
const baseBackDropUrl = 'http://image.tmdb.org/t/p/original'
const apiKey = 'cbec8305eaf0bd687a14665eb32570ea'
let show = false;

const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`
    return await(await fetch(url)).json()
}

const getMovieInfo = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
    return await(await fetch(url)).json()
}

const appendMovie = (filme) => {
    return ` <div class="tile" style="background: url('${basePosterUrl + filme.poster_path}') center center no-repeat; background-size: 100% 100%; object-fit: contain;">
        <div class="over">
            <span id = "movie_title">
                ${filme.title}
                <a class = "information" data-toggle="collapse" href="#${filme.id}" role="button" data-parent="#resCollapsable">
                    <i class="fas fa-plus-circle fa-3x" style="color: yellow;"></i>
                </a>                                
            </span>                            
        </div>
    </div>
    <div class="triangulo"></div>`
}
const appendCollapse = (filme) => {
    return `
    <div class="card card-body filme_poster" style="background: url('${baseBackDropUrl + filme.backdrop_path}') top no-repeat; background-size: cover; object-fit: contain;">
        <div class="itemSinopse col-md-6">
            <p id="title">${filme.title}</p>
            <p id="info">${filme.genres.map( genre => genre.name).join(' | ')}</p>
            <p id="info_title">Sinopse</p>
            <p id="info_sinop">${filme.overview.substring(0,130) + '...'}</p>
            <img class="icon yt_icon" src="css/yt_icon.png">
            <a class="trailer" href="#">Trailer</a>
            <div class="circle imdb_score">${filme.vote_average}</div>
            <div class="circle PG livre">L</div>
            <img class="icon imdb_icon" src="css/imdb.png">
        </div>
        <div class="itemSessoes col-md-6">
            <ul class="nav nav-tabs" style="border: none;">
                <li class="active"><a data-toggle="tab" href="#home">
                        <p class="hour">Dom</p>
                        <p class="hour">25/11</p>
                    </a></li>
                <li><a data-toggle="tab" href="#menu1">
                        <p class="hour">Seg</p>
                        <p class="hour">26/11</p>
                    </a></li>
                <li><a data-toggle="tab" href="#menu2">
                        <p class="hour">Ter</p>
                        <p class="hour">27/11</p>
                    </a></li>
                <li><a data-toggle="tab" href="#menu3">
                        <p class="hour">Qua</p>
                        <p class="hour">28/11</p>
                    </a></li>
                <li><a data-toggle="tab" href="#menu4">
                        <p class="hour">Qui</p>
                        <p class="hour">29/11</p>
                    </a></li>
                <li><a data-toggle="tab" href="#menu5">
                        <p class="hour">Sex</p>
                        <p class="hour">30/11</p>
                    </a></li>
                <li><a data-toggle="tab" href="#menu6">
                        <p class="hour">Sab</p>
                        <p class="hour">01/12</p>
                    </a></li>
                <li><a data-toggle="tab" href="#menu7">
                        <p class="hour">Dom</p>
                        <p class="hour">02/12</p>
                    </a></li>
            </ul>

            <div class="tab-content horarios">
                <div id="home1" class="tab-pane fade in active">
                    <h3>
                        <font color="#ffffff">Domingo</font>
                    </h3>
                    <p style="margin-top: 15px;"><span class="label dublado">Dublado</span></p>
                    <p style="margin-top:15px;">
                        <font color="#ffffff"><span class="label f3D">3D</span>&emsp;18:40 &emsp; 21:10</font>
                    </p><br>
                    <p style="margin-top:15px;"><span class="label legendado">Legendado</span></p>
                    <p style="margin-top: 15px;">
                        <font color="#ffffff"><span class="label f2D">2D</span>&emsp; 19:50 &emsp; 22:00</font>
                    </p>
                </div>
                <div id="menu1" class="tab-pane fade">
                    <h3>
                        <font color="#ffffff">Segunda</font>
                    </h3>
                    <p style="margin-top: 15px;"><span class="label dublado">Dublado</span></p>
                    <p style="margin-top:15px;">
                        <font color="#ffffff"><span class="label f3D">3D</span>&emsp;18:40 &emsp; 21:10</font>
                    </p><br>
                    <p style="margin-top:15px;"><span class="label legendado">Legendado</span></p>
                    <p style="margin-top: 15px;">
                        <font color="#ffffff"><span class="label f2D">2D</span>&emsp; 19:50 &emsp; 22:00</font>
                    </p>
                </div>
                <div id="menu2" class="tab-pane fade">
                    <h3>
                        <font color="#ffffff">Terça</font>
                    </h3>
                    <p style="margin-top: 15px;"><span class="label dublado">Dublado</span></p>
                    <p style="margin-top:15px;">
                        <font color="#ffffff"><span class="label f3D">3D</span>&emsp;18:40 &emsp; 21:10</font>
                    </p><br>
                    <p style="margin-top:15px;"><span class="label legendado">Legendado</span></p>
                    <p style="margin-top: 15px;">
                        <font color="#ffffff"><span class="label f2D">2D</span> &emsp; 19:50&emsp; 22:00</font>
                    </p>
                </div>
                <div id="menu3" class="tab-pane fade">
                    <h3>
                        <font color="#ffffff">Quarta</font>
                    </h3>
                    <p style="margin-top: 15px;"><span class="label dublado">Dublado</span></p>
                    <p style="margin-top:15px;">
                        <font color="#ffffff"><span class="label f3D">3D</span> &emsp; 13:40 &emsp;16:10 &emsp;
                            18:40</font>
                    </p><br>
                    <p style="margin-top:15px;"><span class="label legendado">Legendado</span></p>
                    <p style="margin-top: 15px;">
                        <font color="#ffffff"><span class="label f2D">2D</span> &emsp; 21:50 &emsp; 22:30</font>
                    </p>
                </div>
                <div id="menu4" class="tab-pane fade">
                    <h3>
                        <font color="#ffffff">Quinta</font>
                    </h3>
                    <p style="margin-top: 15px;"><span class="label dublado">Dublado</span></p>
                    <p style="margin-top:15px;">
                        <font color="#ffffff"><span class="label f3D">3D</span> &emsp; 13:40 &emsp; 16:10
                            &emsp; 18:40</font>
                    </p><br>
                    <p style="margin-top:15px;"><span class="label legendado">Legendado</span></p>
                    <p style="margin-top: 15px;">
                        <font color="#ffffff"><span class="label f2D">2D</span> &emsp; 21:50 &emsp; 22:30</font>
                    </p>
                </div>
                <div id="menu5" class="tab-pane fade">
                    <h3>
                        <font color="#ffffff">Sexta</font>
                    </h3>
                    <p style="margin-top: 15px;"><span class="label dublado">Dublado</span></p>
                    <p style="margin-top:15px;">
                        <font color="#ffffff"><span class="label f3D">3D</span>&emsp;13:40 &emsp; 16:10 &emsp;
                            18:40</font>
                    </p><br>
                    <p style="margin-top:15px;"><span class="label legendado">Legendado</span></p>
                    <p style="margin-top: 15px;">
                        <font color="#ffffff"><span class="label f2D">2D</span> &emsp;21:50 &emsp; 22:30</font>
                    </p>
                </div>
                <div id="menu6" class="tab-pane fade">
                    <h3>
                        <font color="#ffffff">Sábado</font>
                    </h3>
                    <p style="margin-top: 15px;"><span class="label dublado">Dublado</span></p>
                    <p style="margin-top:15px;">
                        <font color="#ffffff"><span class="label f3D">3D</span> &emsp; 13:40 &emsp; 16:10
                            &emsp; 18:40</font>
                    </p><br>
                    <p style="margin-top:15px;"><span class="label legendado">Legendado</span></p>
                    <p style="margin-top: 15px;">
                        <font color="#ffffff"><span class="label f2D">2D</span> &emsp; 21:50 &emsp; 22:30</font>
                    </p>
                </div>
                <div id="menu7" class="tab-pane fade">
                    <h3>
                        <font color="#ffffff">Sábado</font>
                    </h3>
                    <p style="margin-top: 15px;"><span class="label dublado">Dublado</span></p>
                    <p style="margin-top:15px;">
                        <font color="#ffffff"><span class="label f3D">3D</span> &emsp; 13:40 &emsp; 16:10
                            &emsp; 18:40</font>
                    </p><br>
                    <p style="margin-top:15px;"><span class="label legendado">Legendado</span></p>
                    <p style="margin-top: 15px;">
                        <font color="#ffffff"><span class="label f2D">2D</span> &emsp; 21:50 &emsp; 22:30</font>
                    </p>
                </div>
            </div>
        </div>
    </div>`
}

const loadCollapsables = (id,CollapseName) => {
    let movieInfo = getMovieInfo(id).then(data => {
        let div = document.createElement('div')
        div.className = 'collapse multi-collapse'
        div.id = id
        div.dataset.parent = "#resCollapsable"
        div.innerHTML = appendCollapse(data)

        document.querySelector(CollapseName).appendChild(div);   
    })
    
}

const loadMovies = (divName, CollapseName) => {
    let movies = getMovies().then(data => {
        data.results.forEach(filme => {
            let div = document.createElement('div')
            div.className = "item"
            div.innerHTML = appendMovie(filme)
            
            loadCollapsables(filme.id,CollapseName)

            document.querySelector(divName).appendChild(div)    
        })
    })
}


window.addEventListener('load', () => {
    loadMovies('.resCarousel-inner','#resCollapsable')
})