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
    axios.get(`https://sparbank1.2book.se/Version4_49_18/simpleIntegration/GetCreaJson?RestaurantId=4&dateTime=2016-11-29`)
      .then(result => {
        const meetings = result.data.map(obj => obj);
        this.setState({ meetings });
      });
  }
  render() {
    return (
      <div>
        <img className="pull-right" src={require('./style/smnlogo.png')}alt={"SMN LOGO"} width={"30%"}  />
        <table>
        <tbody>
        <td>Møte</td>
        <td>Møterom</td>
        <td>Tidspunkt</td>
          {this.state.meetings.map(meeting =>
            <tr key={meeting.TableNrs}>
            <td>{meeting.Company}</td>
            <td>{handleRoomName(meeting.TableNrs)}</td>
            <td>{handleTime(meeting.StartDateTime)} - {handleTime(meeting.EndDateTime)}</td>            </tr>
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