/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
$(document).ready(function() {
	var flag_cpf = true;
	var flag_cnpj = false;
	$("#cpf").blur(function() {
		var campo = $("#cpf").val();
		if(campo.length > 0){
			if (isCPFValid(campo)) {
				$("#cpf").removeClass("campo-vazio");
				flag_cpf = true;
			} else {
				$("#cpf").addClass("campo-vazio");
				$("#cpf").val("");
				flag_cpf = false;
				alert("CPF Inválido");
			}
		}
	});

	/*$("#cnpj").blur(function(){
		var campo = $("#cnpj").val();
		if(isCNPJValid(campo)){
			$("#cnpj").removeClass("campo-vazio");
			flag_cnpj = true;
		}else{
			$("#cnpj").addClass("campo-vazio");
			flag_cnpj = false;
			alert("CNPJ Inválido");
		}
	});*/

	$('form').submit(function(e) {
		var flag_vazios = 0;
		var inputs_vazios = document.querySelectorAll(
			"input[required]:not(:disabled):not([readonly]):not([type=hidden])"+
			",select[required]:not(:disabled):not([readonly])"+
			",textarea[required]:not(:disabled):not([readonly])"
		);
		inputs_vazios.forEach(function() {
			if ($(this).val() == "") {
				$(this).addClass("campo-vazio");
				flag_vazios++;
			} else $(this).removeClass("campo-vazio");
		});
		if (flag_vazios > 0 || flag_cpf == false) {
			return false;
		}
	});
});

function isCPFValid(cpf) {
	cpf = cpf.replace(/\.|\-/g, '');
	var numeros, digitos, soma, i, resultado, digitos_iguais;
	digitos_iguais = 1;
	if (cpf.length < 11) return false;
	for (i = 0; i < cpf.length - 1; i++)
		if (cpf.charAt(i) != cpf.charAt(i + 1)) {
			digitos_iguais = 0;
			break;
		}
	if (!digitos_iguais) {
		numeros = cpf.substring(0, 9);
		digitos = cpf.substring(9);
		soma = 0;
		for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i;
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(0)) return false;
		numeros = cpf.substring(0, 10);
		soma = 0;
		for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i;
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(1)) return false;
		return true;
	} else return false;
}

/*
function isCNPJValid(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj == '') return false;
    if (cnpj.length != 14)
        return false;
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;
}*/