import Content from '../../common/template/Content'
import ContentHeader from '../../common/template/ContentHeader'

import Tabs from '../../common/tab/Tabs'

const BillingCycle = () => {
  return (
    <div className='content-wrapper'>
      <ContentHeader title="Ciclos de pagamento" small="Admnistrar recursos" />
        
        <Content>
          
          <Tabs />
          
        </Content>
    </div>
  )
}

export default BillingCycle