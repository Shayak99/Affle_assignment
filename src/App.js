import "./styles.css";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
// import Calendar from "react-calendar";
// import { useState } from "react";

export default function App() {
  // var gapi = window.gapi;
  // var CLIENT_ID =
  //   "131383672006-r5fnlca2518o70816ulqcjd7i3m63ivg.apps.googleusercontent.com";
  // var API_KEY = "AIzaSyA_VM760pcngG67jis65xvXbXE3pZJeEU4";
  // var DISCOVERY_DOCS = [
  //   "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  // ];
  // var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleClick = () => {
    console.log("123");
  };
  //   gapi.load("client:auth2", () => {
  //     console.log("loaded client");

  //     gapi.client.init({
  //       apiKey: API_KEY,
  //       clientId: CLIENT_ID,
  //       discoveryDocs: DISCOVERY_DOCS,
  //       scope: SCOPES
  //     });

  //     gapi.client.load("calendar", "v3", () => console.log("bam!"));

  //     gapi.auth2
  //       .getAuthInstance()
  //       .signIn()
  //       .then(() => {
  //         var event = {
  //           summary: "Awesome Event!",
  //           location: "800 Howard St., San Francisco, CA 94103",
  //           description: "Really great refreshments",
  //           start: {
  //             dateTime: "2020-06-28T09:00:00-07:00",
  //             timeZone: "America/Los_Angeles"
  //           },
  //           end: {
  //             dateTime: "2020-06-28T17:00:00-07:00",
  //             timeZone: "America/Los_Angeles"
  //           },
  //           recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
  //           attendees: [
  //             { email: "lpage@example.com" },
  //             { email: "sbrin@example.com" }
  //           ],
  //           reminders: {
  //             useDefault: false,
  //             overrides: [
  //               { method: "email", minutes: 24 * 60 },
  //               { method: "popup", minutes: 10 }
  //             ]
  //           }
  //         };

  //         var request = gapi.client.calendar.events.insert({
  //           calendarId: "primary",
  //           resource: event
  //         });

  //         request.execute((event) => {
  //           console.log(event);
  //           window.open(event.htmlLink);
  //         });

  //         /*
  //           Uncomment the following block to get events
  //       */

  //         // get events
  //         gapi.client.calendar.events
  //           .list({
  //             calendarId: "primary",
  //             timeMin: new Date().toISOString(),
  //             showDeleted: false,
  //             singleEvents: true,
  //             maxResults: 10,
  //             orderBy: "startTime"
  //           })
  //           .then((response) => {
  //             const events = response.result.items;
  //             console.log("EVENTS: ", events);
  //           });
  //       });
  //   });
  //   };
  // const[date, setdate] = useState(new Date());
  // const set=(e)=>{
  //   setdate(e.target.value);
  // }
  return (
    <>
      <header>
        <button id="log">Log out</button>
      </header>
      <form>
        <p>Meeting Room Booking</p>
        <fieldset>
          <legend>Meeting Room</legend>
          <select>
            <option value="0">--select--</option>
            <option value="1">Training Room</option>
            <option value="2">Conference Room </option>
          </select>
        </fieldset>
        <br />
        <br />
        <fieldset>
          <legend>Name</legend>
          <input type="text" placeholder="Enter Your Name" />
        </fieldset>
        <br />
        <br />
        <fieldset>
          <legend>Meeting Description</legend>
          <input type="text" placeholder="Enter Meeting Description" />
        </fieldset>
        <br />
        <br />
      </form>
      <div className="calendar">
        <CalendarComponent isMultiSelection={true} />
        {/* <Calendar/> */}
      </div>
      <p>Please Select your preferred slot</p>
      <div className="btns">
        <div className="grid-item">10:00</div>
        <div className="grid-item">10:30</div>
        <div className="grid-item">11:00</div>
        <div className="grid-item">11:30</div>
        <div className="grid-item">12:00</div>
        <div className="grid-item">12:30</div>
        <div className="grid-item">01:00</div>
        <div className="grid-item">01:30</div>
        <div className="grid-item">02:00</div>
        <div className="grid-item">02:30</div>
        <div className="grid-item">03:00</div>
        <div className="grid-item">03:30</div>
        <div className="grid-item">04:00</div>
        <div className="grid-item">04:30</div>
        <div className="grid-item">05:00</div>
        <div className="grid-item">05:30</div>
        <div className="grid-item">06:00</div>
        <div className="grid-item">06:30</div>
      </div>
      <div className="grid-item18">07:00</div>
      <br />
      <br />
      <footer>
        <button id="cal" onClick={handleClick}>
          Book Appointment
        </button>
      </footer>
    </>
  );
}
