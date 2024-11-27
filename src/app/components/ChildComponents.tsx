const ChildComponents = (props: any) => {
    console.log(props)
      return (
      <div className="border p-5 w-3/12">
          <h1 className="text-5xl p-2">
              {props.carName}
          </h1>
          <h6 className="text-3xl p-2">
              {props.price}
          </h6>
          <p className="text-3xl p-2">{props.image}</p>
          <p className="text-3xl p-2">{props.reviews}</p>
      </div>
    )
  }
  
  export default ChildComponents