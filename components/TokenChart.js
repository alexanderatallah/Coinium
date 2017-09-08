import React, {Component} from "react"
import {colors} from "../themes/coinium"
import {LineChart, Line, ResponsiveContainer} from "recharts"

const data = [
  {name: 'Week 1', good: 4000, bad: 1},
  {name: 'Week 2', good: 3000, bad: 2},
  {name: 'Week 3', good: 2000, bad: 4},
  {name: 'Week 4', good: 2780, bad: 12},
  {name: 'Week 5', good: 1890, bad: 38},
  {name: 'Week 6', good: 2390, bad: 80},
  {name: 'Week 7', good: 3490, bad: 0},
]

export default class TokenChart extends Component {
  render () {
    return (
      <ResponsiveContainer height={200}>
        <LineChart data={data}
          margin={{top: 25, bottom: 10, left: 10, right: 10}}>
          <Line type='monotone' dataKey='bad'
                stroke={colors.ctaPrimary} strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}