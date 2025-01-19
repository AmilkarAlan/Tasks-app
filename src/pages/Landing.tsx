import Forms from '../components/Forms';
import { auth } from '../firebaseConfig';

const Landing = () => {

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Forms formType='login' />
            {/* <button onClick={()=>console.log(auth.currentUser)}>Click</button> */}
        </div>
    )
}

export default Landing