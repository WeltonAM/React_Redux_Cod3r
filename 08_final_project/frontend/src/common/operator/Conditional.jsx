
const Conditional = ({ test, children }) => {
  return (
    <>
      {test ? (children) : (false)}
    </>
  )
}

export default Conditional