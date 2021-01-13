import React, { useState } from 'react'
import styled from 'styled-components'
import uniqid from 'uniqid'

import { Avatar } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'


import Avatar1 from '../../../assets/avatar1.png'
import Avatar2 from '../../../assets/avatar2.png'
import Avatar3 from '../../../assets/avatar3.png'
import Avatar4 from '../../../assets/avatar4.png'

export const Who = () => {
    const [selectedWho, setSelectedWho] = useState(1)


    const completeWhoList = [
        {
            idx: 1,
            avatarSource: Avatar1
        },
        {
            idx: 2,
            avatarSource: Avatar2
        },
        {
            idx: 3,
            avatarSource: Avatar3
        },
        {
            idx: 4,
            avatarSource: Avatar4
        },
    ]

    const FormItem = styled.div `
    display: flex;
    flex-direction: column;
    width: 30%;
    padding-left: 1rem;
    `

    const WhoLabel = styled.div `
    font-size: 30px;
    `

    const WhoSelectionArea = styled.div `
    display: flex;
    height: 5rem;
    background: #FFFFFF;
    box-shadow: 5px 5px 10px #A9C4DA;
    border-radius: 5px;
    `

    const SelectToTheLeftOrRight = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    cursor: pointer;
    `

    const AvatarArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    `

    const getAvatarStyle = (avatarIndex) => {
        if(avatarIndex === selectedWho) {
            return {
                border: '5px solid #5BF326',
                boxSizing: 'border-box',
                cursor: 'pointer',
                height: 'calc(3rem + 5px)',
                width: 'calc(3rem + 5px)',
                margin: '0 0.3rem',
            }

        }

        return {
            cursor: 'pointer',
            height: '3rem',
            width: '3rem',
            margin: '0 0.3rem',
        }
    }

    const generateAvatars = () => {
        return completeWhoList
        .map((who) => {
            return <Avatar  
            key= {uniqid()}
            style={getAvatarStyle(who.idx)}
            onClick={() => { setSelectedWho(who.idx)}}
            icon={
                <img src={who.avatarSource} alt={`Avatar ${who.idx}`} />
            } />
        })
    }

    const onClickLeft = () => {

        if(selectedWho === 1){
            return setSelectedWho(4);
        }

        setSelectedWho(selectedWho - 1)
    }

    const onClickRight = () => {
        
        if(selectedWho === 4){
            return setSelectedWho(1);
        }
        
        setSelectedWho(selectedWho + 1)
    }

    return <FormItem>
        <WhoLabel> Who </WhoLabel>
        <WhoSelectionArea>
            <SelectToTheLeftOrRight onClick={onClickLeft}> <LeftOutlined /> </SelectToTheLeftOrRight>
            <AvatarArea>
                {generateAvatars()}
            </AvatarArea>

            <SelectToTheLeftOrRight onClick={onClickRight}> <RightOutlined /> </SelectToTheLeftOrRight>
        </WhoSelectionArea>
    </FormItem>


}