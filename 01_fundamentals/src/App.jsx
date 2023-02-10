import './App.css'

import First from './components/basic/First'
import CompWithParam from './components/basic/CompWithParam'
import ChallengeOne from './components/basic/ChallengeOne'
import Card from './components/layout/Card'
import Family from './components/basic/Family'
import Member from './components/basic/Member'
import StudentList from './components/rep/StudentList'
import ProdTable from './components/rep/ProdTable'
import Straight from './components/comun/Straight'
import NotStraight from './components/comun/NotStraight'
import Input from './components/form/Input'
import Cont from './components/cont/Cont'

const App = () => {
    return (
        <div className='App'>
            <h1>React fundaments</h1>

            <div className='cards'>
                <Card title="#01 - First Component" color="#fa6900">
                    <First />
                </Card>

                <Card title="#02 - Component with props" color="#e94c6f">
                    <CompWithParam title="Second Comp" subtitle="With params" />
                </Card>

                <Card title=" #03 - Challenge random numbers" color="#e8b71a">
                    <ChallengeOne max={60} min={1} />
                </Card>

                <Card title=" #04 - Children Comp" color="#00c8f6">
                    <Family lastName="Matos" >
                        <Member name="Juliana" />
                        <Member name="Gohan" />
                    </Family>
                </Card>

                <Card title=" #05 - Student list" color="#ff4c65">
                    <StudentList/>
                </Card>

                <Card title=" #06 - Challenge ProdTable" color="#3ada9d">
                    <ProdTable />
                </Card>

                <Card title=" #07 - Straight communication" color="#982395">
                    <Straight />
                </Card>

                <Card title=" #08 - NOT Straight communication" color="#59323c">
                    <NotStraight />
                </Card>

                <Card title=" #09 - Input" color="#8bad39">
                    <Input />
                </Card>

                <Card title=" #10 - Class Counter" color="#4e5f56">
                    <Cont num={20} />
                </Card>
            </div>

        </div>
    )
}

export default App