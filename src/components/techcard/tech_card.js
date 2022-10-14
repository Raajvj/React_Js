import React from 'react';
import './tech_card.css';
import 'bootstrap/dist/css/bootstrap.css';
import datasci_img from './ds1.png';
import notdev_img from './nd.png';
import vr_img from './vr.webp';
import ml_img from './ml.jpg';
import { Menu } from '../menu/menu';

export function Techcard(){
    return(
        <div>
            <Menu/>
            <div className='bg-danger text-center '>
                            <h1 className='text-primary'>Learn 4.0 Technologies</h1>
                                <p>Learn more about NRW, it's business opportunities and convincing location factors. Invest in NRW where a strong industry is combined with ground breaking technology. View News. See Calendar. Meet The Team.
                                </p>
                    <div className='row col-lg-12 mt-5 ml-1'>
                    
                            <div className='card bg-primary text-white col-lg-3'>
                                    <div className='card-body'>
                                        <h3>Data Scientist</h3>
                                        <p className='col-lg-12'>Become a Data Scientist or Business Analyst. No technical background required. No technical background required.</p>
                                        <img className='' src={datasci_img}/>
                                    </div>
                            </div>
                            <div className='card bg-secondary text-white col-lg-3'>
                                <div className='card-body'>
                                    <h3>Not Developer</h3>
                                    <p className='col-lg-12 '>The number of times in my career I have been asked a variation on "why doesn't my application work" is shocking. </p>
                                    <img className=' ' src={notdev_img}/>
                                </div>
                            </div>
                            <div className='card bg-info text-white col-lg-3'>
                                <div className='card-body'>
                                    <h3>VR Developer</h3>
                                    <p className='col-lg-12'>A VR developer creates whole new digital settings that users can see through a device like the Oculus headset.</p>
                                    <img className=' ' src={vr_img}/>
                                </div>
                            </div>
                            <div className='card bg-success text-white col-lg-3'>
                                <div className='card-body'>
                                    <h3>ML Engineer</h3>
                                    <p className='col-lg-12'>A machine learning engineer (ML engineer) is a person in IT who focuses on researching, building and designing .</p>
                                    <img className='' src={ml_img}/>
                                </div>
                            </div>


                    </div>
                </div>
            </div>
    );
}