import React, {useEffect} from "react";
import {motion as m} from "framer-motion"

const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        opacity:1,
        y:0,
        transition: {
            ease: [.6, 0.1, -.05, .95],
            duration: 1.6,
        },
    },
    exit: {
        opacity:0,
        y:-200,
        transition: {
            ease: "easeIn",
            duration: 0.8,
        },
    }
}

// return (
//     <div className="loader">
//         <m.div className="loader-inner"
//         variants={container}
//         initial = "hidden"
//         animate = 'show'
//         exit= 'exit'>
//         </m.div>

// </div>
// )
// export const TextBlock = ({id, variants}) => {
//     return (

//     )
// }