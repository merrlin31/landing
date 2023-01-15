(function() {
    const me = {};

    me.isEmail = function(email) {
        const re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return re.test(email);
    };

    me.isNumber = function(number) {
        const re = /^\+\d{12}$/;
        return re.test(number);
    };

    me.isNotEmpty = function(str) {
        return Boolean(str);
    };

    merrlin.validation = me;

}());