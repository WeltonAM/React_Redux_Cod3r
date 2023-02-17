import Grid from "../layout/Grid"

const ValueBox = ({ numbers, color, value, text, icon }) => {

  return (
    <Grid numbers={numbers} >
      <div className={`small-box bg-${color}`}>

        <div className="inner">
          <h3>{value}</h3>
          <p>{text}</p>
        </div>

        <div className="icon">
          <i className={`fa fa-${icon}`}></i>
        </div>

      </div>
    </Grid>
  )
}

export default ValueBox