new Vue({
  el: '#app',
  data: {
    formData: {
      isim: '',
      soyisim: '',
      cinsiyet: '',
      email: '',
      telefon: '',
      ilgiAlanlari: [],
      ulke: ''
    },

  },
  methods: {
    kaydetForm(event) {
      event.preventDefault();
    
      const isim = document.getElementById('isim').value;
      const soyisim = document.getElementById('soyisim').value;
      const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked').value;
      const email = document.getElementById('email').value;
      const telefon = document.getElementById('telefon').value;
      const ilgiAlanlari = Array.from(document.getElementById('ilgi-alanlari').selectedOptions).map(option => option.value).join(', ');
      const ulke = document.getElementById('country').value;
    
      const formDataText = `
        isim: ${isim}
        soyisim: ${soyisim}
        cinsiyet: ${cinsiyet}
        email: ${email}
        telefon: ${telefon}
        ilgiAlanlari: ${ilgiAlanlari}
        ulke: ${ulke}
      `;
    
      const formkayitlariTextarea = document.getElementById('formkayitlari');
      formkayitlariTextarea.value += formDataText + '\n';
    },
    resetForm() {
      document.getElementById('isim').value = '';
      document.getElementById('soyisim').value = '';
      document.querySelector('input[name="cinsiyet"]:checked').checked = false;
      document.getElementById('email').value = '';
      document.getElementById('telefon').value = '';
      Array.from(document.getElementById('ilgi-alanlari').options).forEach(option => option.selected = false);
      document.getElementById('country').value = '';
    },
    validateTelefon(event) {
      const input = event.target;
      const phoneNumber = input.value.trim();
      const numericRegex = /^\d{10}$/;
      const warning = document.getElementById('telefonWarning');
    
      if (numericRegex.test(phoneNumber)) {
        warning.style.display = 'none'; 
      } else {
        warning.style.display = 'block'; 
      }
    }
  }
});