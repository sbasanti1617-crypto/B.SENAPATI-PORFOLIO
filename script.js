
let form = document.querySelector('#contactform');

form.addeventlistener("submit", function(event) {
    event.preventdefault();
    let name = document.queryselector("#name").value;
    form.textcontent = "Thanks," + "! I will reply soon.";
})