
import { useState } from 'react';
import { register } from '../utils/firebaseInterface';
import { useAuth } from '../utils/AuthContext';

type Props = {
    formType: 'login' | 'register'
}

const Forms = (props: Props) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (props.formType === 'register') {
            await register(email, password);
            return

        }
        await login(email, password);
        return
    }
    return (

        <form onSubmit={handleSubmit} className='form flex flex-col gap-2 bg-purple-800 w-1/3 h-1/2 justify-center items-center'>
            <h1 className='text-2xl'>Bienvenido</h1>
            <label htmlFor="email">Email</label>
            <input name='email' type="email" placeholder="Ejemplo@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Contraseña</label>
            <input name='password' type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='w-fit h-fit p-2 bg-slate-500 mt-4' type='submit'>`{props.formType === "login" ? "Acceder" : "Registrarse"}`</button>
            <button className='w-fit h-fit bg-transparent'>Iniciar como visitante</button>
        </form>

    )
}

export default Forms