import React from 'react'
import styled from 'styled-components'

import { WhatToDo } from './WhatToDo/WhatToDo'
import { Who } from './Who/Who'
import { IsItUrgent } from './isItUrgent/IsItUrgent'
import { Save } from './Save/Save'

export const TaskForm = () => {
    const TaskFormLayout = styled.div`
    grid-column: 2 / 5;
    grid-row: 2;
    display: flex;
    user-select: none;
    `

    return <TaskFormLayout>
        <WhatToDo />
        <Who />
        <IsItUrgent />
        <Save />
    </TaskFormLayout>

}