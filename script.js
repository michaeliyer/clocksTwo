// Function to format time in "HH:MM:SS" format
function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Function to calculate the countdown to midnight
function calculateCountdownToMidnight(timeZone) {
  const now = new Date();
  const localizedTime = new Date(
    now.toLocaleString("en-US", { timeZone })
  );

  const midnight = new Date(localizedTime);
  midnight.setHours(24, 0, 0, 0); // Set to midnight

  const diff = midnight - localizedTime; // Difference in milliseconds
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Function to update the time and countdown for a specific time zone
function updateClock(zoneId, timeZone, label) {
  const now = new Date();
  const localizedTime = new Date(
    now.toLocaleString("en-US", { timeZone })
  );

  // Update the current time
  const currentTimeElement = document.querySelector(`#${zoneId} .currentTime`);
  currentTimeElement.textContent = `${label}: ${formatTime(localizedTime)}`;

  // Update the countdown to midnight
  const countdownElement = document.querySelector(`#${zoneId} .countdownToMidnight`);
  countdownElement.textContent = `Countdown to Midnight: ${calculateCountdownToMidnight(timeZone)}`;
}

// Function to update all clocks dynamically
function updateAllClocks() {
  updateClock("easternTime", "America/New_York", "Eastern Time");
  updateClock("centralTime", "America/Chicago", "Central Time");
  updateClock("pacificTime", "America/Los_Angeles", "Pacific Time");
}

// Start the clock updates
setInterval(updateAllClocks, 1000);
updateAllClocks(); // Initial call