/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NewsCard = ({singleNews}) => {
    const {title,image_url,details}=singleNews;
    
    return (
        <div className="card w-full mb-5 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <img src={image_url} alt="" />
                <p>
                    {
                    details.length > 200
                    ? <p>{details.slice(0,200)}<Link to={`/news/${singleNews._id}`} className="text-red-400">Read more</Link></p>
                    :
                    <p>{details}</p>
                    }
                </p>
                
            </div>
        </div>
    );
};

export default NewsCard;