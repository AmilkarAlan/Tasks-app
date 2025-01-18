import React from 'react'

const Landing = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <form action="" className='form flex flex-col gap-2 bg-purple-800 w-1/3 h-1/2 justify-center items-center'>
                <h1 className='text-2xl'>Bienvenido</h1>
                <label htmlFor="email">Email</label>
                <input name='email' type="email" placeholder="Ejemplo@mail.com" />
                <label htmlFor="password">Contraseña</label>
                <input name='password' type="password" placeholder="Contraseña" />
                <button className='w-fit h-fit p-2 bg-slate-500 mt-4'>Acceder</button>
                <button className='w-fit h-fit bg-transparent' type='submit'>Iniciar como visitante</button>
            </form>
        </div>
    )
}

export default Landing