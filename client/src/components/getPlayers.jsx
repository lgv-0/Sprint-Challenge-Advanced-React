import React from "react";
import Axios from "axios";

export default class PlayerContainer extends React.Component
{
    constructor()
    {
        super();

        this.state = 
        {
            "players":[]
        }
    }

    componentDidMount()
    {
        Axios.get("http://localhost:5000/api/players").then((response)=>
        {
            this.setState(
                {
                    "players":response.data
                });
        })
    }

    render()
    {
        return (
            <div>
                {
                    this.state.players.map((i)=>
                    {
                        return (<div key={i.id}><h2>{i.name}<br />({i.country})</h2><h3>{i.searches} searches</h3><hr /></div>);
                    })
                }
            </div>
        );
    }
}