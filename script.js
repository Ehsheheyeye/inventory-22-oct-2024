// Display current date and time
window.onload = function() {
  setDateTime();
};

function setDateTime() {
  const dateElement = document.getElementById('current-date');
  const timeElement = document.getElementById('current-time');
  const hiddenDate = document.getElementById('hidden-date');
  const hiddenTime = document.getElementById('hidden-time');

  const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };

  const currentDate = new Date().toLocaleDateString('en-GB', dateOptions);
  const currentTime = new Date().toLocaleTimeString('en-US', timeOptions);

  dateElement.textContent = currentDate;
  timeElement.textContent = currentTime;

  // Set hidden inputs for submission
  hiddenDate.value = currentDate;
  hiddenTime.value = currentTime;
}

function viewAllRecords() {
  window.open("https://docs.google.com/spreadsheets/d/1KyoX5Xg_2ZbNLpYb-qXoJsueM6UPRaHu2HPtbRQRDQs/edit?gid=0#gid=0", "_blank");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxA0CBKtwciaYEohXbD3wF9i7hwON0Umk1kdXXX-1IVZYFK1Izqr9_L3BKpunhFL3QJ/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  setDateTime();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      alert("Data has been successfully submitted!");
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
