import * as React from 'react';
import Layout from '../components/layout';
import Resume from '../components/ResumeComponent';

const ResumePage = () => {
    return (
        <Layout pageTitle='Resume'>
            <div className='resume-section'>
                <Resume/>
            </div>
        </Layout>
    )
}

export default ResumePage