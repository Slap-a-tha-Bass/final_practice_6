import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
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
    let disabledBtn = true;
    if(values.title && values.author && values.price && values.categoryid){
        disabledBtn = false;
    }
    return (
        <RootLayout>
            <h1 className="text-dark text-center bg-secondary border rounded-pill my-2 col-md-4 border-dark">home</h1>
            <form className="form-group border rounded shadow p-2">
                <label className="text-info">title</label>
                <input
                    name="title"
                    value={values.title || ''}
                    onChange={handleChanges}
                    type="text"
                    className="form-control" />
                <label className="text-info">author</label>
                <input
                    name="author"
                    value={values.author || ''}
                    onChange={handleChanges}
                    type="text"
                    className="form-control" />
                <label className="text-info">price</label>
                <input
                    name="price"
                    value={values.price || ''}
                    onChange={handleChanges}
                    type="number"
                    className="form-control" />
                <label className="text-info">genre</label>
                <select name="categoryid" onChange={handleChanges} className="form-select my-2">
                    <option value="0">choose genre</option>
                    {categories.map((values) => (
                        <option value={values.id} key={values.id}>
                            {values.name}
                        </option>
                    ))}
                </select>
                <div className="d-flex justify-content-between">
                    <button onClick={handleSubmit} disabled={disabledBtn}className="btn btn-info border rounded-pill border-dark text-info bg-secondary">submit</button>
                    <Link className="btn btn-info border rounded-pill border-dark text-info bg-secondary" to="/profile">profile</Link>
                </div>
            </form>
        </RootLayout>
    )
}

export default Home;
