//iniciar textfield
mdc.textField.MDCTextField.attachTo(document.querySelector('#NprocessoBig'));
mdc.textField.MDCTextField.attachTo(document.querySelector('#PasswordBig'));
mdc.textField.MDCTextField.attachTo(document.querySelector('#NcartaoBig'));
mdc.textField.MDCTextField.attachTo(document.querySelector('#IdadeBig'));
mdc.textField.MDCTextField.attachTo(document.querySelector('#TurmaBig'));
mdc.textField.MDCTextField.attachTo(document.querySelector('#AnoBig'));
mdc.textField.MDCTextField.attachTo(document.querySelector('#NomeBig'));

$("#Registo").click(function () {
    var processo = $('#NProcesso').val();;
    var password = $('#Password').val();;
    var NCartao = $('#NCartao').val();;
    var Idade = $('#Idade').val();;
    var Turma = $('#Turma').val();;
    var Ano = $('#Ano').val();;
    var Nome = $('#Nome').val();;
    $.ajax({
        type: "GET",
        url: "http://aecm.elementalwolves.com/APPBufete/registo.php?Processo=" + processo + "&Password=" + password + "&Ncartao=" + NCartao +"&Idade="+ Idade +"&Turma="+ Turma +"&Ano="+ Ano +"&Nome="+ Nome,
        success: function(data) {
            alert(data);
        }
    });
});