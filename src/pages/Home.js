import React from "react";
import Layout from "../components/Layout";

const Home = () => {
    return (
        <div>
        <Layout>
            <div className="flex flex-col justify-center items-center h-screen mt-0 md:-mt-16 -mb-12">
                <div className="text-center text-5xl lg:text-6xl xl:text-7xl font-semibold">WILLIAM <span className="yellow font-normal">STOCK</span></div>
                <div className="px-5 font-semibold mt-2 md:mt-5 text-lg md:text-xl lg:text-2xl max-w-lg md:max-w-2xlt text-center mx-2" id="home">
                    A <span className="yellow text-xl md:text-2xl lg:text-3xl font-bold">Full-Stack Developer</span> with a passion for learning new technologies and building intuitive, responsive user interfaces.
                </div>
            </div>
        </Layout>
        </div>
    );
}

export default Home;