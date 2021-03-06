import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class AlgorithmCard extends Component {
    links=["/sieve","sorting","/sorting","/sorting"];
render(props) {
    return (
        <div className="container card" style={{width:"400px",border:"2px solid gray"}}>
            <Link to={{
                pathname:`${this.props.whichLink}`
            }}>
                <img className="card-img-top" src="https://www.researchgate.net/profile/Arne-Maus/publication/249745279/figure/fig3/AS:651875808473088@1532430712012/Comparing-four-sorting-algorithms-n10-50-97656250-with-a-uniform-0n-1.png" alt="Sorting" />
            </Link>
            <div className="card-body">
                <h4 className="card-title" style={{margin:"-10px",fontWeight:"bold",textAlign:"center"}}>{this.props.heading}</h4>
                <p style={{margin:"10px",textAlign:'center'}}>{this.props.description}</p>
            </div>
        </div>
    )
}
}
