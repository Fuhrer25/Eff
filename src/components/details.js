import React from 'react';

const Details = ({ title, desc, price, img, video }) => {
    return (
        <div className="details">
            <div className="Details container" style={{ height:'auto' }}>
            <div className="toptop">
            <img src={ img } className="courseDetailsImg" />
            <h1 className="page-header detailsTitle"> { title }</h1>
            </div>
                <div className="fullDescription"> <strong style={{"font-size":"2vw"}}>აღწერა</strong> <br/><br/> { desc } </div>
                    {
                        video != null ? (
                    <video width="100%" height="400vh" controls>
                     <source src={video}></source>   
                    </video>) : null
                    }   
                <strong className="extraDetails"><pre style={{"font-size":"2vw"}}>ფასი: </pre>{ price }</strong>
            </div>
        </div>
    );
}

export default Details;