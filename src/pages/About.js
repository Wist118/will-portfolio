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
                        <div>Full stack web developer with a passion for front-end development to build a more intuitive user experience. 
                            Earned my certificate in full-stack development from the University of Texas at Austin. Proficiencies include MERN stack, HTML, CSS, JavaScript, SQL, API’s, and responsive web design. 
                            Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. 
                            With each project, my aim is to best engage my audience for an impactful user experience. 
                            For my most recent project I applied aspects of front end, back end, and agile development. 
                            I worked on a team of six to develop a single-page MERN app that helps developers make connections, collaborate, and post open-source projects for collaboration. 
                            I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default About;