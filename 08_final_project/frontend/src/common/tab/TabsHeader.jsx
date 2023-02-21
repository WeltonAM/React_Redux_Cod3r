import { connect } from 'react-redux'
import { selectTab } from './tabActions'
import Conditional from '../operator/Conditional'

const TabsHeader = ({ id, target, icon, btnTitle, tabSelected, tab }) => {

    const selected = tab.selected === target

    const visible = tab.visible[target]

    return (
        <Conditional test={visible}>
            <button
                className={'nav-link ' + (selected ? 'active' : '')}
                id={`nav-${id}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#nav-${target}`}
                onClick={() => tabSelected(target)}
                type="button"
                role="tab"
                aria-controls={target}
            >
                <i className={`fa fa-${icon}`}></i> {btnTitle}
            </button>

        </Conditional>

    )
}

const mapStateToProps = (state) => {
    return {
        tab: state.tab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tabSelected(target) {
            const action = selectTab(target)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsHeader)