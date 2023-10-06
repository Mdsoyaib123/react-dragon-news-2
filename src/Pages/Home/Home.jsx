
import { useLoaderData } from 'react-router-dom';
import Header from '../shered/Header/Header';
import LeftSideNav from '../shered/LeftSideNav/LeftSideNav';
import Navbar from '../shered/Navbar/Navbar';
import RightSideNav from '../shered/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import NewsCard from './NewsCard';
const Home = () => {
    const news = useLoaderData()
  
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid  grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='lg:col-span-2'>
                    {
                        news.map((singleNews,index) =><NewsCard key={index} singleNews={singleNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;