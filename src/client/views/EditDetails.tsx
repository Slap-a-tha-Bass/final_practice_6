import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Categories } from '../../../types';
import RootLayout from '../components/RootLayout';
import { useForm } from '../hooks/useForm';
import { apiService } from '../utils/api-service';

const EditDetails = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const { values, handleChanges, populate } = useForm();
    const [categories, setCategories] = useState<Categories[]>([]);
    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data));
    }, []);
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService(`/api/books/${id}`, 'PUT', { title: values.title, author: values.author, price: values.price, categoryid: values.categoryid })
            .then(data => {
                history.push('/books')
            })
    }
    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(confirm('Are you sure you want to cancel edit?')){
            history.push(`/books/${id}`);
        }
    }
    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(values => populate(values))
    }, []);
    let disabledBtn = true;
    if(values.title && values.author && values.price && values.categoryid){
        disabledBtn = false;
    }
    return (
        <RootLayout>
            <h1 className="text-dark text-center bg-secondary border rounded-pill my-2 col-md-4 border-dark">edit</h1>
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
                    type="text"
                    className="form-control" />
                <label className="text-info">genre</label>
                <select value={values.categoryid} name="categoryid" onChange={handleChanges} className="form-select my-2">
                    <option value="0">choose genre</option>
                    {categories.map((values) => (
                        <option value={values.id} key={values.id}>
                            {values.name}
                        </option>
                    ))}
                </select>
                <div className="d-flex justify-content-between">
                    <button onClick={handleSubmit} disabled={disabledBtn} className="btn btn-info text-info border-dark rounded-pill bg-secondary">submit</button>
                    <button onClick={handleCancel} className="btn btn-info text-warning border-dark rounded-pill bg-secondary">cancel</button>
                    <Link className="btn btn-info border rounded-pill text-success bg-secondary border-dark" to="/profile">profile</Link>
                </div>
            </form>
        </RootLayout>
    )
}

export default EditDetails;
