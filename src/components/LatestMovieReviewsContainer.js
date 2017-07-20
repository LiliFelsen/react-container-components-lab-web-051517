import React from 'react'
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch'

const NYT_API_KEY = '4b1b556e9a844721b0bf9cf226f1ea84'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      reviews: []
    }
  }


  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then(jsonObj => this.setState({reviews: jsonObj.results}))
  }

  render(){
    return(
      <div className="latest-movie-reviews">
      <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}
