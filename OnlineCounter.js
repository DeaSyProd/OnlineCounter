(function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.myjson.com/bins/10gjeb', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var onlineCount = JSON.parse(xhr.responseText).onlineCount;
      var div = document.createElement('div');
      div.innerHTML = 'Online: ' + onlineCount;
      div.style.position = 'absolute';
      div.style.bottom = '0';
      div.style.right = '0';
      div.style.background = 'white';
      div.style.padding = '10px';
      document.body.appendChild(div);
    }
  };
  xhr.send();
})();
