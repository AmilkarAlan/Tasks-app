import Forms from '../components/Forms';
import ToggleForm from '../components/ToggleForm';
import { auth } from '../firebaseConfig';

const Landing = () => {

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <ToggleForm />
            {/* <button onClick={()=>console.log(auth.currentUser)}>Click</button> */}
        </div>
    )
}

export default Landing