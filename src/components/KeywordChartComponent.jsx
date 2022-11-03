import React, { Component } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from "recharts";

class KeywordChartComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: [
                {
                  name: '#바람', keyword: 4000
                },
                {
                  name: '#들꽃', keyword: 3000
                },
                {
                  name: '#제주도', keyword: 2000
                },
                {
                  name: '#구름', keyword: 1000
                },
                {
                  name: '#강아지', keyword: 500
                }
              ]
        }

    }

    render() {
      const title = {
        marginBottom: "20px",
        fontSize: 40
      }
        return (
            <div className='keywordRankForm'>
                <h1 style={title}>오늘의 키워드</h1>
                <BarChart width={730} height={450} data={this.state.keyword}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="keyword" fill="#504197" />
                </BarChart>
            </div>
        );
    }
}
export default KeywordChartComponent;