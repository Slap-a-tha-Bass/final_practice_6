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
        <div className="card border shadow rounded m-3">
            <h1 className="card-header text-center">{title}</h1>
            <div className="card-body">
                <h2 className="card-title text-center">{author}</h2>
                <h3 className="card-text text-center">{price}</h3>
            </div>
            <div className="d-flex justify-content-center">
                {isPreview && <Link className="btn btn-outline-info btn-sm mx-3" to={`/books/${id}`}>edit</Link>}
                {isPreview && <button className="btn btn-outline-info btn-sm mx-3" onClick={handleDelete}>delete</button>}
            </div>
        </div>
    )
}

export default BookCard;
