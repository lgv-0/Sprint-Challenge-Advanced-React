import React from "react";
import Axios from "axios";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";

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
                <LineChart
                    width={1000}
                    height={400}
                    data={this.state.players}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="searches" stroke="#ff7300" yAxisId={0} />
                </LineChart>
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