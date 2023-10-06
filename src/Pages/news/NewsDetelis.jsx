import { useParams } from "react-router-dom";
import Header from "../shered/Header/Header";

import RightSideNav from "../shered/RightSideNav/RightSideNav";
import Navbar from "../shered/Navbar/Navbar";

const NewsDetelis = () => {
    const id  = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-3">
                <div className="col-span-3">
                    <h2 className="text-3xl">news detelis</h2>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetelis;