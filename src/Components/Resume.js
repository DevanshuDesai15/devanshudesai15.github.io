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
                        text={"Engineered and integrated key features for company’s CRM website using ReactJS and NestJS technologies, resulting in a 25% increase in website traffic and a 20% improvement in user engagement. Collaborated with team members to seamlessly integrate ReactJS features into the CRM website, resulting in a 15% decrease in website loading time and a 30% increase in user satisfaction. Streamlined task prioritization and consistently delivered high-quality work within tight deadlines, resulting in a 50% increase in productivity during the last month of the internship."}
                    />
                    <ResumeItem 
                        year={'Jun 2021 - Jul 2021'} 
                        title={'Advance SQL Intern'}
                        subTitle={'SSM InfoTech Solutions Pvt. Ltd.'}
                        text={" Composed SQL queries like Joins, Aggregate Function, Pivot, User Define Function, etc. Implemented Inner Join, Views, Cross Join, and other queries, resulting in 15% faster data analysis and retrieval for the company."} 
                    />
                    <ResumeItem 
                        year={'Apr 2020 - May 2020'} 
                        title={'Android Application Intern'}
                        subTitle={'Differenz System'}
                        text={"Developed and designed a user interface for buying and selling pages of coupons, resulting in a 30% increase in user engagement. Executed a navigation bar in Android Studio, allowing for seamless switching between multiple pages, reducing page load time by 25%. Teamed with developers to ensure the application was bug-free and user-friendly, resulting in a 95% user satisfaction rate based on user feedback"} 
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
                        text={"GPA: 3.89/4.0"} 
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
