import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Books } from '../../../types';
import BookCard from '../components/BookCard';
import RootLayout from '../components/RootLayout';
import { apiService } from '../utils/api-service';

const Books = () => {
    const [books, setBooks] = useState<Books[]>([]);
    useEffect(() => {
        apiService('/api/books')
            .then(data => setBooks(data))
    }, []);
    return (
        <RootLayout>
            <h1 className="text-dark text-center bg-secondary border rounded-pill my-2 col-md-4 border-dark">books</h1>
            {books.map((book) => (
                <Link className="text-decoration-none" key={book.id} to={`/books/${book.id}`}><BookCard {...book} /></Link>
            ))}
        </RootLayout>
    )
}

export default Books;
