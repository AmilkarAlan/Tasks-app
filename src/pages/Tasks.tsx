import { useAuth } from '../utils/AuthContext'

const Tasks = () => {
  const {user} = useAuth()
  return (
    <section className='w-full h-full'>
      <p>{user?.email}</p>
      <div className='w-full flex items-center justify-center gap-2'>
        <div>
          <form action="" className='flex flex-col gap-2'>
            <input type="text" placeholder="Tarea" />
            <button type="submit">Agregar</button>
          </form>
        </div>
        <div className='w-full'>
          <ul>
            <li>
              <p>Tarea agregada.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Tasks