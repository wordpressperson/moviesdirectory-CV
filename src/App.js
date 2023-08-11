import React, { Component } from 'react';
import logo from './assets/olsen2.png';
import './App.css';
import $ from 'jquery'
import MovieRow from './components/MovieRow';


class App extends Component {
  constructor(props) {
    super(props)

    // const movies=[
    //   {
    //     id:0,
    //     title:"Royal Hibiscus Hotel",
    //     overview: "romantic drama film starring Ini Dima and Zainab Balogun",
    //     poster: "./assets/wikimediaib.png"
    //   },
    //
    //   {
    //     id:1,
    //     title:"State of Emergency",
    //     overview: "action drama film starring Saint Obi",
    //     poster: "./assets/wikimediaib.png"
    //   },
    //
    //   {
    //     id:2,
    //     title:"Sylvia",
    //     overview: "supernatural film featuring OC Ukeje",
    //     poster: "./assets/wikimediaib.png"
    //   }
    // ]

    this.state={
      moviesRow:[]
    }

    //this.performSearch("home alone")

    /* movies.forEach((movie) => {
       const movieRow= <MovieRow movie={movie}/>
       moviesRow.push(movieRow)
       //moviesRow.push(<p>Movie Title: {movie.title}</p>); also valid
     })
     this.state={moviesRow}
     */

     this.handleChange = this.handleChange.bind(this);
     //this.performSearch = this.performSearch.bind(this);

  }

  performSearch(searchTerm) {
    //const urlstring="https://api.themoviedb.org/3/search/movie?api_key=32c1b40476e790c09dd7a69d408bed32&query=avengers"
    const urlstring="https://api.themoviedb.org/3/search/movie?api_key=32c1b40476e790c09dd7a69d408bed32&query="+searchTerm
    $.ajax({
          url: urlstring,
          success: (searchResults) => {
            console.log("Fetch successful")
            const results=searchResults.results
            var moviesRow=[]
            results.forEach((movie) => {
              movie.poster="http://image.tmdb.org/t/p/w185"+movie.poster_path
              console.log(movie.title)
              const movies=<MovieRow key={movie.id} movie={movie}/>
              moviesRow.push(movies)

            })

            this.setState({moviesRow:moviesRow})
          },
          error:(xhr, status, err) => {
            console.error("fetch failed")
          }
    })
  }

  handleChange(e) {
    const searchTerm=e.target.value
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table style={{
            backgroundColor: 'grey',
            display: 'block'
          }}>
          <tbody>
            <tr>
              <td><img src={logo} alt="wikimediaib" width="10%" height="8%"></img></td>
              <td><h1>Movie-DB Search App</h1></td>
            </tr>
          </tbody>
        </table>

        <input style={{
            display: 'block',
            fontSize: 25,
            width: '100%',
            paddingTop: '20px',
            paddingLeft: '7px',
            paddingBottom: '20px'
          }}
          type="text"
          placeholder="enter a movie you want to search"
          onChange={this.handleChange}
          >
        </input>

        {this.state.moviesRow}

      </div>
    );
  }
}

export default App;
