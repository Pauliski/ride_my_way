import Moment from 'react-moment';

const COLUMNS = [
    {
        Header: 'Offer ID',
        accessor: 'offerId',
    },
    {
        Header: 'Driver ID',
        accessor: 'driverId',
    },
    {
        Header: 'Location',
        accessor: 'location',
    },
    {
        Header: 'Destination',
        accessor: 'destination',
    },
    {
        Header: 'Amount',
        accessor: 'amount',
    },
    {
        Header: 'Date',
        accessor: d => <Moment format="dddd, MMMM Do YYYY">{d.createdAt}</Moment>,
    }
]
export default COLUMNS