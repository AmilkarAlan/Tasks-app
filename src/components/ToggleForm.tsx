import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const ToggleForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="flex">
            <div className={`transition-transform duration-500 ${isLogin ? 'w-1/2' : 'translate-x-full w-1/2'}`}>
                {isLogin ? <LoginForm /> : <RegisterForm />}
            </div>
            <div className={`flex items-center justify-center w-1/2 bg-purple-800 text-white transition-transform duration-500 ${isLogin ? 'translate-x-0' : '-translate-x-full'}`} onClick={toggleForm}>
                <p>{isLogin ? '¿No tienes cuenta? Haz clic aquí para registrarte.' : '¿Ya tienes cuenta? Haz clic aquí para iniciar sesión.'}</p>
            </div>
        </div>
    );
};

export default ToggleForm;