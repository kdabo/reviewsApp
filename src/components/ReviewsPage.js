import React, {Component} from 'react';
import {Loader} from '.';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import ReviewsTable from './ReviewsTable';
import Average from './Average';

class _ReviewsPage extends Component {

    componentDidMount () {
        this.props.dispatch(Actions.fetchReviews());
    }

    render () {
        if (this.props.loading || !this.props.reviews) {
            return <div className="center-align"><Loader/></div>
        }
        const reviews = this.props.reviews || {};
        return (
            <div>
                <span> <b> General Rating: </b> <Average children={reviews.generalRatingAverage || 0}/> </span>
                <br/>
                <span> <b> Travel With Average: </b> </span>
                <br/>
                <span>{ reviews.traveledWithAverage &&  Object.keys(reviews.traveledWithAverage).map(function (key) {
                    return <span key={key}> {key} - {reviews.traveledWithAverage[key]} <br/></span>
                })}
                </span>
                <ReviewsTable
                    data={reviews.reviews || []}
                    filterValue={[]}
                />
            </div>
        );
    }
}

function mapFromStoreToProps (store) {
    return {
        reviews: store.reviews,
        loading: store.loading === 'HTTP_LOADING',
    };
}

export const ReviewsPage = connect(mapFromStoreToProps)(_ReviewsPage);
