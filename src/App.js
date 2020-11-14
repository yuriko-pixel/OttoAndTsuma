import "./App.css";
import NoEmails from "./images/logo.png";
import Search from "./images/icon_search.svg";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

function App() {
  // compare the from and put them in order
  function compareFrom(a, b) {
    if (a.from < b.from) {
      console.log(emails[1].from);
      return -1;
    }
    if (a.from > b.from) {
      console.log(emails[1].from);
      return 1;
    }
    return 0;
  }
  // compare the to and put them in order
  function compareTo(a, b) {
    if (a.to < b.to) {
      console.log(emails[1].to);
      return -1;
    }
    if (a.to > b.to) {
      console.log(emails[1].to);
      return 1;
    }
    return 0;
  }
  // compare the subjects and put them in order
  function compareSubject(a, b) {
    if (a.subject < b.subject) {
      console.log(emails[1].subject);
      return -1;
    }
    if (a.subject > b.subject) {
      console.log(emails[1].subject);
      return 1;
    }
    return 0;
  }

  // date functions
  // let fakeTime = "Fri Nov 13 2020 09:28:14 GMT+0900 (Japan Standard Time)";
  function changeTime() {
    // let array = fakeTime.split(" ");
    // switch (array[1]) {
    //   case "Nov":
    //     array[1] = "11";
    //     break;
    //   case "Jan":
    //     array[1] = "1";
    //     break;
    //   default:
    //     break;
    // }
    // array = array.splice(1, 4);
    // console.log(array);
    // fakeTime = array.join(" ");
    // let now = new Date();
    // console.log(now);
    // return fakeTime.toString();
    return "Bob"
  }
  // end of date functions

  // Calender
  const [value, onChange] = useState(new Date());
  // Emails (With no server)
  const [emails, setEmails] = useState([
    {
      from: "aaa@exmaple.com",
      to: "zzz@example.com",
      subject: "Second Email",
      date: "Nov 13 2020 08:59:31",
    },
    {
      from: "ddd@exmaple.com",
      to: "eee@example.com",
      subject: "Third Email",
      date: changeTime(),
    },
    {
      from: "bbb@exmaple.com",
      to: "ccc@example.com",
      subject: "First Email",
      date: "Nov 12 2020 08:59:31",
    },
  ]);
  // Display results (amount of emails)
  let resultsLength = emails.length;
  // Search function to look for emails from the dates
  const SearchClick = (e) => {
    e.preventDefault();
    console.log(value);
  };
  let testing = [
    {
      from: "aaa@exmaple.com",
      to: "zzz@example.com",
      subject: "Second Email",
      date: "Nov 13 2020 08:59:31",
    },
    {
      from: "ddd@exmaple.com",
      to: "eee@example.com",
      subject: "Third Email",
      date: changeTime(),
    },
    {
      from: "bbb@exmaple.com",
      to: "ccc@example.com",
      subject: "First Email",
      date: "Nov 12 2020 08:59:31",
    },
  ];
  function MessagesList ({value}) {
    let listEmails = value.map((items, index) => (
      <ol className="EmailOL">
        <li
          className="Email"
          key={items.from.toString()}
          onClick={() => console.log(index)}
        >
          {items.from}
        </li>
        <li className="Email" key={items.to.toString()}>
          {items.to}
        </li>
        <li className="Email" key={items.subject.toString()}>
          {items.subject}
        </li>
        <li className="Email" key={items.date.toString()}>
          {items.date}
        </li>
      </ol>
    ));
    return (
      <ul>
        <ol className="EmailTitles" id="emailTitles" >
          <li
            key ="from"
            className="Title"
            id="title"
            onClick={() => setEmails(emails.sort(compareFrom))}
          >
            From
          </li>
          <li
          key ="to"
            className="Title"
            id="title"
            onClick={() => setEmails(emails.sort(compareTo))}
          >
            To
          </li>
          <li
          key ="subject"
            className="Title"
            id="title"
            onClick={() => setEmails(emails.sort(compareSubject))}
          >
            Subject
          </li>
          <li
          key ="date"
            className="Title"
            id="title"
            onClick={() => console.log("Date")}
          >
            Date
          </li>
        </ol>
        {listEmails}
      </ul>
    );
  };
  // Make a list of emails
  if (emails.length > 0) {
    return (
      <div className="App">
        <div className="Dates">
          <form onSubmit={SearchClick} className="search-form">
            {/* reaplce input with calander input */}
            <div>
              {" "}
              <Calendar onChange={onChange} value={value} />
            </div>
            <button className="Search-Container">
              <img className="Search" src={Search} alt="Search" type="submit" />
            </button>
          </form>
          {/* Search end */}
        </div>
        {/* Dates end */}
        <div className="Results">
          <p>Results: {resultsLength}mail(s)</p>
        </div>
        {/* Results end */}
        <div className="Emails">
          <MessagesList value={emails} />
        </div>
        {/* Emails end */}
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="Dates">
          <div className="Calender">
            <p>Calender</p>
          </div>
          {/* Calender end */}
          <div className="Search">
            <p>Search</p>
          </div>
          {/* Search end */}
        </div>
        {/* Dates end */}
        <div className="Results">
          <p>Results: {resultsLength}mail(s)</p>
        </div>
        {/* Results end */}
        <div className="NoEmails">
          <img className="EmailImage" src={NoEmails} alt="No-Emails" />
        </div>
        {/* Emails end */}
      </div>
    );
  }
}

export default App;
