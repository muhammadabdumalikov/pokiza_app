function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(998|)?(\d{2})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? '+998 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }

  export default formatPhoneNumber;
  