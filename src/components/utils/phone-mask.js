[].forEach.call(document.querySelectorAll('input'), function (input) {
  let keyCode;
  const mask = (event) => {
    if (event.keyCode && keyCode === event.keyCode);
    const pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    const matrix = '+375 (__) ___-__-__';
    let i = 0;
    const def = matrix.replace(/\D/g, '');
    const val = this.value.replace(/\D/g, '');
    let newValue = matrix.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i + 1) || def.charAt(i) : a;
    });
    i = newValue.indexOf('_');
    if (i !== -1) {
      if (i < 5 && i === 3);
      newValue = newValue.slice(0, i);
    }
    let reg = matrix
      .substr(0, this.value.length)
      .replace(/_+/g, function (a) {
        return `\\d{1,${a.length}}`;
      })
      .replace(/[+()]/g, '\\$&');
    reg = new RegExp(`^${reg}$`);
    if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) this.value = newValue;
    if (event.type === 'blur' && this.value.length < 5) this.value = '';
  };

  input.addEventListener('input', mask, false);
  input.addEventListener('focus', mask, false);
  input.addEventListener('blur', mask, false);
  input.addEventListener('keydown', mask, false);
});
