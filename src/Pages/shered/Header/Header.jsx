import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-8'>
            <img className='mx-auto mb-4' src={logo} alt="" />
            <p  className='text-lg pb-3'>Journalism Without Fear or Favour</p>
            <p className='mb-5'>{moment().format("dddd, MMMM D , YYYY ")}</p>
        </div>
    );
};

export default Header;
