import React, { useState } from 'react';
import { useAuth } from '../utils/AuthContext';
import {  useNavigate } from 'react-router-dom';

const LoginForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(email, password);
        navigate('/tasks');
        return
    };

    return (
        <form onSubmit={handleSubmit} className='form flex flex-col gap-2'>
            <h1 className='text-2xl'>Iniciar Sesión</h1>
            <label htmlFor="email">Email</label>
            <input name='email' type="email" placeholder="Ejemplo@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Contraseña</label>
            <input name='password' type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='w-fit h-fit p-2 bg-slate-500 mt-4' type='submit'>Acceder</button>
        </form>
    );
};

export default LoginForm;