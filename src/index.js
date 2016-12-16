import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './style/index.css';
var meetings = [
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
10
]
}
]


var rooms = {
  1: "Amfiet", 
  2: "Jacob roll", 
  3: "Olav Tryggvasson", 
  4: "Cicignon", 
  5: "Tordenskjold",
  8: "Thomas Angell",  
  10: "Lars Tiller",
  13: "Fru Schøller"
};


function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function handleTime(unix) {
  var newDate = new Date(unix.slice(6,16) * 1000);
  var h = addZero(newDate.getHours());
  var m = addZero(newDate.getMinutes());
  var time = h + ':' + m
  return time
}

function handleRoomName(num) {
  if(num in rooms) {
    return rooms[num];
    }
    return "ukjent";
  }

class MeetingRow extends React.Component {
  render() {
    this.props.meeting.StartDateTime = handleTime(this.props.meeting.StartDateTime)
    this.props.meeting.EndDateTime = handleTime(this.props.meeting.EndDateTime)
    this.props.meeting.TableNrs = handleRoomName(this.props.meeting.TableNrs)

    if (!this.props.meeting.Company)
      this.props.meeting.Company = this.props.meeting.CustomerName
    return (
      <tr>
        <td>{this.props.meeting.Company}</td>
        <td className="text-center">{this.props.meeting.StartDateTime} - {this.props.meeting.EndDateTime}</td>
        <td className="text-right">{this.props.meeting.TableNrs}</td>
      </tr>
    );
  }
}


class MeetingsTable extends React.Component {
  render() {
    var rows = [];
    this.props.meetings.forEach((meeting) => {
      if(meeting["TableNrs"] in rooms) {
              rows.unshift(<MeetingRow meeting={meeting} key={meeting.Company} />);
      }});
    return (
      <div className="container">
      <img className="pull-right" src={require('./style/smnlogo.png')}alt={"SMN LOGO"} width={"30%"}  />
      <table>
        <thead>
          <tr>
            <th>Møte</th>
            <th className="text-center">Tidspunkt</th>
            <th className="text-right">Sted</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
}


ReactDOM.render(
  <MeetingsTable meetings={meetings} />,
  document.getElementById('root')
);
