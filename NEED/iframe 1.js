      function sendMessage() {
        const chatiframe = document.getElementById('chatiframe');
        const message = {
          name: document.getElementById("name").value,
          address: document.getElementById("address").value,
          number: document.getElementById("number").value
        };
        // Set cookies with message data
        document.cookie = "name=" + message.name;
        document.cookie = "address=" + message.address;
        document.cookie = "number=" + message.number;
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