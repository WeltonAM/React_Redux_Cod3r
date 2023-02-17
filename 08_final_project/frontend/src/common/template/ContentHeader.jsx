const ContentHeader = ({ title, small }) => {
  return (
    <section>
        <h3 className="text-gray pt-2 pl-3">
            {title} <small className="lead"> | {small}</small>
        </h3>
        
    </section>
  )
}

export default ContentHeader