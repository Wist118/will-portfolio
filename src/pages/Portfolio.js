import React from "react";
import Layout from "../components/Layout";
import HelloWorld from '../assets/helloworld-img.png';

const Portfolio = () => {
    return (
        <div>
            <Layout>
                <div className='grid mt-10 mx-5'>
                    <div className=''>
                        <div className='text-left text-4xl'>Portfolio <span className='yellow text-3xl font-semibold'>& Technologies</span></div>
                    </div>

                    {/* Container for project begin*/}
                    <div className='lg:grid lg:grid-cols-2 gap-4'>
                        <div>
                            <div className='relative mt-8'>
                                <img src={HelloWorld} alt='hello world homepage'></img>
                                <button className='absolute h-10 w-52 bottom-0 rounded-t-md text-2xl text-center pl-2 md:text-3xl'>
                                    <a href='https://ut-hello-world.herokuapp.com/'>HelloWorld</a>
                                </button>
                            </div>
                            <div className='mt-1 text-lg font-semibold underline md:text-xl'>Project built with:</div>
                            <ul className='grid grid-cols-2 text-base leading-5 font-semibold'>
                                <li>React</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Apollo Server</li>
                                <li>React</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Apollo Server</li>
                            </ul>
                        </div>
                        {/* Container for project end*/}


                        {/* Container for project begin*/}
                        <div>
                            <div className='relative mt-8'>
                                <img src={HelloWorld} alt='hello world homepage'></img>
                                <button className='absolute h-10 w-52 bottom-0 rounded-t-md text-2xl text-center pl-2 md:text-3xl'>
                                    <a href='https://ut-hello-world.herokuapp.com/'>HelloWorld</a>
                                </button>
                            </div>
                            <div className='mt-1 text-lg font-semibold underline md:text-xl'>Project built with:</div>
                            <ul className='grid grid-cols-2 text-base leading-5 font-semibold'>
                                <li>React</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Apollo Server</li>
                                <li>React</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Apollo Server</li>
                            </ul>
                        </div>
                        {/* Container for project end*/}

                    </div>
                    
                </div>
            </Layout>
        </div>
    );
}

export default Portfolio;