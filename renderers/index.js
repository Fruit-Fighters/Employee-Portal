  document.getElementById('logout').onclick = () => {
    window.electronAPI.logOut();
  };
  
  document.getElementById('secured-request').onclick = async () => {
    try {
      const response = await window.electronAPI.getPrivateData();
      const messageJumbotron = document.getElementById('message');
      messageJumbotron.innerText = response;
      messageJumbotron.style.display = 'block';
    } catch(error) {
      console.error('Error connecting to te API: ' + error);
    }
  };
  var datetime = new Date().toDateString();
console.log(datetime);
document.getElementById("time").textContent = datetime;