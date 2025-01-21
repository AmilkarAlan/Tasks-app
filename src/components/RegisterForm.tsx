import React, { useState } from 'react';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar el registro
    };

    return (
        <form onSubmit={handleSubmit} className='form flex flex-col gap-2 bg-purple-800 w-1/3 h-1/2 justify-center items-center'>
            <h1 className='text-2xl'>Registro</h1>
            <label htmlFor="email">Email</label>
            <input name='email' type="email" placeholder="Ejemplo@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Contraseña</label>
            <input name='password' type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input name='confirmPassword' type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button className='w-fit h-fit p-2 bg-slate-500 mt-4' type='submit'>Registrarse</button>
        </form>
    );
};

export default RegisterForm;