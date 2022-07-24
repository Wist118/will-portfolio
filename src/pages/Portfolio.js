import React from "react";
import Layout from "../components/Layout";
import HelloWorld from '../assets/helloworld-img.png';

const Portfolio = () => {
    return (
        <div>
            <Layout>
                <div className='grid mt-10 px-5 w-full justify-center'>
                    <div className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-4xl flex items-end w-full justify-center md:justify-start md:-mt-5 ml-8 px-2 pb-5' id="portfolio">Portfolio 
                            <span className='yellow text-3xl font-semibold ml-2'>and technologies</span>
                        </div>
                    

                        {/* Container for project begin*/}
                        <div className='grid grid-cols-6 mx-2 px-2'>

                            <ul className='cursor-default list-disc list-inside col-span-2 text-sm leading-4 sm:text-base lg:text-lg pl-2 pt-5' id="portfolio-list">
                                <li>React</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Apollo Server</li>
                                <li>React</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Apollo Server</li>
                            </ul>
                        
                            <div className='col-span-4 relative pt-5'>
                                <img src={HelloWorld} alt='hello world homepage'></img>
                                <button className='absolute h-8 w-36 md:h-10 md:w-40 lg:h-12 lg:w-44 bottom-0 right-0 text-xl md:text-3xl'>
                                    <a href='https://ut-hello-world.herokuapp.com/' target="_blank" rel="noreferrer noopener">HelloWorld</a>
                                </button>
                            </div>
                       
                            {/* Container for project end*/}

                        </div>
                    </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Portfolio;