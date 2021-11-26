import React from 'react';
import ResumePDF from '../images/resume.pdf'

const ResumeComponent = () => {
    return (
        <div className='pdf-container' >
            <object className='resumePdf'
                data={ResumePDF}
                type='application/pdf'
                title='Liz Kim Resume 2021'
                aria-label='Liz Kim Tech Resume'
                style={{border: '2', color: 'black'}}
                width='670'
                height='950'
            />
        </div>
    )
}

export default ResumeComponent