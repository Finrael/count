const buttonComp = ({classN, value, callback})=>{
    return(
        <input type="button" value={value} className={classN} onClick={callback} />
    )
}
export default buttonComp;