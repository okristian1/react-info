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
    return "ukjent";
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
        console.log(result);
        const meetings = result.data.map(obj => obj);
        console.log(meetings);
        this.setState({ meetings });
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.meetings.map(meeting =>
            <tr key={meeting.TableNrs}>{meeting.Company}</tr>
          )}
        </ul>
      </div>
    );
  }
}





ReactDOM.render(
  <Meetings />,
  document.getElementById('root')
);