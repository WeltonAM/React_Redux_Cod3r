import './App.css'

import First from './components/basic/First'
import CompWithParam from './components/basic/CompWithParam'
import ChallengeOne from './components/basic/ChallengeOne'
import Card from './components/layout/Card'

const App = () => {
    return (
        <div className='App'>
            <h1>React fundaments</h1>

            <div className='cards'>
                <Card title="#01 - First Component">
                    <First />
                </Card>

                <Card title="#02 - Component with props">
                    <CompWithParam title="Second Comp" subtitle="With params" />
                </Card>

                <Card title=" #03 - Challenge random numbers">
                    <ChallengeOne max={60} min={1} />
                </Card>
            </div>

        </div>
    )
}

export default App