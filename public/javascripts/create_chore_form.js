console.log("SCRIPT LOADED");

document.getElementById('addReminderBtn').addEventListener('click', function() {
  var container = document.getElementById('remindersContainer');
  var lastReminderInput = container.lastElementChild.querySelector('input[name="reminders"]');
  var lastReminderValue = lastReminderInput.value.trim();

  if (lastReminderValue !== '') {
    var newDiv = document.createElement('div');
    newDiv.classList.add('reminder-input');
    newDiv.innerHTML = '<label for="reminders">Reminders:</label>' +
                       '<input type="text" name="reminders" class="reminder" required>';
    container.appendChild(newDiv);
  } else {
    alert('Please fill in the previous reminder input before adding a new one.');
  }
});