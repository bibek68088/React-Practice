import React from 'react';
import cars from './practice';


const [honda, tesla]  = cars;
// console.log(honda);

const {speedStats:
    {topSpeed: hondaTopSpeed}} = honda;
const {speedStats:
    {topSpeed: teslaTopSpeed}} = tesla;


const {colourByPopularity: [hondaTopColour]} = honda;
const {colourByPopularity: [teslaTopColour]} = tesla;

const Details = () => {
  return (
    <div>
        <table>
            <tr>
                <th>Brand</th>
                <th>Top Speed</th>
                <th>Top Colour</th>
            </tr>
            <tr>
                <td>{tesla.model}</td>
                <td>{tesla.topSpeed}</td>
                <td>{tesla.topColour}</td>
            </tr>
            <tr>
                <td>{honda.model}</td>
                <td>{honda.topSpeed}</td>
                <td>{honda.topColour}</td>
            </tr>
        </table>
    </div>
  )
}

export default Details;