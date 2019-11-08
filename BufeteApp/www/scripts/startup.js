$('#Login, #Registo').click(function () {
    if (this.id == 'Login') {
        window.location = "../pages/login.html"
    }
    else if (this.id == 'Registo') {
        window.location = "../pages/registo.html"
    }
});