/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
$(document).ready(function($) {
	 $('.mascara-cpf').mask('00000000000', {placeholder: "___________"});
	 $('.mascara-cnpj').mask('00000000000000', {placeholder: "______________"});
	 $('.mascara-telefone').mask('(00)0000-0000' , {placeholder: "(__)____-____"});
	 $('.mascara-celular').mask('(00)00000-0000' , {placeholder: "(__)_____-____"});
	 $('.mascara-data').mask('00/00/0000' , {placeholder: "__/__/____"});
	 // $('.mascara-rg').mask('000000000', {placeholder: "RG"});
	 $('.mascara-cep').mask('00000-000' , {placeholder: "_____-___"});
});

