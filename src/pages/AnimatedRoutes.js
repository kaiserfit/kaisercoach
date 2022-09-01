import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import NewsFeed from "./NewsFeed";
import Coach from "./Coach";
import Shop from "./Shop";
import Programs from "./Programs";
import {AnimatePresence} from "framer-motion/dist/framer-motion"
export default function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/feed" element={<NewsFeed />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/shop" element={<Shop />} />
        
        </Routes>
        </AnimatePresence>
    )
}