import React, { useEffect } from 'react'
import TabsContent from './TabsContent'
import TabsHeader from './TabsHeader'

import { connect } from 'react-redux'
import { selectTab } from './tabActions'

const Tabs = ({ tabSelected }) => {

    useEffect(() => {
        tabSelected('listar')
    }, [])

    return (
        <div className='d-flex flex-column'>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">

                    <TabsHeader
                        id="listar"
                        target="listar"
                        btnTitle="Listar"
                        icon='bars'
                    />

                    <TabsHeader
                        id="incluir"
                        target="incluir"
                        btnTitle="Incluir"
                        icon="plus"
                    />

                    <TabsHeader
                        id="alterar"
                        target="alterar"
                        btnTitle="Alterar"
                        icon="pencil"
                    />

                    <TabsHeader
                        id="excluir"
                        target="excluir"
                        btnTitle="Excluir"
                        icon="trash-o"
                    />

                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">
                <TabsContent
                    id="listar"
                    content="Lorem ipsum dolor sit amet"
                />

                <TabsContent
                    id="incluir"
                    content="Lorem ipsum dolor sit amet, consectetur"
                />

                <TabsContent
                    id="alterar"
                    content="Lorem ipsum Alter"
                />

                <TabsContent
                    id="excluir"
                    content="Lorem ipsum dolor sit amet, Delete"
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tab: state.tab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tabSelected(target){
            const action = selectTab(target)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)