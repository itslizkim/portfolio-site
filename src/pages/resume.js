import * as React from 'react';
import Layout from '../components/layout';
import ResumeComponent from '../components/ResumeComponent';

const ResumePage = () => {
    return (
        <Layout pageTitle='Resume'>
            <div className='resume-section'>
                <ResumeComponent/>
            </div>
        </Layout>
    )
}

export default ResumePage