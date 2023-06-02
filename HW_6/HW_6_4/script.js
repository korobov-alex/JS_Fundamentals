function commulateData(event){
  event.preventDefault();
  let arr = []
  let text = document.getElementsByClassName("out")[0];
  
  let nameValue = document.querySelector('input[name="fio"]');
  let name = nameValue.value
  
  let phoneValue = document.querySelector('input[name="phone"]');
  let phone = phoneValue.value

  let dateValue = document.querySelector('input[name="birthday"]');
  let date = dateValue.value
  
  let emailValue = document.querySelector('input[name="email"]');
  let email = emailValue.value
  text.innerText = `Name: ${name}
  Phone: ${phone}
  Date: ${date}
  Email: ${email}`;
}
