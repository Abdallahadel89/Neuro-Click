import React, { useEffect, useState } from "react";
import "../styles/chat.css";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

function Chat() {
  //declrations
  const [message, setmessage] = useState("");
  const messageRef = collection(db, "messages");
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    const queryMessage = query(messageRef, orderBy("createdAt"));
    const unsubscribec = onSnapshot(queryMessage, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setmessages(messages);
    });

    return () => unsubscribec();
  }, []);

  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message === "") return;
    await addDoc(messageRef, {
      text: message,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      photo: auth.currentUser.photoURL,
    });
    setmessage("");
  };

  return (
    <>
      {/* <div>
      <div class="chat-container">
        {messages.map((message) =>
          message.user != localStorage.getItem("name") ? (
            <div className="message-containerreseved text-start">
              <div class="user-photo mx-2 my-4">
                <img src={message.photo} alt="" />
              </div>

              <div class="message-details border-0">
                <div className="message-user ">{message.user}</div>
                <div class="message message-received rounded-4">
                  {message.text}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="message-containersent  text-end">
                <div class="message-details">
                  <div className="message-user ">{message.user}</div>
                  <div class="message message-sent rounded-4 ">
                    {message.text}
                  </div>
                </div>
                <div class="user-photo mx-2 my-4">
                  <img src={message.photo} alt="" />
                </div>
              </div>
            </>
          )
        )}

        <div className="input-container">
          <form action="" className="input-container" onSubmit={handleSubmit}>
            <input
              class="input-field rounded-4"
              type="text"
              placeholder="Type your message here"
              onChange={(e) => setmessage(e.target.value)}
              value={message}
            />
            <button
              type="submit"
              className="rounded-5 border-0 mx-1 fs-5 chat-submit"
            >
              <i class="fa-solid fa-circle-arrow-right fa-2x"></i>{" "}
            </button>
          </form>
        </div>
      </div>
      </div> */}

      <main class="content">
        <div class="container p-0">
          <h1 class="h3 mb-3"></h1>

          <div class="card my-5"   >
            
              <div class="col-12  ">
         
                <div class="position-relative">
                  
                  <div class="chat-messages p-4">
                    

                  {messages.map((message) =>
          message.user === localStorage.getItem("name") ? (<div class="chat-message-right pb-4 ">
          <div>
          
            <div class="text-muted small text-nowrap mt-2">
              2:33 am
            </div>
          </div>
          <div class="flex-shrink-1 blue-background rounded py-2 px-3 mr-3">
            <div class="font-weight-bold mb-1">{message.user}</div>
            {message.text}
          </div>
        </div>   ) : (
              <div class="chat-message-left pb-4">
                      <div>
                      
                        <div class="text-muted small text-nowrap mt-2">
                          {console.log( new Date(message.createdAt.seconds *1000) )}
                        2:30
                        </div>
                      </div>
                      <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div class="font-weight-bold mb-1">{message.user}</div>
                        {message.text}
                      </div>
                    </div>

                ) )}
                
            
               


               
                  </div>
                </div>

                <div class="flex-grow-0 py-3 px-4 border-top">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Type your message"
                      onChange={(e) => setmessage(e.target.value)}
                      value={message}
                    />
                    <button class="btn btn-primary" onClick={handleSubmit}> Send </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}
export default Chat;
