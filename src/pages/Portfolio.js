import React from "react";
import Layout from "../components/Layout";

const Home = () => {
    return (
        <div>
            <Layout>
                <div className='grid mt-10 mx-5'>
                    <div className=''>
                        <div className='text-left text-2xl'>Portfolio <span className='yellow text-xl font-semibold'>& Technologies</span></div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Home;