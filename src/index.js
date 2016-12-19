import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './style/index.css';
import meetings from './meetings.json';
import axios from 'axios';


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
  constructor(props) {
    super(props);
  axios.get('https://sparbank1.2book.se/Version4_49_18/simpleIntegration/GetCreaJson?RestaurantId=4&dateTime=2016-11-28')
  .then(function (response) {
    console.log(meetings);
  })
  .catch(function (error) {
    console.log(error);
  });

    this.state = {meetings: meetings};
  }

  render() {
    var rows = [];
    this.state.meetings.forEach((meeting) => {
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
  <MeetingsTable />,
  document.getElementById('root')
);