import "./App.css";
import NoEmails from "./images/logo.png";
import Search from "./images/icon_search.svg";
import React, { useState, useEffect } from "react";
import styles from "./styles/main.module.scss";
import emailimg from "./images/icon_mail_sp.svg";

function App() {
  // compare the from and put them in order
  function compareFrom(a, b) {
    changes = changes + 1;
    if (a.from < b.from) {
      // console.log(emails[1].from);
      return -1;
    }
    if (a.from > b.from) {
      // console.log(emails[1].from);
      return 1;
    }
    return 0;
  }
  // compare the to and put them in order
  function compareTo(a, b) {
    if (a.to < b.to) {
      // console.log(emails[1].to);
      return -1;
    }
    if (a.to > b.to) {
      // console.log(emails[1].to);
      return 1;
    }
    return 0;
  }
  // compare the subjects and put them in order
  function compareSubject(a, b) {
    if (a.subject < b.subject) {
      // console.log(emails[1].subject);
      return -1;
    }
    if (a.subject > b.subject) {
      // console.log(emails[1].subject);
      return 1;
    }
    return 0;
  }
  function compareDate(a, b) {
    let ArrayA = a.date.split(" ").splice(1, 4);
    switch (ArrayA[0]) {
      case "Jan":
        ArrayA[0] = "01";
        break;
      case "Feb":
        ArrayA[0] = "02";
        break;
      case "Mar":
        ArrayA[0] = "03";
        break;
      case "Apr":
        ArrayA[0] = "04";
        break;
      case "May":
        ArrayA[0] = "05";
        break;
      case "Jun":
        ArrayA[0] = "06";
        break;
      case "Jul":
        ArrayA[0] = "07";
        break;
      case "Aug":
        ArrayA[0] = "08";
        break;
      case "Sep":
        ArrayA[0] = "09";
        break;
      case "Oct":
        ArrayA[0] = "10";
        break;
      case "Nov":
        ArrayA[0] = "11";
        break;
      case "Dec":
        ArrayA[0] = "12";
        break;
      default:
        return;
    }
    ArrayA = ArrayA.join(" ");
    let ArrayB = b.date.split(" ").splice(1, 4);
    switch (ArrayB[0]) {
      case "Jan":
        ArrayB[0] = "01";
        break;
      case "Feb":
        ArrayB[0] = "02";
        break;
      case "Mar":
        ArrayB[0] = "03";
        break;
      case "Apr":
        ArrayB[0] = "04";
        break;
      case "May":
        ArrayB[0] = "05";
        break;
      case "Jun":
        ArrayB[0] = "06";
        break;
      case "Jul":
        ArrayB[0] = "07";
        break;
      case "Aug":
        ArrayB[0] = "08";
        break;
      case "Sep":
        ArrayB[0] = "09";
        break;
      case "Oct":
        ArrayB[0] = "10";
        break;
      case "Nov":
        ArrayB[0] = "11";
        break;
      case "Dec":
        ArrayB[0] = "12";
        break;
      default:
        return;
    }
    ArrayB = ArrayB.join(" ");
    console.log(parseInt(ArrayB));
    if (ArrayA < ArrayB) {
      // console.log(emails[1].subject);
      return 1;
    }
    if (ArrayA > ArrayB) {
      // console.log(emails[1].subject);
      return -1;
    }
    return 0;
  }

  function convertToYYYMMDD(props) {
    props = props.split(" ").splice(1, 3);
    switchCases(props);
    props.splice(3);
    const newProps = ["YYYY", "/", "MM", "/", "DD"];
    newProps[0] = props[2];
    newProps[2] = props[0];
    newProps[4] = props[1];
    return newProps.join("");
  }

  function switchCases(monthArray) {
    switch (monthArray[0]) {
      case "Jan":
        monthArray[0] = "01";
        break;
      case "Feb":
        monthArray[0] = "02";
        break;
      case "Mar":
        monthArray[0] = "03";
        break;
      case "Apr":
        monthArray[0] = "04";
        break;
      case "May":
        monthArray[0] = "05";
        break;
      case "Jun":
        monthArray[0] = "06";
        break;
      case "Jul":
        monthArray[0] = "07";
        break;
      case "Aug":
        monthArray[0] = "08";
        break;
      case "Sep":
        monthArray[0] = "09";
        break;
      case "Oct":
        monthArray[0] = "10";
        break;
      case "Nov":
        monthArray[0] = "11";
        break;
      case "Dec":
        monthArray[0] = "12";
        break;
      default:
        return;
    }
  }

  function covertTonewDate(props) {
    return new Date(props);
  }

  // date functions
  // let fakeTime = "Fri Nov 13 2020 09:28:14 GMT+0900 (Japan Standard Time)";
  function calcDate(emailDate) {
    let dateArr = emailDate.split(" ");
    switch (dateArr[1]) {
      case "Jan":
        dateArr[1] = "01";
        break;
      case "Feb":
        dateArr[1] = "02";
        break;
      case "Mar":
        dateArr[1] = "03";
        break;
      case "Apr":
        dateArr[1] = "04";
        break;
      case "May":
        dateArr[1] = "05";
        break;
      case "Jun":
        dateArr[1] = "06";
        break;
      case "Jul":
        dateArr[1] = "07";
        break;
      case "Aug":
        dateArr[1] = "08";
        break;
      case "Sep":
        dateArr[1] = "09";
        break;
      case "Oct":
        dateArr[1] = "10";
        break;
      case "Nov":
        dateArr[1] = "11";
        break;
      case "Dec":
        dateArr[1] = "12";
        break;
      default:
        return;
    }
    // console.log(dateArr[3] + "/" + dateArr[1] + "/" + dateArr[2]);
    let dateFormatted = new Date(
      dateArr[3] + "/" + dateArr[1] + "/" + dateArr[2]
    );
    let today = new Date();
    // console.log(
    //   today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate()
    // );
    today = new Date(
      today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate()
    );
    // console.log(Math.ceil((today - dateFormatted) / 86400000));
    let dateDiff = (today - dateFormatted) / 86400000;

    let splitDate = dateFormatted.toString().split(" ");

    return dateDiff > 365
      ? dateArr[3] + "/" + dateArr[1] + "/" + dateArr[2]
      : dateDiff > 1
      ? splitDate[1] + " " + splitDate[2]
      : dateArr[4].substring(0, dateArr[4].length - 3);
  }

  // end of date functions
  // Calender
  // const [value, onChange] = useState(new Date());
  // Emails
  const [emails, setEmails] = useState([]);

  // Emails Initial State
  const allEmails = [
    {
      from: "aaa@exmaple.com",
      to: "zzz@example.com",
      subject: "Fourth Email",
      date: "Sun Nov 01 2020 00:00:00 GMT+0900 (Japan Standard Time)",
      attachment: false,
    },
    {
      from: "aaa@exmaple.com",
      to: "zzz@example.com",
      subject: "Second Email",
      date: "Sun Nov 14 2020 02:00:00 GMT+0900 (Japan Standard Time)",
      attachment: false,
    },
    {
      from: "ddd@exmaple.com",
      to: "eee@example.com",
      subject: "Third Email",
      date: "Sat Nov 07 2020 00:00:00 GMT+0900 (Japan Standard Time)",
      attachment: false,
    },
    {
      from: "bbb@exmaple.com",
      to: "ccc@example.com",
      subject: "First Email",
      date: "Wed Aug 08 2018 00:00:00 GMT+0900 (Japan Standard Time)",
      attachment: false,
    },
    {
      from: "HarryPotter@exmaple.com",
      to: "RonWeasley@example.com",
      subject: "Gingers monthly has a picture of you!",
      date: "Wed Aug 08 2018 00:00:00 GMT+0900 (Japan Standard Time)",
      attachment: true,
    },
    {
      from: "HermioneGranger@exmaple.com",
      to: "RonWeasley@example.com",
      subject: "Do you remeber our first date?",
      date: "Wed Aug 08 2018 00:00:00 GMT+0900 (Japan Standard Time)",
      attachment: false,
    },
    {
      from: "Hagrid@exmaple.com",
      to: "All@example.com",
      subject: "Please stop drawing faces on all the pumpkins.",
      date: "Wed Aug 08 2018 00:00:00 GMT+0900 (Japan Standard Time)",
      attachment: false,
    },
    {
      from: "Dumbledore@exmaple.com",
      to: "HarryPotter@example.com",
      subject: "Guess whos back!",
      date: "Wed Aug 08 2018 00:00:00 GMT+0900 (Japan Standard Time)",
      attachment: true,
    },
    {
      from: "GinnyWeasley@exmaple.com",
      to: "RonWeasley@example.com",
      subject: "Have you seen my shoes?",
      date: "Wed Aug 08 2018 00:00:00 GMT+0900 (Japan Standard Time)",
      attachment: false,
    },
    {
      from: "LunaLovegood@exmaple.com",
      to: "GinnyWeasley@example.com",
      subject: "The Quibbler, 50% off!",
      date: "Wed Aug 08 2018 00:00:00 GMT+0900 (Japan Standard Time)",
      attachment: true,
    },
    {
      from: "DracoMalfoy@exmaple.com",
      to: "HarryPotter@example.com",
      subject: "Pub?",
      date: "Wed Aug 08 2018 00:00:00 GMT+0900 (Japan Standard Time)",
      attachment: false,
    },
  ];
  // Set the emails to be the incoming inital state
  useEffect(() => {
    setEmails(allEmails);
  }, []);
  // Display results (amount of emails)
  let resultsLength = emails.length;
  let changes = 0;
  // Search function to look for emails from the dates

  const CompareFrom = (emails) => {
    const newArr = emails.slice();
    newArr.sort(compareFrom);
    // console.log(newArr === emails);
    return newArr;
  };
  const CompareTo = (emails) => {
    const newArr = emails.slice();
    newArr.sort(compareTo);
    // console.log(newArr === emails);
    return newArr;
  };
  const CompareSubect = (emails) => {
    const newArr = emails.slice();
    newArr.sort(compareSubject);
    // console.log(newArr === emails);
    return newArr;
  };
  const CompareDate = (emails) => {
    const newArr = emails.slice();
    newArr.sort(compareDate);
    // console.log(newArr === emails);
    return newArr;
  };
  const SearchClick = (e) => {
    e.preventDefault();
    const placeHolder = [];
    for (let index = 0; index < allEmails.length; index++) {
      const WholeEmail = allEmails[index];
      const element = convertToYYYMMDD(allEmails[index].date);
      const StartDate = calander.split(" ")[0];
      const EndDate = calander.split(" ")[2];
      if ((element > StartDate && element < EndDate) || element === EndDate) {
        console.log("Match");
        placeHolder.push(WholeEmail);
      } else {
        console.log("No Match");
      }
    }
    setEmails(placeHolder);
  };
  const [calander, setCalander] = useState("1900/11/14 - 2020/11/14");
  const updateCalander = (e) => {
    console.log(e.target.value);
    setCalander(e.target.value);
  };

  function MessagesList({ value }) {
    let listEmails = value.map((items, index) => (
      <ol className={styles.EmailOL} key={Math.random()}>
        <div className={styles.flex}>
          <img className={styles.emailimg} src={emailimg} />
          <div className={styles.emailResultCon}>
            <li
              className={styles.FromCol}
              key={Math.random()}
              onClick={() => console.log(index)}
            >
              {items.from}
            </li>
            <li className={styles.ToCol} key={Math.random()}>
              {items.to}
            </li>
            <li className={styles.MessageSum} key={Math.random()}></li>
            <li className={styles.SubCol} key={Math.random()}>
              {items.subject}
            </li>
            <li className={styles.Attachment} key={Math.random()}></li>
            <li className={styles.DateCol} key={Math.random()}>
            {calcDate(items.date)}
            </li>
          </div>
        </div>
      </ol>
    ));
    return (
      <ul key={Math.random()}>
        <ol className={styles.EmailTitles} id="emailTitles" key={Math.random()}>
          <li
            key={Math.random()}
            className={styles.FromWidth}
            id="title"
            onClick={() => setEmails(CompareFrom(emails))}
          >
            From
          </li>
          <li
            key={Math.random()}
            className={styles.ToWidth}
            id="title"
            onClick={() => setEmails(CompareTo(emails))}
          >
            To
          </li>
          <li className={styles.MessageSum} key={Math.random()}></li>
          <li
            key={Math.random()}
            className={styles.SubWidth}
            id="title"
            onClick={() => setEmails(CompareSubect(emails))}
          >
            Subject
          </li>
          <li className={styles.Attachment} key={Math.random()}></li>
          <li
            key={Math.random()}
            className={styles.DateWidth}
            id="title"
            onClick={() => setEmails(CompareDate(emails))}
          >
            Date
          </li>
        </ol>
        {listEmails}
      </ul>
    );
  }
  // Make a list of emails
  if (emails.length > 0) {
    return (
      <div className={styles.App}>
        <div className={styles.Date}>
          <form onSubmit={SearchClick} className={styles.search_form}>
            {/* reaplce input with calander input */}
            <div>
              {" "}
              <input
                className="search-bar"
                type="text"
                value={calander}
                onChange={updateCalander}
              />
            </div>
            <button className={styles.Search_Container}>
              <img
                className={styles.Search}
                src={Search}
                alt="Search"
                type="submit"
              />
            </button>
          </form>
          {/* Search end */}
        </div>
        {/* Dates end */}
        <div className={styles.EmailContainer}>
          <div className={styles.Resultscon}>
            <div className={styles.results}>Results: </div>
            <div className={styles.resultslen}>{resultsLength}</div>
            <div className={styles.mailslen}>mail(s)</div>
          </div>
          {/* Results end */}
          <div className={styles.Emails}>
            <MessagesList value={emails} />
          </div>
        </div>
        {/* Emails end */}
      </div>
    );
  } else {
    return (
      <div className={styles.App}>
        <div className={styles.Dates}>
          <div className={styles.Calendar}>
            <form onSubmit={SearchClick} className="search-form">
              <div>
                {" "}
                <input
                  className="search-bar"
                  type="text"
                  value={calander}
                  onChange={updateCalander}
                />
              </div>
              <button className="Search-Container">
                <img
                  className="Search"
                  src={Search}
                  alt="Search"
                  type="submit"
                />
              </button>
            </form>
          </div>
          {/* Calender end */}
          <div className={styles.Search}>
            <p>Search</p>
          </div>
          {/* Search end */}
        </div>
        {/* Dates end */}
        <div className={styles.Results}>
          <p>Results: {resultsLength}mail(s)</p>
        </div>
        {/* Results end */}
        <div className={styles.NoEmails}>
          <img className={styles.EmailImage} src={NoEmails} alt="No-Emails" />
        </div>
        {/* Emails end */}
      </div>
    );
  }
}

export default App;
