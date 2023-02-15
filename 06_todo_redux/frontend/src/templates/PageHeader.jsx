import '../App.css'

const PageHeader = ({ title, small }) => {
    return (
        <>
            <header className='page-header'>
                <h2>{title}</h2><small>| {small}</small>
            </header>

            <hr />
        </>
    )
}

export default PageHeader