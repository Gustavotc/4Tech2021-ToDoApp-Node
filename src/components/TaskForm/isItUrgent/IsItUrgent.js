import React, { useState } from 'react'
import styled from 'styled-components'
import uniquid from 'uniqid'

export const IsItUrgent = () => {

    const [urgentyScale, setUrgencyScale] = useState([
        {
            urgency: 'low',
            color: '#71A1FF',
            selected: true,
        },
        {
            urgency: 'average',
            color: '#F8BD26',
            selected: false,
        },
        {
            urgency: 'high',
            color: '#FF7171',
            selected: false,
        }
    ])

    const FormItem = styled.div `
    display: flex;
    flex-direction: column;
    width: 25%;
    padding-left: 1rem;
    `

    const IsItUrgentLabel = styled.div`
    font-size: 30px;
    `

    const IsItUrgentSelectionArea = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    background: #FFFFFF;
    box-shadow: 5px 5px 10px #A9C4DA;
    border-radius: 5px; 
    `

    const onClickToSetUrgency = (urgency) => {
        const urgencyScaleWithNewSelection = urgentyScale.map(x => {

            if (x.urgency === urgency) {
                return { ...x, selected: true }
            }

            return { ...x, selected: false }

        })
        
        setUrgencyScale(urgencyScaleWithNewSelection)
    }

    const generateUrgencyOptions = () => {
        return urgentyScale.map(urgency => {
           
            if(urgency.selected) {
                return <div 
                    key={uniquid()}
                    style={{
                        backgroundColor: urgency.color,
                        width: 'calc(2.5rem + 5px)',
                        height: 'calc(2.5rem + 5px)',
                        border: '5px solid #5BF326',
                        borderRadius: '3px',
                        cursor: 'pointer',
                    }}
                />
            }

                return <div 
                    key={uniquid()}
                    style={{
                        backgroundColor: urgency.color,
                        width: '2.5rem',
                        height: '2.5rem',
                        cursor: 'pointer'
                    }} onClick={() => onClickToSetUrgency(urgency.urgency)}  />

        })
    }

    return <FormItem>
        <IsItUrgentLabel> Is It Urgent? </IsItUrgentLabel>
        <IsItUrgentSelectionArea> 
            {generateUrgencyOptions()}
        </IsItUrgentSelectionArea>
    </FormItem>

}