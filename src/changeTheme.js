
const checbox = document.querySelector('.theme-switch__toggle')
checbox.addEventListener('change', function (e) {
  if (e.target.checked) {
    document.body.classList.toggle("dark-theme")
    document.body.classList.remove("light-theme")
    localStorage.setItem('checkbox',"dark-theme")
    // data = localStorage.getItem('checkbox');
    // const parse = JSON.parse(data);
    // value = parse.checked;
  } else {
    document.body.classList.toggle("light-theme")
    document.body.classList.remove("dark-theme")
    localStorage.setItem('checkbox',"light-theme")
    // data = localStorage.getItem('checkbox');
    // const parse = JSON.parse(data);
    // value = parse.checked;
  }
})
if (localStorage.getItem('checkbox') === "dark-theme") {
  document.body.classList.add("dark-theme")
  checbox.checked = true
  // localStorage.removeItem('checkbox')
} else {
  document.body.classList.remove("dark-theme")
    checbox.checked = false
}


