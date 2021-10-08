import React, { useEffect, useState } from 'react';
import { Categories } from '../../../types';
import RootLayout from '../components/RootLayout';
import { useForm } from '../hooks/useForm';
import { apiService } from '../utils/api-service';
const Home = () => {

    const { values, handleChanges } = useForm();
    const [categories, setCategories] = useState<Categories[]>([]);
    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data));
    }, [])
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
                <select name="categoryid" onChange={handleChanges}>
                    <option value="0">choose genre</option>
                    {categories.map((values) => (
                        <option value={values.id} key={values.id}>
                            {values.name}
                        </option>
                    ))}
                </select>
                <button onClick={}className="btn-info">Submit</button>
            </form>
        </RootLayout>
    )
}

export default Home;
