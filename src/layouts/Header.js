import React from 'react';
import {Route, Switch} from 'react-router-dom';
import "../styles/Header.css";

import img1 from '../images/52391.jpg';
import img2 from '../images/pexels-bruno-salvadori-2269872.jpg';
import img3 from '../images/girl-4127409_1920.jpg';
import img4 from '../images/pexels-cottonbro-4431055.jpg';
import img5 from '../images/pexels-brett-sayles-2186981.jpg';
import img6 from '../images/pexels-isabela-catão-6748028.jpg';
import img7 from '../images/tattoo-1466407_1920.jpg';
import img8 from '../images/pexels-anete-lusina-4793318.jpg';
import img9 from '../images/pexels-kevin-bidwell-2183131.jpg';
import img10 from '../images/girl-4123270_1920.jpg';
import img11 from '../images/girl-1968474_1920.jpg';
import img12 from '../images/people-2558615_1920.jpg';
import img13 from '../images/pexels-marcelo-dias-2089530.jpg';
import img14 from '../images/pexels-pavel-danilyuk-6667479.jpg';
import img15 from '../images/52395.jpg';





const Header = () =>{
    return(
        <>
        <Switch>
             <Route path="/" exact render={() => (
                 <>
                  <div className="title">
                        <h1>Salon tatuażu</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi libero est iste possimus ratione laudantium aut, sunt laborum aspernatur culpa odio! Ab totam quis dolorum vero alias ut, harum commodi.
                        Sequi aliquam commodi quibusdam deserunt possimus veritatis unde provident vero molestiae, sit tempora sed quae, vitae, itaque necessitatibus repellat dolore libero. Culpa, sed. Totam earum quibusdam maxime voluptatum quae. Quas!
                        Ipsa soluta, quam ea, blanditiis vitae repellat sit adipisci voluptatibus alias architecto veritatis ratione repudiandae perferendis inventore et cumque quisquam nesciunt veniam itaque. Laboriosam officiis molestias animi, est eveniet quibusdam?</p>
                    </div>
                    <img src={img1} alt="" />
                </>
                )} />
                <Route path="/tattoo-artists" render={()=>(
                    <>
                        <div className="tattoo-artists">
                            <div className="img">
                                <img src={img2} alt="" />
                                <h1>Janusz Kowalski</h1>
                            </div>
                            <div className="img">
                                <img src={img3} alt="" />
                                <h1>Monika Nikowska</h1>
                            </div>
                            <div className="img">
                                <img src={img4} alt="" />
                                <h1>Daria Niewiadomska</h1>
                            </div>
                        </div>
                    </>
                )}/>
                <Route path="/gallery" render={()=>(
                    <>
                        <div className="gallery">
                            <img src={img5} alt="" />
                            <img src={img6} alt="" />
                            <img src={img7} alt="" />
                            <img src={img8} alt="" />
                            <img src={img9} alt="" />
                            <img src={img10} alt="" />
                            <img src={img11} alt="" />
                            <img src={img12} alt="" />
                            <img src={img13} alt="" />
                            <img src={img14} alt="" />
                        </div>
                    </>
                )}/>
                <Route path="/media" render={()=>(
                    <>
                    <div className="media">
                        <img src={img15} alt=""/>
                    </div>
                    </>
                )}
                />
        </Switch>
        </>
    )
}
export default Header;