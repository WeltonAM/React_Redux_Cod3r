import React from 'react'
import Content from '../../common/template/Content'
import ContentHeader from '../../common/template/ContentHeader'
import ValueBox from '../../common/widget/ValueBox'

const Dashboard = () => {
  return (
    <div className='content-wrapper'>
        <ContentHeader title="Dashboard" small="Version 1.0" />
        
        <Content>
            <ValueBox
                numbers='12 4'
                color='green'
                icon='bank'
                value='$ 10'
                text='Total Credits'
            />
            
            <ValueBox
                numbers='12 4'
                color='red'
                icon='credit-card'
                value='$ 10'
                text='Total Debts'
            />
            
            <ValueBox
                numbers='12 4'
                color='blue'
                icon='money'
                value='$ 0'
                text='Consolidated Value'
            />
        </Content>
    </div>
  )
}

export default Dashboard