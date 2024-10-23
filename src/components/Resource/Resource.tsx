
export type resourceProps = {
    name:string;
    amount:number;
    production:number;
    onChange?:(increment:number)=>void
    productionchange?:(increment:number)=>void
}

const Resource = (props:resourceProps) => {
  return (
    <div className="ResourceContainer">
     <p>{props.name}: <span>{props.amount}</span></p>
    <div className="buttonContainer">
      <button type="button" onClick={()=>props.onChange && props.onChange(-1)}>-</button>
      <button type="button" onClick={()=>props.onChange && props.onChange(+1)}>+</button>
    </div>
    <div className="productionContainer">
        <p>production: <span>{props.production}</span></p>
        <div className="buttonContainer">
            <button onClick={()=>props.productionchange && props.productionchange(-1)} type="button" >-</button>
            <button onClick={()=>props.productionchange && props.productionchange(+1)}  type="button" >+</button>
        </div>
    </div>
</div>
  )
}

export default Resource