import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    const movieurl="http://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href=movieurl
  }
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <img src={this.props.movie.poster} width="100" alt="" />
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <input type="button" value="view" onClick={this.viewMovie.bind(this)} />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
export default MovieRow;
