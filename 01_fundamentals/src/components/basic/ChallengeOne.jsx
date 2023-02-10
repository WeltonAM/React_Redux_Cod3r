const ChallengeOne = ({max, min}) => {

    const random = parseInt(Math.random() * (max - min) + min)

    return (
        <div>
            <h2>ChallengeOne component</h2>
            <p>
                <strong>Max: </strong> {max}
                <br />
                <strong>Min: </strong> {min}
                <br />
                <strong>Numbers: </strong> {random}
            </p>
        </div>
    )
}

export default ChallengeOne