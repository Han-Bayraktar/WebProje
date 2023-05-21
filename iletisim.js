new Vue({
  el: '#app',
  data: {
    isim: '',
    soyisim: '',
    cinsiyet: '',
    email: '',
    telefon: '',
    ilgialanlari: [],
    ülke: '',
    telefonerror: false
  },
  methods: {
    kaydetForm: function() {
      console.log('İsim:', this.isim);
      console.log('Soyadı:', this.soyisim);
      console.log('Cinsiyet:', this.cinsiyet);
      console.log('E-posta:', this.email);
      console.log('Telefon Numarası:', this.telefon);
      console.log('İlgi Alanları:', this.ilgialanlari);
      console.log('Ülke:', this.ülke);

      this.resetForm();
      this.kaydetForm();
    },
    resetForm: function() {
      this.isim = '';
      this.soyisim = '';
      this.cinsiyet = '';
      this.email = '';
      this.telefon = '';
      this.ilgialanlari = [];
      this.ülke = '';
      this.telefonerror = false;

      this.resetForm();
    },
    isNumber: function(event) {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
      }
      this.telefonerror = this.telefon.length !== 10;
    },
    kaydetForm: function() {
      var savedData = {
        isim: this.isim,
        soyisim: this.soyisim,
        cinsiyet: this.cinsiyet,
        email: this.email,
        telefon: this.telefon,
        ilgialanlari: this.ilgialanlari,
        ülke: this.ülke
      };

      console.log('Form verileri kaydedildi:', savedData);
    }
  }
});
