import React from "react";
import { Link } from "react-router-dom";
export default function Vans() {

    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/van-life/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h2>{van.name}</h2>
                    <h2>${van.price}<span>/day</span></h2>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}