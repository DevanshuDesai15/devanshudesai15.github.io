import React from 'react'
import styled from 'styled-components';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import GmailIcon from '@material-ui/icons/Mail';
import Particle from '../Components/Particle';
import Typed from 'react-typed';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Devanshu Desai</span></h1>
                <p> Grad student at Arizona State University </p>
                <Typed
                    className='typed-text'
                    strings={['Web Developer', 'Android Application Developer', 'Front-end Development']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="icons">
                    <a href="https://www.linkedin.com/in/devanshudesai15" className="icon i-facebook">
                        <LinkedIn />
                    </a>
                    <a href="https://github.com/DevanshuDesai15" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="mailto:devanshudesai15@gmail.com" className="icon i-youtube">
                        <GmailIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typed-text{

    }
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
