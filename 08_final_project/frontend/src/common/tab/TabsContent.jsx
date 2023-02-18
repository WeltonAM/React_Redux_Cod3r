import { connect } from 'react-redux'

const TabsContent = ({ id, content, tab }) => {

    const selected = tab.selected === id

    return (
        <>
            <div 
                className={'tab-pane fade show ' + (selected ? 'active' : '')} 
                id={`nav-${id}`} 
                role="tabpanel" 
                aria-labelledby={`nav-${id}-tab`} 
                tabIndex="0"
            >
                {content}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        tab: state.tab
    }
}

export default connect(mapStateToProps)(TabsContent)