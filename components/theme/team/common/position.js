const Position = ({choose,position})=>{
    return    <h4 className={`${choose ? "text-very-small" : "text-base"} font-semibold`}>{position}</h4>
}
export default Position