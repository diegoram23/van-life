import React from "react";

export default function Vans() {

    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        console.log('effect ran')
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                console.log(data.vans)
                setVans(data.vans)
            })
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-content">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h2>{van.name}</h2>
                <h2>{van.price}<span>/day</span></h2>
            </div>
            <i className="van-type">{van.type}</i>
        </div>
    ))

    return (
        <div className="van-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}