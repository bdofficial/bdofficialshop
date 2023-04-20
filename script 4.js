
////////
/////////////////////////
/////dynamic-page content
const navItems = document.getElementsByClassName('nav-item');

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        for(let j = 0; j < navItems.length; j++) 
            navItems[j].classList.remove('active');
  
        navItems[i].classList.add('active');
    });
}
////////))
//////////dynamic---pages
// একটি নির্দিষ্ট পৃষ্ঠায় নেভিগেট করুন।using id
const navigateTo = target => {
  const pages = Array.from(document.querySelectorAll('.page'))
  // সমস্ত পৃষ্ঠাতে লুকান।
  pages.forEach(page => page.classList.add('hidden'))
  // লক্ষ্যযুক্ত পৃষ্ঠা থেকে লুকান অপসারণ করুন।
  document.querySelector(`#${target}`).classList.remove('hidden')
}

const buttons = Array.from(document.querySelectorAll('i'))
buttons.forEach(button => {
  // প্রতিটি বাটনের ক্লিকের জন্য শুনুন।
  button.addEventListener('click', () => {
    navigateTo(button.getAttribute('data-target'))
    // আমরা যে লিঙ্কে আছি তা হাইলাইট করুন।
    buttons.forEach(button => button.classList.remove('active'))
    button.classList.add('active')
  })
});
///aditem
  function addItem1() {
    document.querySelector("#myList").innerHTML += "SHOES"+"\n";
  }
  function addItem2() {
    document.querySelector("#myList").innerHTML += "CLOTHES"+"\n";
  }
  function addItem3() {
    document.querySelector("#myList").innerHTML += "ACCESSORIES" + "\n";
  }
  function addItem4() {
    document.querySelector("#myList").innerHTML += "SARI"+"\n";
  }
  function addItem5() {
    document.querySelector("#myList").innerHTML += "THREE-PICE"+"\n";
  }
  function addItem6() {
    document.querySelector("#myList").innerHTML += "PANJABI"+"\n";
  }
  function addItem7() {
    document.querySelector("#myList").innerHTML += "SARWANI"+"\n";
  }
  ////////
  ////))search products 
  function filterProducts() {
    // Get input value and convert to lowercase
    var input = document.getElementById('search').value.toLowerCase();
  
    // Get the list of products
    var products = document.getElementById('products').getElementsByTagName('li');
  
    // Loop through all products and hide those that don't match the search input
    for (var i = 0; i < products.length; i++) {
      var productName = products[i].textContent.toLowerCase();
  
      if (productName.indexOf(input) > -1) {
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    }
  }
  //////////
//////////////cart to message 
function copyTextarea() {
  var input = document.getElementById("myList").value;
  document.getElementById("my-input").value += input;
  submitMessage();
}
/////
///////////iframe chat & scrool
function submitMessage() {
  const iframe = document.getElementById('chatiframe');
  const message = document.getElementById('my-input').value;
  iframe.contentWindow.postMessage({ message }, '*');
  document.getElementById('my-input').value = "";
}
///////
////////////prevent submit chat
const myInput = document.getElementById('my-input');
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission
  myInput.value = '';
});
///////