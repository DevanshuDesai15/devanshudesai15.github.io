import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Dec 2021 - Apr 2022'} 
                        title={'Full Stack Developer Intern'}
                        subTitle={'Inspiro InfoTech'}
                        text={"Developed a CRM (Customer Relationship Model) system. Implemented a unique Login Credentials with NestJs & Redux-saga, developed a component to manage software packages with features and it's groups. Implementation of these components will make the registration of customer data easier by 20% so more time will be saved."}
                    />
                    <ResumeItem 
                        year={'Jun 2021 - Jul 2021'} 
                        title={'Advance SQL Intern'}
                        subTitle={'SSM InfoTech Solutions Pvt. Ltd.'}
                        text={'Composed SQL queries in Microsoft SQL Server Management Studio-18 (MSSMS).Contributed in different queries to find data faster. Participated on project of Managing Data of a Bicycle Warehouse and implemented changes in queries to find data eaily by 5%.'} 
                    />
                    <ResumeItem 
                        year={'Apr 2020 - May 2020'} 
                        title={'Android Application Intern'}
                        subTitle={'Differenz System'}
                        text={'Added designs in the application so that user experience becomes smooth. Implemented navigation bar to the application for switching between selling and buying coupons. Executed a live location feature so that user can find the coupons, which are available for that location.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                <ResumeItem 
                        year={'2022 - 2024'} 
                        title={"Master's in Software Engineering"}
                        subTitle={'Arizona State University'}
                        text={"Incoming Masters student for Fall'22"} 
                    />
                    <ResumeItem 
                        year={'2018 - 2022'} 
                        title={"Bachlor's in Computer Engineering"}
                        subTitle={'CHARUSAT University'}
                        text={'CGPA: 8.7 out of 10'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
