import { connect } from 'react-redux'
import Conditional from '../operator/Conditional'

const TabsContent = ({ id, content, tab }) => {

    const selected = tab.selected === id
    const visible = tab.visible[id]

    return (
        <Conditional test={visible}>
            <div
                className={'tab-pane fade show ' + (selected ? 'active' : '')}
                id={`nav-${id}`}
                role="tabpanel"
                aria-labelledby={`nav-${id}-tab`}
                tabIndex="0"
            >
                {content}
            </div>
        </Conditional>
    )
}

const mapStateToProps = (state) => {
    return {
        tab: state.tab
    }
}

export default connect(mapStateToProps)(TabsContent)