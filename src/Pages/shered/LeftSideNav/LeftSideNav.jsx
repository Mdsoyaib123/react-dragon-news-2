import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories,setCategories]= useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="space-y-5">
        
            <h3 className="text-3xl font-bold">All Categories</h3>
            <p className="bg-gray-200 text-center py-4 rounded-md text-2xl font-bold">National news </p>
            {
                categories.map(category=> <Link className="block text-xl ml-4 font-semibold" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;