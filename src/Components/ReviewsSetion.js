import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={"Divyanshu brought great energy and a positive attitude to our work at Helppr. He's a great team player who made a real impact on the team during his time here but was also dedicated to his work and focused on producing real, tangible outcomes from what was quite a broad and nebulous brief. His capability in research and production was really amazing."} 
                    />
                    <ReviewItem 
                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas? Dos ir por culpa ad itaque quas!'} 
                    />
                    
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;
