import React, { useContext } from 'react';
import { CourseContext } from './data';
import Details from './components/details';

const Linking = () => {
        const [courses, setCourses] = useContext(CourseContext)
        const url = window.location.href;
        const lastChar = (url[url.length - 1] - 1)
        const GetTitle = c => c[lastChar] == undefined ? null : (c[lastChar]).title;
        const GetImg = c => c[lastChar] == undefined ? null : (c[lastChar]).image;
        const GetDescription = c => c[lastChar] == undefined ? null : (c[lastChar]).description;
        const GetPrice = c => c[lastChar] == undefined ? null : (c[lastChar]).price;
        const GetDesc = c => c[lastChar] == undefined ? null : (c[lastChar]).desc;
        const GetVideo = c => c[lastChar] == undefined ? null : (c[lastChar]).video;

        return (
            <Details 
            title={ GetTitle(courses) } 
            description={ GetDescription(courses) }
            price={ GetPrice(courses) }
            img={ GetImg(courses) }
            desc={ GetDesc(courses) }
            video={ GetVideo(courses) }
            />
        ) 
}
export default Linking;