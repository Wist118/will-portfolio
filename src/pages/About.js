import React from "react";
import Layout from "../components/Layout";

const About = () => {
    return (
        <div>
            <Layout>
                <div className='grid mt-10 px-5 w-full justify-center'>
                    <div className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
                        <div className='flex flex-col justify-center items-center'>
                            <div className='text-4xl flex items-end w-full justify-center md:justify-start md:-mt-5 px-2 pb-5' id="portfolio">About 
                                <span className='yellow text-3xl font-semibold ml-2'>me</span>
                            </div>
                        </div>
                        <div>Coming Soon</div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default About;