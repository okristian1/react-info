import React, { Component } from 'react';
import logo from './style/logo.svg';
import './style/App.css';

class App extends Component {
  render() {
    var row = [];
    this.props.REACTSUCKS.forEach((REACTSUCKS) => {
      row.push(<derpRow AreaName={REACTSUCKS.AreaName} key={REACTSUCKS.AreaName} />);
    });

    return (
      <div className="text-center container">
        {row}
      </div>
    );
  }
}
var REACTSUCKS =
[
{
"AreaName": "Møtesenteret",
"Company": "SpareBank 1 SMN v/Halsen",
"CustomerName": "Bertil Halsen",
"EndDateTime": "/Date(1480323600000)/",
"NrOfGuest": 4,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480316400000)/",
"TableNrs": [
8
]
},
{
"AreaName": "Møtesenteret",
"Company": "",
"CustomerName": "SpareBank 1 Kredittkort ",
"EndDateTime": "/Date(1480370400000)/",
"NrOfGuest": 6,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480316400000)/",
"TableNrs": [
13
]
},
{
"AreaName": "Møtesenteret",
"Company": "SMN v/Faradonbeh",
"CustomerName": "Heidi Aakre Faradonbeh",
"EndDateTime": "/Date(1480338000000)/",
"NrOfGuest": 12,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480316400857)/",
"TableNrs": [
5
]
},
{
"AreaName": "Møtesenteret",
"Company": "Sparebank 1 SMN v/Erlandsen",
"CustomerName": "Katharina Erlandsen",
"EndDateTime": "/Date(1480345200000)/",
"NrOfGuest": 8,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480323600000)/",
"TableNrs": [
4
]
},
{
"AreaName": "Møtesenteret",
"Company": "SMN v/Halsen",
"CustomerName": "Tove Westrum Sørensen",
"EndDateTime": "/Date(1480332600000)/",
"NrOfGuest": 10,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480327200000)/",
"TableNrs": [
101
]
},
{
"AreaName": "Møtesenteret",
"Company": "Næring v/ Røkke",
"CustomerName": "Rune Røkke",
"EndDateTime": "/Date(1480345200000)/",
"NrOfGuest": 22,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480330800000)/",
"TableNrs": [
6
]
},
{
"AreaName": "Møtesenteret",
"Company": "SMN v/Halsen",
"CustomerName": "Tove Westrum Sørensen",
"EndDateTime": "/Date(1480340700000)/",
"NrOfGuest": 2,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480335300000)/",
"TableNrs": [
32
]
},
{
"AreaName": "Møtesenteret",
"Company": "Konferansesenteret i SpareBank 1 SMN",
"CustomerName": "Konferansesenteret ",
"EndDateTime": "/Date(1480343400000)/",
"NrOfGuest": 10,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480338000000)/",
"TableNrs": [
35,
36
]
},
{
"AreaName": "Møtesenteret",
"Company": "SMN v/Halsen",
"CustomerName": "Tove Westrum Sørensen",
"EndDateTime": "/Date(1480352400000)/",
"NrOfGuest": 9,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480338000000)/",
"TableNrs": [
3
]
},
{
"AreaName": "Møtesenteret",
"Company": "Næring v/ Røkke",
"CustomerName": "Rune Røkke",
"EndDateTime": "/Date(1480354200000)/",
"NrOfGuest": 8,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480341600000)/",
"TableNrs": [
34
]
},
{
"AreaName": "Møtesenteret",
"Company": "SpareBank 1 Markets AS",
"CustomerName": "Morten Mjøen",
"EndDateTime": "/Date(1480349700000)/",
"NrOfGuest": 5,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480344300000)/",
"TableNrs": [
30
]
},
{
"AreaName": "Møtesenteret",
"Company": "SMN v/Halsen",
"CustomerName": "Tove Westrum Sørensen",
"EndDateTime": "/Date(1480363200000)/",
"NrOfGuest": 9,
"RestaurantName": "SpareBank 1",
"StartDateTime": "/Date(1480348800000)/",
"TableNrs": [
2
]
}
];

export default App;

