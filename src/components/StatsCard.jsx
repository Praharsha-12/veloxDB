import "./StatsCard.css";

function StatsCard(props){

    return(

        <div className="card">

            <h4>{props.title}</h4>

            <h2>{props.value}</h2>

        </div>

    );

}

export default StatsCard;