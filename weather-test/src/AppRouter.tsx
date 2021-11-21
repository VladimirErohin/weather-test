import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/components/Home";
import DaysStatistics from "./pages/daysStatistics/components/days-statics/DaysStatistics";

const AppRouter = () => {

    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/days-statistics"} element={<DaysStatistics/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;