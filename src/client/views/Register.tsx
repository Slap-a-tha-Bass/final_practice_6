import React from 'react';
import { useHistory } from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import { useForm } from '../hooks/useForm';
import { apiService } from '../utils/api-service';
const Register = () => {
    const history = useHistory();
    const { values, handleChanges } = useForm();
    const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/register', 'POST', { name: values.name, email: values.email, password: values.password, role: 'guest' })
            .then(token => {
                localStorage.setItem('token', token.token);
                history.push('/profile');
            })
    }
    let disabledBtn = true;
    if (values.email && values.password && values.name) {
        disabledBtn = false;
    }
    return (
        <RootLayout>
            <h1 className="text-dark text-center bg-secondary border rounded-pill my-2 col-md-4 border-dark">register</h1>
            <form className="form-group border rounded shadow p-2">
                <label className="text-info">name</label>
                <input
                    name="name"
                    value={values.name || ''}
                    onChange={handleChanges}
                    type="text"
                    className="form-control" />
                <label className="text-info">email</label>
                <input
                    name="email"
                    value={values.email || ''}
                    onChange={handleChanges}
                    type="email"
                    className="form-control" />
                <label className="text-info">password</label>
                <input
                    name="password"
                    value={values.password || ''}
                    onChange={handleChanges}
                    type="password"
                    className="form-control" />
                <button onClick={handleRegister} disabled={disabledBtn} className="btn btn-info border rounded-pill border-dark text-info bg-secondary mt-2">register</button>
            </form>
        </RootLayout>
    )
}

export default Register;
