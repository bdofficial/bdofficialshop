const search = document.getElementById("search");
const productNames = document.querySelectorAll(".product-details h3");

search.addEventListener("input", event => {
  const searchText = event.target.value.trim().toLowerCase();

  productNames.forEach(product => {
    const itemName = product.textContent.toLowerCase();
    const productItem = product.closest(".products");

    if (itemName.includes(searchText)) {
      productItem.classList.remove("hidden");
    } else {
      productItem.classList.add("hidden");
    }
  });
});
/////////////////////////
/////dynamic-page content
const navItems = document.getElementsByClassName('nav-item');
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', () => {
    for (let j = 0; j < navItems.length; j++)
      navItems[j].classList.remove('active');
    navItems[i].classList.add('active');
  });
}
////////
//////////dynamic---pages
// একটি নির্দিষ্ট পৃষ্ঠায় নেভিগেট করুন।using id
const navigateTo = target => {
  const pages = Array.from(document.querySelectorAll('.page'))
  // সমস্ত পৃষ্ঠাতে লুকান।
  pages.forEach(page => page.classList.add('hidden'))
  // লক্ষ্যযুক্ত পৃষ্ঠা থেকে লুকান অপসারণ করুন।
  document.querySelector(`#${target}`).classList.remove('hidden')
}

const buttons = Array.from(document.querySelectorAll('.footer-item'))
buttons.forEach(button => {
  // প্রতিটি বাটনের ক্লিকের জন্য শুনুন।
  button.addEventListener('click', () => {
    navigateTo(button.getAttribute('data-target'))
    // আমরা যে লিঙ্কে আছি তা হাইলাইট করুন।
    buttons.forEach(button => button.classList.remove('active'))
    button.classList.add('active')
  })
});
