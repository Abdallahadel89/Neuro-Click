import React, { useState, useEffect } from "react";
import "./calendar.css";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  deleteDoc,
  doc,
  where,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../component/firebaseConfig";
import AYes from "../ansers";

const Calendar = () => {
  
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [activeDay, setActiveDay] = useState(new Date().getDate());
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventTimeFrom, setEventTimeFrom] = useState(":00");
  const [eventTimeTo, setEventTimeTo] = useState("00:00");
  const [eventNote, setEventNote] = useState("");
  const [reminder, setremdinder] = useState("");
  const [repet, setrepet] = useState(false);
  const [taskid, setTaskID] = useState("");
  const [user, setuser] = useState(localStorage.getItem("email"));
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isCompleted, setIscompleted] = useState(false);
  const [tip,settip] = useState("");
  const [today, setToday] = useState(new Date());
  const [randomArray,setRandomArray] = useState([]);
  



  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setrepet(event.target.checked);
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const eventRef = collection(db, "task");
  const AnswersRef = collection(db, "Answers");

  
  const [tasks, settask] = useState([]);
  const [answers,setAnswers] = useState({});

  //getTasks
  useEffect(() => {
    const queryTask = query(
      eventRef,
      where("User", "==", localStorage.getItem("email"))
    );
    const unsubscribec = onSnapshot(queryTask, (snapshot) => {
      let tasks = [];
      snapshot.forEach((doc) => {
        tasks.push({ ...doc.data(), id: doc.id });
      });
      settask(tasks);
    });

    return () => unsubscribec();
  }, []);
  
  const [isADHD, setIsADHD] = useState(false);
  const [newAyes, setNewAyes] = useState({});
  //getAnswers
  useEffect(() => {
    const answersRef = collection(db, 'Answers');
    const queryAnswers = query(answersRef, where("email", "==", localStorage.getItem("email")));
  
    const unsubscribe = onSnapshot(queryAnswers, (snapshot) => {
      let answers = {};
      snapshot.forEach((doc) => {
        answers = {
          q4: doc.data().q4,
          q5: doc.data().q5,
          q6: doc.data().q6,
          q7: doc.data().q7,
          ADHD: doc.data().ADHD,
        };
      });
      setAnswers(answers);
  
      // Call updateAyesObject after setting answers
      updateAyesObject(answers);
    });
  
    return () => unsubscribe();
  }, [answers]);
  
  const updateAyesObject = (answers) => {
    let updatedAyes = {};
    let arrays = [];
  
    for (let i = 4; i <= 7; i++) {
      const yesKey = AYes[`yes${i}`][`A1`];
      const qkey = answers[`q${i}`];
      updatedAyes[`T${i}`] = AYes[`yes${i}`][qkey]; // Accessing the array based on qkey
      arrays.push(updatedAyes[`T${i}`]);
    }
    setRandomArray(arrays[0]); // Set randomArray with the first array in arrays
    setNewAyes(updatedAyes);
  };
  
  

  const selectDay = (day) => {
    setActiveDay(day);
  };

  const addRandomEvent = async (day) => {
    const eventNames = ["Meeting", "Workout", "Study Session", "Lunch", "Dinner", "Shopping"];
    const eventColors = ["red-event", "yellow-event", "blue-event"];
    const randomEventNote = randomArray[Math.floor(Math.random() * randomArray.length)];
    const randomColor = eventColors[Math.floor(Math.random() * eventColors.length)];
    const randomStartTime = `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;
    const randomEndTime = `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;

    await addDoc(eventRef, {
      title: "daily task",
      note: randomEventNote,
      reminder: "5",
      repet: false,
      color: randomColor,
      start: randomStartTime,
      end: randomEndTime,
      Date: day,
      User: localStorage.getItem("email"),
      completed: false,
    });
  };

  const addRandomEventForToday = async () => {
    const todayDate = new Date().toISOString().slice(0, 10);
    const storedDate = localStorage.getItem("eventAddedDate");

    if (storedDate !== todayDate) {
      await addRandomEvent(today.getDate());
      localStorage.setItem("eventAddedDate", todayDate);
    }
  };

  //add the random event in the tasks
  useEffect(() => {
    if (randomArray.length > 0) {

    addRandomEventForToday();
    }
  }, [randomArray]); // Runs once when the component mounts

  const initCalendar = () => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    const days = [];
    // Previous month days
    for (let x = day; x > 0; x--) {
      days.push(
        <div key={`prev-${x}`} className="day prev-date">
          {prevDays - x + 1}
        </div>
      );
    }

    // Current month days
    for (let i = 1; i <= lastDate; i++) {
      const isActive = i === activeDay;
      const isToday =
        i === new Date().getDate() &&
        year === new Date().getFullYear() &&
        month === new Date().getMonth();



      days.push(
        <div
          key={`current-${i}`}
          className={`day ${isActive ? "active" : ""} ${
            isToday ? "today" : ""
          } `}
          onClick={() => selectDay(i)}
        >
          {i}
        </div>
      );
    }

    // Next month days
    for (let j = 1; j <= nextDays; j++) {
      days.push(
        <div key={`next-${j}`} className="day next-date">
          {j}
        </div>
      );
    }

    return days;
  };
  const handlePrevMonth = () => {
    setMonth(month - 1);
    if (month < 0) {
      setMonth(11);
      setYear(year - 1);
    }
    initCalendar();
  };

  const handleNextMonth = () => {
    setMonth(month + 1);
    if (month > 11) {
      setMonth(0);
      setYear(year + 1);
    }
    initCalendar();
  };

  const handleGoToToday = () => {
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
    setActiveDay(new Date().getDate());
  };

  const handleAddEvent = () => {
    setShowAddEvent(true);
  };
  const handleClose = () => {
    setShowAddEvent(false);
  };

  const handleAddEventSubmit = async (e) => {
    e.preventDefault();
    await addDoc(eventRef, {
      title: eventName,
      note: eventNote,
      reminder: reminder,
      repet: repet,
      color: selectedRadio,
      start: eventTimeFrom,
      end: eventTimeTo,
      Date: activeDay,
      User: localStorage.getItem("email"),
      completed: false,
    });
    handleClose();
    console.log(tasks);
    setEventName("");
    setEventNote("");
    setEventTimeFrom("00:00");
    setEventTimeTo("00:00");
  };
  const getDayOfWeek = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[new Date(year, month, date).getDay()];
  };

  const handleDeleteEvent = async (h) => {
    const docRef = doc(db, "task", h.id);
    await deleteDoc(docRef).then(() => {
      console.log("deleted");
      console.log(docRef);
    });
  };
  const handleCompleted = async (h) => {
    const docRef = doc(db, 'task', h.id);
    const newCompletedStatus = !isCompleted;

try {
    setIscompleted(newCompletedStatus);

    await updateDoc(docRef, {
      completed: newCompletedStatus, // Update completed field in the database
    });
  } catch(error){
    console.log(error)
  }
  };
  
 

  return (
    <div className="back">
      <div className="calnder-container">
        <div className="left">
          <div className="calendar">
            <div className="month">
            
              <div className="date "  >
                {months[month]} {year}
              </div>
            </div>
            <div className="weekdays">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="days">{initCalendar() }</div>
            <div className="goto-today">
              <div className="goto">
                <input
                  type="text"
                  placeholder="mm/yyyy"
                  className="date-input"
                />
                <button className="goto-btn">Go</button>
              </div>
              <button className="today-btn" onClick={updateAyesObject}>
                Today
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="today-date">
            <div className="event-day">{getDayOfWeek(activeDay)}</div>
            <div className="event-date">
              {activeDay} {months[month]} {year}
            </div>
          </div>
          <div className="events ">
            {tasks
              .filter((event) => {
                if (event.repet === true) {
                  // If the event should repeat, do not filter by activeDay, only by userName
                  return;
                } else {
                  // Otherwise, filter by both activeDay and userName
                  return event.Date === activeDay;
                }
              })
              .map((event) => (
                <div key={event.id} className={`event ${event.color}`}>
                  <div className="title">{event.title}</div>
                  <div className="event-time">{event.note}</div>
                  <div
                    className="event-time d-flex "
                    style={{ justifyContent: "space-between" }}
                  >
                    {event.start} - {event.end}
                    <i
                      onClick={() => handleDeleteEvent(event)}
                      className="fa-solid fa-trash-can"
                    ></i>
                    <i
                    onClick={()  => handleCompleted(event)}
                      
                      className="fa-solid fa-check"
                    ></i>
                  </div>
                </div>
              ))}
           
          </div>
          {showAddEvent && (
            <div className="add-event-wrapper">
              <div className="add-event-header">
                <div className="title">Add Event</div>

                <i className="fas fa-times close" onClick={handleClose}></i>
              </div>
              <div className="add-event-body">
                <div className="add-event-input">
                  <input
                    type="text"
                    placeholder="Event Name"
                    className="event-name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                </div>
                <div className="add-event-input my-2">
                  <input
                    type="text"
                    placeholder="Note"
                    className="event-name"
                    value={eventNote}
                    onChange={(e) => setEventNote(e.target.value)}
                  />
                </div>

                <div className="add-event-input my-2">
                  <label htmlFor="" className="text-dark">
                    {" "}
                    time From{" "}
                  </label>
                  <input
                    type="time"
                    placeholder="Event Time From"
                    className="event-time-from"
                    value={eventTimeFrom}
                    onChange={(e) => setEventTimeFrom(e.target.value)}
                  />
                </div>
                <div className="add-event-input my-2">
                  <label htmlFor="" className="text-dark">
                    {" "}
                    time Till{" "}
                  </label>
                  <input
                    type="time"
                    placeholder="Event Time Till"
                    className="event-time-to"
                    value={eventTimeTo}
                    onChange={(e) => setEventTimeTo(e.target.value)}
                  />
                </div>
                <div className="add-event-input my-2">
                  <select
                    onChange={(e) => setremdinder(e.target.value)}
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Remind</option>
                    <option value="5 ">5 minutes early</option>
                    <option value="10 ">10 minutes early"</option>
                    <option value="15 ">15 minutes early"</option>
                  </select>
                </div>
                <div className="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    value={isChecked}
                  />
                  <label
                    class="form-check-label text-dark"
                    for="flexSwitchCheckDefault "
                  >
                    Repeat
                  </label>
                </div>
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input red"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="red-event"
                      checked={selectedRadio === "red-event"}
                      onChange={handleRadioChange}
                    />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input yellow"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      value="yellow-event"
                      checked={selectedRadio === "yellow-event"}
                      onChange={handleRadioChange}
                    />
                  </div>
                  <div className="form-check ">
                    <input
                      className="form-check-input blue"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="blue-event"
                      checked={selectedRadio === "blue-event"}
                      onChange={handleRadioChange}
                    />
                  </div>
                </div>
              </div>
              <div className="add-event-footer">
                <button
                  className="add-event-btn"
                  onClick={handleAddEventSubmit}
                >
                  Add event
                </button>
              </div>
            </div>
          )}
        </div>

        <button className="add-event" onClick={handleAddEvent}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default Calendar;
