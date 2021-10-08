import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Categories } from '../../../types';
import RootLayout from '../components/RootLayout';
import { useForm } from '../hooks/useForm';
import { apiService } from '../utils/api-service';
const Home = () => {
    const history = useHistory();
    const { values, handleChanges } = useForm();
    const [categories, setCategories] = useState<Categories[]>([]);
    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data));
    }, []);
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/api/books', 'POST', { title: values.title, author: values.author, price: values.price, categoryid: values.categoryid })
            .then(data => {
                history.push('/books')
            })
    }
    return (
        <RootLayout>
            <h1 className="text-info">home</h1>
            <form className="form-group">
                <label htmlFor="">title</label>
                <input 
                name="title"
                value={values.title}
                onChange={handleChanges}
                type="text" 
                className="form-control" />
                <label htmlFor="">author</label>
                <input 
                name="author"
                value={values.author}
                onChange={handleChanges}
                type="text" 
                className="form-control" />
                <label htmlFor="">price</label>
                <input 
                name="price"
                value={values.price}
                onChange={handleChanges}
                type="text" 
                className="form-control" />
                <select name="categoryid" onChange={handleChanges} className="form-select my-2">
                    <option value="0">choose genre</option>
                    {categories.map((values) => (
                        <option value={values.id} key={values.id}>
                            {values.name}
                        </option>
                    ))}
                </select>
                <button onClick={handleSubmit} className="btn btn-info">Submit</button>
            </form>
        </RootLayout>
    )
}

export default Home;
