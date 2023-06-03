      function sendMessage() {
        const chatiframe = document.getElementById('chatiframe');
        const message = {
          name: document.getElementById("name").value,
          address: document.getElementById("address").value,
          number: document.getElementById("number").value
        };
        // Set cookies with message data
        document.cookie = "name=" + message.name + "; max-age=157784630; secure";
        document.cookie = "address=" + message.address + "; max-age=157784630; secure";
        document.cookie = "number=" + message.number + "; max-age=157784630; secure";
        // Post message to iframe
        chatiframe.contentWindow.postMessage(message, "https://shop-chat-iframe.bdofficial.repl.co");
      }

      function receiveMessage(event) {
        if (event.origin === "https://shop-chat-iframe.bdofficial.repl.co") {
          const data = event.data;
          document.cookie = "name=" + data.name;
          document.cookie = "address=" + data.address;
          document.cookie = "number=" + data.number;
          updateInputFields();
        }
      }

      function updateInputFields() {
        const name = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        const address = document.cookie.replace(/(?:(?:^|.*;\s*)address\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        const number = document.cookie.replace(/(?:(?:^|.*;\s*)number\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        document.getElementById("name").value = name;
        document.getElementById("address").value = address;
        document.getElementById("number").value = number;
        ////////update iframe 
        document.getElementById("sendcookies").click();
        //////
      }
      
      window.addEventListener("message", receiveMessage, false);
 /////////onload
 window.onload = function () {
 updateInputFields();
 };
 //////
 ///////on message scroll
 const chatiframe = document.getElementById('chatiframe');
 const messa = document.getElementById('messa');
 messa.addEventListener('click', function() {
setTimeout(function() {
   chatiframe.contentWindow.postMessage('scrollToBottom', '*');
},300); 
 });
////////////