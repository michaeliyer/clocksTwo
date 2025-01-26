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
  updateClock("mountainTime", "America/Denver", "Mountain Time");
  updateClock("pacificTime", "America/Los_Angeles", "Pacific Time");
  updateClock("alaskaTime", "America/Anchorage", "Alaska Time");
  updateClock("hawaiiTime", "Pacific/Honolulu", "Hawaii Time");
}

// Start the clock updates
setInterval(updateAllClocks, 1000);
updateAllClocks(); // Initial call

// Function to format and display the current date
function displayCurrentDate(zoneId, timeZone) {
  const now = new Date();
  const localizedDate = new Date(
    now.toLocaleString("en-US", { timeZone })
  );

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = localizedDate.toLocaleDateString("en-US", options);

  const dateElement = document.querySelector(`#${zoneId} .currentDate`);
  if (dateElement) {
    dateElement.textContent = formattedDate;
  }
}

// Function to update dates for all time zones
function updateDatesForAllZones() {
  displayCurrentDate("easternTime", "America/New_York");
  displayCurrentDate("centralTime", "America/Chicago");
  displayCurrentDate("mountainTime", "America/Denver");
  displayCurrentDate("pacificTime", "America/Los_Angeles");
  displayCurrentDate("alaskaTime", "America/Anchorage");
  displayCurrentDate("hawaiiTime", "Pacific/Honolulu");
}

// Run the function once and refresh the date every 1 minute
updateDatesForAllZones();
setInterval(updateDatesForAllZones, 60000); // Update every 60 seconds





// Function to calculate the countdown to a specific date
function calculateCountdownToDate(targetDate, timeZone) {
  const now = new Date();
  const localizedNow = new Date(
    now.toLocaleString("en-US", { timeZone })
  );

  const diff = new Date(targetDate) - localizedNow; // Milliseconds to target date
  if (diff <= 0) return "00:00:00"; // Countdown complete

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${days}d ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Function to update the countdown for a specific date
function updateCountdownToDate(zoneId, timeZone, targetDate, label) {
  const countdownElement = document.querySelector(`#${zoneId} .countdownToDate`);
  if (countdownElement) {
    countdownElement.textContent = `${label}: ${calculateCountdownToDate(targetDate, timeZone)}`;
  }
}

// Function to update countdowns for all time zones
function updateCountdownsForAllZones() {
  const targetDate = "2028-11-07T00:00:00"; // Replace with your target date

  updateCountdownToDate("easternTime", "America/New_York", targetDate, "Election 2028");
  updateCountdownToDate("centralTime", "America/Chicago", targetDate, "Election 2028");
  updateCountdownToDate("mountainTime", "America/Denver", targetDate, "Election 2028");
  updateCountdownToDate("pacificTime", "America/Los_Angeles", targetDate, "Election 2028");
  updateCountdownToDate("alaskaTime", "America/Anchorage", targetDate, "Election 2028");
  updateCountdownToDate("hawaiiTime", "Pacific/Honolulu", targetDate, "Election 2028");
}

// Run the countdown function every second
updateCountdownsForAllZones();
setInterval(updateCountdownsForAllZones, 1000);