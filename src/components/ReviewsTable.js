import React, {Component} from 'react';
import sematable, {Table} from 'sematable';
import Date from './Date.js';
import Comment from "./Comment";
import TravelWith from "./TravelWith";
import Average from "./Average";

export const REVIEWS_TABLE = 'reviewsTable';
const columns = [
    {
        primaryKey: true,
        key: 'entryDate',
        header: 'DATE OF REVIEW',
        Component: Date,
        searchable: true,
        sortable: true
    },
    {
        key: 'travelDate',
        header: 'TRAVEL DATE',
        Component: Date,
        sortable: true,
        title: 'Travel Date',
    },
    {
        key: 'texts.nl',
        header: 'REVIEW',
        Component: Comment,
    },
    {
        key: 'traveledWith',
        header: 'TRAVELED WITH',
        filterable: true,
        searchable: true,
        Component: TravelWith,
        filterValues: [
            'FAMILY',
            'FRIENDS',
            'COUPLE',
            'SINGLE',
            'OTHER',
        ],
    },
    {
        key: 'ratings.eachRatingAspectAverage',
        header: 'ASPECT AVERAGE',
        Component: Average,
    },
];

class ReviewsTable extends Component {
    render () {
        return (
            <div>
                <Table className='striped' {...this.props} columns={columns}/>
            </div>)
    }
}

export default sematable(REVIEWS_TABLE, ReviewsTable, columns);
