import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex mb-5 bg-gray-100 px-3 py-2 rounded-md">
            <button className="btn btn-secondary">Secondary</button>
            <Marquee pauseOnHover={true} speed={100} >
                <Link className="mr-10" to='/'>I can be a React component, multiple React components, or just some text.....</Link>
                <Link className="mr-10" to='/'>I can be a React component, multiple React components, or just some text.....</Link>
                <Link className="mr-10" to='/'>I can be a React component, multiple React components, or just some text.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;