function checkCredentials() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  if (username === 'user' && password === 'user') {
    document.getElementById('downloadButton').style.display = 'block'; // Show button on successful login
  } else {
    alert('Incorrect username or password!');
    document.getElementById('downloadButton').style.display = 'none'; // Hide button on failed login
  }
}

function downloadFile() {
  var a = document.createElement('a');
  a.href = 'ODRS.rar'; // Adjust the file path accordingly
  a.download = 'ODRS.rar'; // Specify the filename to save as
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
