import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Users } from '../../../types';
import RootLayout from '../components/RootLayout';
import { apiService } from '../utils/api-service';

const Profile = () => {
    const history = useHistory();
    const [users, setUsers] = useState<Users['id']>();
    useEffect(() => {
        apiService('/api/users')
            .then(data => setUsers(data));
    }, []);
    const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        localStorage.clear();
        history.push('/login')
    }
    return (
        <RootLayout>
            <div className="card">
                <h1 className="card-header text-info text-center">{users}</h1>
                <div className="card-body">
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-info mx-2" to="/">home</Link>
                        <button onClick={handleSignOut} className="btn btn-info mx-2">sign out</button>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}

export default Profile;
