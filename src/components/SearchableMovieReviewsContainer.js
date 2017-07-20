import React from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4b1b556e9a844721b0bf9cf226f1ea84';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleInput(event){
    this.setState({
      searchTerm: event.target.value
    })
    // debugger
  }

  handleSubmit(event){
    event.preventDefault()
    // debugger
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(response => response.json())
    .then(jsonObj => this.setState({reviews: jsonObj.results}))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' onChange={this.handleInput.bind(this)} />
          <button type='submit'>Search</button>
        </form>
        <h1>Search results</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}
