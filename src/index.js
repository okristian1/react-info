import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './style/index.css';

function handleTime(unix) {
  var newDate = new Date(unix.slice(6,16) * 1000);
  var newtime = newDate.toUTCString();
  return newtime
}

class ProductRow extends React.Component {
  render() {
    this.props.meeting.StartDateTime = handleTime(this.props.meeting.StartDateTime)
    this.props.meeting.EndDateTime = handleTime(this.props.meeting.EndDateTime)
    if (!this.props.meeting.Company)
      this.props.meeting.Company = this.props.meeting.CustomerName
    return (
      <tr>
        <td>{this.props.meeting.Company}</td>
        <td>{this.props.meeting.StartDateTime}</td>
        <td>{this.props.meeting.EndDateTime}</td>
        <td></td>
        <td>{this.props.meeting.TableNrs}</td>
      </tr>
    );
  }
}


class ProductTable extends React.Component {
  render() {
    var rows = [];
    this.props.meetings.forEach((meeting) => {
      rows.push(<ProductRow meeting={meeting} key={meeting.Company} />);
    });
    return (
      <div className="container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Tidspunkt</th>
            <th></th>
            <th>Møterom</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
}



var PRODUCTS = [
{
"AreaName": "Møtesenteret",
"Company": "Sparebanken 1 SMN ",
"CustomerName": "Egon Løset",
"EndDateTime": "/Date(1481641200000)/",
"NrOfGuest": 150,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1481630400000)/",
"TableNrs": [
1
]
},
{
"AreaName": "Møtesenteret",
"Company": "",
"CustomerName": "Åshild Hole",
"EndDateTime": "/Date(1481628600000)/",
"NrOfGuest": 8,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1481623200000)/",
"TableNrs": [
34
]
},
{
"AreaName": "Møtesenteret",
"Company": "SMN Markets v/Juul",
"CustomerName": "Lars Erik Juul",
"EndDateTime": "/Date(1481641200000)/",
"NrOfGuest": 10,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1481619600000)/",
"TableNrs": [
4
]
},
{
"AreaName": "Møtesenteret",
"Company": "SpareBank 1 SMN v/Tangen",
"CustomerName": "Jon Tangen",
"EndDateTime": "/Date(1481626800000)/",
"NrOfGuest": 9,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1481616000420)/",
"TableNrs": [
3
]
},
{
"AreaName": "Møtesenteret",
"Company": "SpareBank 1 SMN v/Enebakk",
"CustomerName": "Hans Petter Enebakk",
"EndDateTime": "/Date(1481626800000)/",
"NrOfGuest": 10,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1481616000000)/",
"TableNrs": [
5
]
},
{
"AreaName": "Møtesenteret",
"Company": "SMN v/Reite",
"CustomerName": "Endre Jo Reite",
"EndDateTime": "/Date(1481619600000)/",
"NrOfGuest": 45,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1481614200000)/",
"TableNrs": [
1
]
},
{
"AreaName": "Møtesenteret",
"Company": "Kredittkortselskapet",
"CustomerName": "Øivind Mellbye",
"EndDateTime": "/Date(1481639400000)/",
"NrOfGuest": 15,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1481612400000)/",
"TableNrs": [
6
]
},
{
"AreaName": "Møtesenteret",
"Company": "SMN",
"CustomerName": "Erlend Østerås",
"EndDateTime": "/Date(1481623200000)/",
"NrOfGuest": 10,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1481612400000)/",
"TableNrs": [
13
]
}
]


ReactDOM.render(
  <ProductTable meetings={PRODUCTS} />,
  document.getElementById('root')
);
