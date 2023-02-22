import Main from "../template/Main"

const Home = () => {
    return (
        <Main
            icon="home"
            title="Home"
            subtitle="React project CRUD"
        >
            <div className="display-4">Welcome!</div>
            
            <hr />
            
            <p className='mb-0'>A react system to exemplify a complete crud </p>
            
        </Main>
    )
}

export default Home