import React from "react";

function WelcomeMessage() {
  const current = new Date().getHours();
  const name = "Shreya";
  let Greetings;

  if (current >= 0 && current <= 11) {
    Greetings = "Goodn Morning";
  } else if (current >= 12 && current <= 16) {
    Greetings = "Good Afternoon";
  } else if (current >= 17 && current <= 23) {
    Greetings = "Good Evening";
  }

  return (
    <div className="welcome-message">
      <h3>{Greetings}</h3>
      <p>Hello, {name}!</p>
      <p>
        <strong>Current hour: </strong>
        {current}
      </p>
      <p>Keep learning and build amazing things!</p>
    </div>
  );
}

export default WelcomeMessage;
