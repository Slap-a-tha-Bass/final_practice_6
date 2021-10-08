import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Books } from '../../../types';
import { apiService } from '../utils/api-service';

const BookCard = ({ title, author, price, id, categoryid, isPreview }: Books) => {
    const history = useHistory();
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        apiService(`/api/books/${id}`, 'DELETE', { title, author, price, categoryid })
            .then(data => {
                history.push('/books')
            })
    }
    return (
        <div className="card bg-secondary border shadow rounded-pill m-3">
            <h1 className="card-title text-center text-info my-2">{title}</h1>
            <div className="card-body">
                <h2 className="card-title text-center text-info">{author}</h2>
                <h3 className="card-text text-center text-info">{price}</h3>
            </div>
            <div className="d-flex justify-content-center">
                {isPreview && <Link className="btn btn-outline-info btn-sm mx-3 border rounded-pill" to={`/edit/${id}`}>edit</Link>}
                {isPreview && <button className="btn btn-outline-info btn-sm mx-3 border rounded-pill" onClick={handleDelete}>delete</button>}
            </div>
        </div>
    )
}

export default BookCard;
