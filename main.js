const LOCAL_STORAGE_LIST_KEY = 'contacts'

const formForLocalStorage = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_LIST_KEY)
);

if (!formForLocalStorage) {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify([]));
}


const nameInput = document.querySelector('#Name')
const lastNameInput = document.querySelector('#LastName')
const emailInput = document.querySelector('#Email')
const phoneInput = document.querySelector('#Phone')
const addBtn = document.querySelector('.form_btn')


addBtn.addEventListener('click', (event) => {
  event.preventDefault()
  ShowForm()
})

function ShowForm() {
  const name = nameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  const form = {
    name,
    lastName,
    email,
    phone
  };

  const formList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
  formList.push(form);
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(formList));

  console.log(`Имя: ${name} Фамилия: ${lastName} Почта: ${email} Номер: ${phone}`);
}