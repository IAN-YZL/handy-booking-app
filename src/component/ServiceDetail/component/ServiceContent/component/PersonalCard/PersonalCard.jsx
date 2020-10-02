import React from 'react';
import styled from 'styled-components';
import photo from '../../assets/sample_avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = styled.div`
    width: 230px;
    border: 1px rgb(175, 173, 173) solid;
    border-radius: 4px;
    padding: 8px;
    margin-right: 30px;
    margin-top: 20px;
    box-shadow: 1px 0px 1px rgb(172, 170, 170, 0.6), 0px 2px 2px rgb(142, 142, 146, 0.4);
    position: relative;
`;

const Title = styled.p`
    font-size: 0.7rem;
    font-weight: bolder;
    margin: 0;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-right: 15px;
`;

const Label = styled.p`
    margin-bottom: 0;
    margin-right: 5px;
    font-size: 0.5rem;
    background-color: rgb(14, 135, 151);
    color: white;
    padding: 0 3px;
    margin: 2px 5px 2px 0;
    border-radius: 2px;
`;

const LabelSets = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Info = styled.div`
    display: flex;
    align-items: start;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const ChooseBar = styled.div`
    width: 4px;
    height: 100%;
    background-color: rgb(14, 135, 151);
    position: absolute;
    top: 0px;
    right: 0px;
    border-radius: 0 3px 3px 0;
`;

const Stars = styled.div``;

const createRating = (rating) => {
    let ratingElements = [];
    for (let i = 0; i < rating; i++) {
        ratingElements.push(<FontAwesomeIcon icon={faStar} color="rgb(253, 219, 58)" size="sm"  />);
    }
    return ratingElements;
}

const PersonalCard = ({
    name,
    label,
    rating,
    current,
    action,
}) => (
    <Card onClick={action.bind(this, name)}>
        <Title>{name}</Title>
        <Info>
            <Avatar src={photo} alt="Avatar" />
            <LabelSets>
                {label.map((item) => {
                    return <Label>{item}</Label>
                })}
            </LabelSets>
        </Info>
        <Stars>
            {createRating(rating)}
        </Stars>
        {current && <ChooseBar />}
    </Card>
);

export default PersonalCard;