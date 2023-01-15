(function() {
    const me = {};
    const form = document.querySelector('.form-container');
    let closeButton = null;

    function onClose(e) {
        e.preventDefault();

        me.close();
        closeButton.removeEventListener('click', onClose)
    }

    me.open = function() {
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose)
    };

    me.close = function() {
        form.classList.add('is-hidden');
    };

    me.isValid = function() {
        const requiredFields = document.querySelectorAll('[data-valid="required"]');
        const emailValue = document.querySelector('[data-email]').value;
        const numberValue = document.querySelector('[data-number]').value;

        if (!me.isAllCompleted(requiredFields)) {
            console.log('Заполните поля');
        } else if (!merrlin.validation.isEmail(emailValue)) {
            console.log('Не верный email');
            return false;
        } else if (!merrlin.validation.isNumber(numberValue)) {
            console.log('Не верный номер');
            return false;
        }

        return true;
    };

    me.isAllCompleted = function(data) {
        let result = true;

        for (var i = 0; i < data.length; i++) {
            if (!merrlin.validation.isNotEmpty(data[i].value)) {
                result = false;
                break
            }
        }

        return result;
    };

    merrlin.form = me;

}());