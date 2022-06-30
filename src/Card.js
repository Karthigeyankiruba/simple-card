function Card(props){
    return(
        <div className="card" style={{width:"18rem"}}>
        <img src="https://picsum.photos/100/80" class="card-img-top" alt="..." />
        
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h5>{props.price}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}

export default Card