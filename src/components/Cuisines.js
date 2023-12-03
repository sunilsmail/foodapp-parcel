const Cuisines = ({ cuisines }) => {
    return (<div className="cusions">{
        cuisines.map((item, index) => {
            return (
                <span style={
                    {
                        margin: '2px',
                        paddingLeft: '2px',
                        backgroundColor: 'gray',
                        border: '2px solid'
                    }
                } key={index} >{item}</span>
            )
        })
    }</div>)
}

export default Cuisines;