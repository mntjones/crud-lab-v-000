import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ reviews: state.reviews })

const mapDispatchToProps = dispatch => {
  return {
    addReview: reviewText => dispatch({type: "ADD_REVIEW", text: reviewText}),
    deleteReview: reviewId => dispatch({type: "DELETE_REVIEW", id: reviewId})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
