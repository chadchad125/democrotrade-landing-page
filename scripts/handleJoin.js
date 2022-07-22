const init = function () {
    document.getElementById('waitListJoin').addEventListener('click', send);

}
const reset = function (ev) {
    ev.preventDefault();
    document.getElementById('waitListForm').reset();
}
const send = function (ev) {
    ev.preventDefault();
    ev.stopPropagation();

    let res = validate();

    console.log(res);

    if (res) {
        // document.getElementById('waitListForm').submit();
    } else {
        // let err = document.querySelector('.error');
        // let input = err.querySelector('input');
        // err.setAttribute('data-errormsg', `... Missing ${input.placeholder}`);
    }
}
const validate = function (ev) {
    let isValid = false;

    let name = document.getElementById('waitListName');
    let email = document.getElementById('waitListEmail');

    if (name.isValid && email.isValid) {
        isValid = true;
    }
    console.log(email.value);
    return isValid;
}

document.addEventListener('DOMContentLoaded', init)