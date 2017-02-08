import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style/index.css';



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
  }

class Meetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetings: []
    };
  }
componentDidMount() {
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;
  var temp = [];
    axios.get(`https://sparbank1.2book.se/Version4_51_9/simpleIntegration/GetCreaJson?RestaurantId=4&dateTime=` + today)
      .then(result => {
         result.data.forEach((meeting) => {
           if(meeting["TableNrs"]in rooms) {
             temp.unshift(meeting);
             this.setState({ meetings: temp})
           }
         })
      });
  }
  render() {
    return (
      <div>
        <img className="pull-right" src={require('./style/smnlogo.png')}alt={"SMN LOGO"} width={"30%"}  />
        <table>
        <tbody>
        <tr>
        <td>Møte</td>
        <td>Møterom</td>
        <td>Tidspunkt</td>
        </tr>
          {this.state.meetings.map(meeting =>
            <tr key={meeting.TableNrs}>
            <td>{meeting.Company ? meeting.Company : meeting.CustomerName}</td>
            <td>{handleRoomName(meeting.TableNrs)}</td>
            <td>{handleTime(meeting.StartDateTime)} - {handleTime(meeting.EndDateTime)}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}





ReactDOM.render(
  <Meetings />,
  document.getElementById('root')
);

setInterval(componentDidMount, 1000);
