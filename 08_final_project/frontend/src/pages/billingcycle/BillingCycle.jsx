import Content from '../../common/template/Content'
import ContentHeader from '../../common/template/ContentHeader'

import Tabs from '../../common/tab/Tabs'
import { useEffect } from 'react'

const BillingCycle = () => {


  return (
    <div className='content-wrapper'>
      <ContentHeader title="Ciclos de pagamento" small="Administrar recursos" />
        
        <Content>
          
          <Tabs />
          
        </Content>
    </div>
  )
}

export default BillingCycle