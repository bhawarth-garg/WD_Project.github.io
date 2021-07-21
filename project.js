function validate(x) {
    var fname = document.form.fname ? document.form.fname.value : "";
    var lname = document.form.lname ? document.form.lname.value : "";
    var password1 = document.form.password1.value;
    var password2 = document.form.password2 ? document.form.password2.value : "";
    var email = document.form.email.value;
    var num = document.form.number.value;

    if (
        (fname == null || fname == "" || lname == null || lname == "") &&
        x == 1
    ) {
        alert("Name can't be blank");
        return false;
    } else if (password1.length < 6) {
        alert("Password must contain more than 6 digits");
        return false;
    } else if (password1 != password2 && x == 1) {
        alert("Password must be same ");
        return false;
    } else if (num.length > 10) {
        alert("Enter correct phone number");
        return false;
    }

    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >= email.length
    ) {
        alert(
            "Please enter a valid e-mail address \n atpostion:" +
            atposition +
            "\n dotposition:" +
            dotposition
        );
        return false;
    }
}