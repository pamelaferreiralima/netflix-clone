// Libs
import React, { Component } from 'react'
import axios from 'axios'
import './App.css'


class Netflix extends Component {

  state = {
    movies: [],
    shows: []
  }

  componentDidMount() {
    this.getMovies()
    this.getShows()
  }

  getMovies = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/movies`)
      console.log(response.data)

      this.setState({
        movies: response.data
      })

    } catch (erro) {
      console.log(erro)
    }
  }

  getShows = async () => {
    try {
      const responseShows = await axios.get(`${process.env.REACT_APP_API}/shows`)
      console.log(responseShows.data)

      this.setState({
        shows: responseShows.data
      })

    } catch (erro) {
      console.log(erro)
    }
  };


  render() {
    return (
      <div>
        <header>
          <h1>Pamflix</h1>
          <div className='menu-header'>
            <a className='home' href=''>Início</a>
            <a className='home' href=''>Séries</a>
            <a className='home' href=''>Filmes</a>
            <a className='home' href=''>Minha Lista</a>
            <a className='icon-search' href=''>  <img src='https://img.icons8.com/fluent/48/000000/search-bar.png' /></a>
          </div>
        </header>
        <h2 className='movies'>Filmes</h2>
        <div className='map-1'>
          {this.state.movies.map((item, index) => (
            <div className='movies-map' key={index}>
              <img className='movies-images' src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
              <div className='box-movie'>
                <p className='title-movie'>{item.title}</p>
                <p>Sinopse:  {item.overview}</p>
                <p>Lançamento: {item.release_date}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className='shows'>Séries</h2>
        <div className='map-2'>
          {this.state.shows.map((item, index) => (
            <div className='show-map' key={index}>
              <img className='shows-images' src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
              <div className='box-show'>
                <p className='title-show'>{item.name}</p>
                <p>Sinopse:  {item.overview}</p>
                <p>Lançamento:  {item.first_air_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Netflix;