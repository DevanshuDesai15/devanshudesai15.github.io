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
                        text={"Designed a UI for Login, Package Component and Feature Component. Implemented Login with NestJS as backend and React Redux as Middleware. Implemented Features Page and Packages page whose data was fetched with NestJS."}
                    />
                    <ResumeItem 
                        year={'Jun 2021 - Jul 2021'} 
                        title={'Advance SQL Intern'}
                        subTitle={'SSM InfoTech Solutions Pvt. Ltd.'}
                        text={"Composed SQL queries like Joins, Aggregate Function, Pivot, User Define Function, etc. Implemented different queries like Inner Join, Views, Cross Join, etc. to find data for a bicycle company."} 
                    />
                    <ResumeItem 
                        year={'Apr 2020 - May 2020'} 
                        title={'Android Application Intern'}
                        subTitle={'Differenz System'}
                        text={"Designed a UI for buying page and selling page of coupons. Implemented navigation bar to the application for switching between multiple pages. Executed a live location feature so that user can find the coupons, that are available for that specific location."} 
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
                        text={"Graduate student for Fall'22"} 
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
