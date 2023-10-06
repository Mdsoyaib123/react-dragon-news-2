import { FaGoogle,FaGithub,FaFacebook,FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 border mb-6'>
            <h2 className="text-3xl">Login with </h2>
            <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
             Login with Google
            </button>
            <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
             Login with Github
            </button>
            </div>

            <div className='p-4   mb-6'>
            <h2 className="text-3xl">Find Us On </h2>
            <a className='p-4 border flex  items-center gap-2 text-lg rounded-t-lg' href="">
                <FaFacebook></FaFacebook>
                <span>Facebook </span>
            </a>
            <a className='p-4 border flex  items-center gap-2 text-lg ' href="https://www.facebook.com/">
                <FaFacebook></FaFacebook>
                <span>Facebook </span>
            </a>
            <a className='p-4 border flex  items-center gap-2 text-lg rounded-b-lg' href="">
                <FaTwitter></FaTwitter>
                <span> Twitter</span>
            </a>
            </div>

            <div className='p-4 space-y-3 border mb-6'>
            <h2 className="text-3xl">Q-Zone </h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;