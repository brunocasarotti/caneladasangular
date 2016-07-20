(function($) {
	"use strict";
	$(document).ready(function() {
		/*==Left Navigation Accordion ==*/
		if ($.fn.dcAccordion) {
			$('#nav-accordion').dcAccordion({
				eventType: 'click',
				autoClose: true,
				saveState: true,
				disableLink: true,
				speed: 'slow',
				showCount: false,
				autoExpand: true,
				classExpand: 'dcjq-current-parent'
			});
		}
		/*==Slim Scroll ==*/
		if ($.fn.slimScroll) {
			$('.event-list').slimscroll({
				height: '305px',
				wheelStep: 20
			});
			$('.conversation-list').slimscroll({
				height: '360px',
				wheelStep: 35
			});
			$('.to-do-list').slimscroll({
				height: '300px',
				wheelStep: 35
			});
		}
		/*==Nice Scroll ==*/
		if ($.fn.niceScroll) {
			$(".leftside-navigation").niceScroll({
				cursorcolor: "#e95f5f",
				cursorborder: "0px solid #fff",
				cursorborderradius: "0px",
				cursorwidth: "3px"
			});
			$(".leftside-navigation").getNiceScroll().resize();
			if ($('#sidebar').hasClass('hide-left-bar')) {
				$(".leftside-navigation").getNiceScroll().hide();
			}
			$(".leftside-navigation").getNiceScroll().show();
			$(".right-stat-bar").niceScroll({
				cursorcolor: "#e95f5f",
				cursorborder: "0px solid #fff",
				cursorborderradius: "0px",
				cursorwidth: "3px"
			});
		}
		/*==Easy Pie chart ==*/
		if ($.fn.easyPieChart) {
			$('.notification-pie-chart').easyPieChart({
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				},
				barColor: "#39b6ac",
				lineWidth: 3,
				size: 50,
				trackColor: "#efefef",
				scaleColor: "#cccccc"
			});
			$('.pc-epie-chart').easyPieChart({
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				},
				barColor: "#5bc6f0",
				lineWidth: 3,
				size: 50,
				trackColor: "#32323a",
				scaleColor: "#cccccc"
			});
		}
		/*== SPARKLINE==*/
		if ($.fn.sparkline) {
			$(".d-pending").sparkline([3, 1], {
				type: 'pie',
				width: '40',
				height: '40',
				sliceColors: ['#e1e1e1', '#8175c9']
			});
			var sparkLine = function() {
				$(".sparkline").each(function() {
					var $data = $(this).data();
					($data.type == 'pie') && $data.sliceColors && ($data.sliceColors = eval($data.sliceColors));
					($data.type == 'bar') && $data.stackedBarColor && ($data.stackedBarColor = eval($data.stackedBarColor));
					$data.valueSpots = {
						'0:': $data.spotColor
					};
					$(this).sparkline($data.data || "html", $data);
					if ($(this).data("compositeData")) {
						$spdata.composite = true;
						$spdata.minSpotColor = false;
						$spdata.maxSpotColor = false;
						$spdata.valueSpots = {
							'0:': $spdata.spotColor
						};
						$(this).sparkline($(this).data("compositeData"), $spdata);
					};
				});
			};
			var sparkResize;
			$(window).resize(function(e) {
				clearTimeout(sparkResize);
				sparkResize = setTimeout(function() {
					sparkLine(true)
				}, 500);
			});
			sparkLine(false);
		}
		if ($.fn.plot) {
			var datatPie = [30, 50];
			// DONUT
			$.plot($(".target-sell"), datatPie, {
				series: {
					pie: {
						innerRadius: 0.6,
						show: true,
						label: {
							show: false
						},
						stroke: {
							width: .01,
							color: '#fff'
						}
					}
				},
				legend: {
					show: true
				},
				grid: {
					hoverable: true,
					clickable: true
				},
				colors: ["#ff6d60", "#cbcdd9"]
			});
		}
		/*==Collapsible==*/
		$('.widget-head').click(function(e) {
			var widgetElem = $(this).children('.widget-collapse').children('i');
			$(this).next('.widget-container').slideToggle('slow');
			if ($(widgetElem).hasClass('ico-minus')) {
				$(widgetElem).removeClass('ico-minus');
				$(widgetElem).addClass('ico-plus');
			} else {
				$(widgetElem).removeClass('ico-plus');
				$(widgetElem).addClass('ico-minus');
			}
			e.preventDefault();
		});
		/*==Sidebar Toggle==*/
		$(".leftside-navigation .sub-menu > a").click(function() {
			var o = ($(this).offset());
			var diff = 80 - o.top;
			if (diff > 0) $(".leftside-navigation").scrollTo("-=" + Math.abs(diff), 500);
			else $(".leftside-navigation").scrollTo("+=" + Math.abs(diff), 500);
		});
		$('.sidebar-toggle-box .fa-bars').click(function(e) {
			$(".leftside-navigation").niceScroll({
				cursorcolor: "#e95f5f",
				cursorborder: "0px solid #fff",
				cursorborderradius: "0px",
				cursorwidth: "3px"
			});
			$('#sidebar').toggleClass('hide-left-bar');
			if ($('#sidebar').hasClass('hide-left-bar')) {
				$(".leftside-navigation").getNiceScroll().hide();
			}
			$(".leftside-navigation").getNiceScroll().show();
			$('#main-content').toggleClass('merge-left');
			e.stopPropagation();
			if ($('#container').hasClass('open-right-panel')) {
				$('#container').removeClass('open-right-panel')
			}
			if ($('.right-sidebar').hasClass('open-right-bar')) {
				$('.right-sidebar').removeClass('open-right-bar')
			}
			if ($('.header').hasClass('merge-header')) {
				$('.header').removeClass('merge-header')
			}
		});
		$('.toggle-right-box .fa-bars').click(function(e) {
			$('#container').toggleClass('open-right-panel');
			$('.right-sidebar').toggleClass('open-right-bar');
			$('.header').toggleClass('merge-header');
			e.stopPropagation();
		});
		$('.header,#main-content,#sidebar').click(function() {
			if ($('#container').hasClass('open-right-panel')) {
				$('#container').removeClass('open-right-panel')
			}
			if ($('.right-sidebar').hasClass('open-right-bar')) {
				$('.right-sidebar').removeClass('open-right-bar')
			}
			if ($('.header').hasClass('merge-header')) {
				$('.header').removeClass('merge-header')
			}
		});
		$('.panel .tools .fa').click(function() {
			var el = $(this).parents(".panel").children(".panel-body");
			if ($(this).hasClass("fa-chevron-down")) {
				$(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
				el.slideUp(200);
			} else {
				$(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
				el.slideDown(200);
			}
		});
		$('.panel .tools .fa-times').click(function() {
			$(this).parents(".panel").parent().remove();
		});
		// tool tips
		$('.tooltips').tooltip();
		// popovers
		$('.popovers').popover();
		//date picker start
		// if (top.location != location) {
		// 	top.location.href = document.location.href;
		// }

		$(function() {
			window.prettyPrint && prettyPrint();
			$('.default-date-picker').datepicker({
				format: 'mm-dd-yyyy',
				autoclose: true
			});
			$('.dpYears').datepicker({
				autoclose: true
			});
			$('.dpMonths').datepicker({
				autoclose: true
			});
			var startDate = new Date(2012, 1, 20);
			var endDate = new Date(2012, 1, 25);
			$('.dp4').datepicker().on('changeDate', function(ev) {
				if (ev.date.valueOf() > endDate.valueOf()) {
					$('.alert').show().find('strong').text('The start date can not be greater then the end date');
				} else {
					$('.alert').hide();
					startDate = new Date(ev.date);
					$('#startDate').text($('.dp4').data('date'));
				}
				$('.dp4').datepicker('hide');
			});
			$('.dp5').datepicker().on('changeDate', function(ev) {
				if (ev.date.valueOf() < startDate.valueOf()) {
					$('.alert').show().find('strong').text('The end date can not be less then the start date');
				} else {
					$('.alert').hide();
					endDate = new Date(ev.date);
					$('.endDate').text($('.dp5').data('date'));
				}
				$('.dp5').datepicker('hide');
			});
			// disabling dates
			var nowTemp = new Date();
			var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
			var checkin = $('.dpd1').datepicker({
				onRender: function(date) {
					return date.valueOf() < now.valueOf() ? 'disabled' : '';
				}
			}).on('changeDate', function(ev) {
				if (ev.date.valueOf() > checkout.date.valueOf()) {
					var newDate = new Date(ev.date)
					newDate.setDate(newDate.getDate() + 1);
					checkout.setValue(newDate);
				}
				checkin.hide();
				$('.dpd2')[0].focus();
			}).data('datepicker');
			var checkout = $('.dpd2').datepicker({
				onRender: function(date) {
					return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
				}
			}).on('changeDate', function(ev) {
				checkout.hide();
			}).data('datepicker');
		});
		//date picker end
		//datetime picker start
		$(".form_datetime").datetimepicker({
			format: 'yyyy-mm-dd hh:ii',
			language: 'pt-BR',
			autoclose: true
		});
		//datetime picker end

		$("#sessao-metodo-upload").hide();

		$("#select-metodo-selecao").on('change', function() {
			var metodo_selecao = $("#select-metodo-selecao").val();
			if(metodo_selecao == "metodo-upload")
				$("#campo-tipo-submit").val("metodo-upload");
			else
				$("#campo-tipo-submit").val("metodo-selecao");

			if(metodo_selecao == "metodo-upload") {
				$("#sessao-metodo-selecao").hide();
				$("#sessao-metodo-upload").show();
			} else {
				$("#sessao-metodo-upload").hide();
				$("#sessao-metodo-selecao").show();
			}
		});

		$(function () {
			$('#addmore').on('click', function () {
				var $table = $('#input_fields tbody');
				var $tr = $table.find('tr').eq(0).clone();
				$tr.appendTo($table);
				$tr.find('input.nome_dep').attr('id', 'nome_dep[]').attr('name', 'nome_dep[]').val('');
				$tr.find('input.dtnasc_dep').attr('id', 'dtnasc_dep[]').attr('name', 'dtnasc_dep[]').val('');
				$tr.find('button.removedp').attr('onclick', 'removeLastTr(0,this)');
				$tr.find('input.nome_dep').focus();
			});
		});

		$('.mascara-cpf').mask('000.000.000-00', {placeholder: "___.___.___-__"});
		$('.mascara-cnpj').mask('00000000000000', {placeholder: "______________"});
		$('.mascara-telefone').mask('(00)0000-0000' , {placeholder: "(__)____-____"});
		$('.mascara-celular').mask('(00)00000-0000' , {placeholder: "(__)_____-____"});
		$('.mascara-data').mask('00/00/0000' , {placeholder: "__/__/____"});
		// $('.mascara-rg').mask('000000000', {placeholder: "RG"});
		$('.mascara-cep').mask('00000-000' , {placeholder: "_____-___"});
		$('.mascara-dinheiro').mask("000.000.000.000.000,00", {placeholder: "R$ 0.000,00"}, {reverse: true});

		$('input[data-relmax]').each(function () {
			var oldVal = $(this).prop('value');
			var relmax = $(this).data('relmax');
			var max = new Date();
			max.setFullYear(max.getFullYear() + relmax);
			$.prop(this, 'max', $(this).prop('valueAsDate', max).val());
			$.prop(this, 'value', oldVal);
		});
	});
})(jQuery);

function buscarEndereco(elem)
{
	var cep = Trim(elem.value);
	if(IsCEP(cep)){
		document.getElementById('rua').value = "...";
		document.getElementById('bairro').value = "...";
		document.getElementById('cidade').value = "...";
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				if(document.getElementById('numero')){
					document.getElementById('numero').focus();
				} else if (document.getElementById('num')){
					document.getElementById('num').focus();
				}
				var r = xhttp.response;
				street_1 = r.substring(0, (i = r.indexOf(':')));
				document.getElementById('rua').value = unescape(street_1.replace(/\+/g," "));
				r = r.substring(++i);
				street_4 = r.substring(0, (i = r.indexOf(':')));
				document.getElementById('bairro').value = unescape(street_4.replace(/\+/g," "));
				r = r.substring(++i);
				city = r.substring(0, (i = r.indexOf(':')));
				document.getElementById('cidade').value = unescape(city.replace(/\+/g," "));
				r = r.substring(++i);
				// region = r.substring(0, (i = r.indexOf(':')));
				// document.getElementById('region').selectedIndex = unescape(region.replace(/\+/g," "));
				// document.getElementById('region_id').selectedIndex = unescape(region.replace(/\+/g," "));
				// setTimeout(function() {
				// 		if(document.getElementById('numero')){
				// 			document.getElementById('numero').focus();
				// 		} else if (document.getElementById('num')){
				// 			document.getElementById('num').focus();
				// 		}
				// 	}, 1
				// );
			}
		};
		xhttp.open("GET", "buscacep.php?cep=" + cep, true);
		xhttp.send();
	}
}

function formatar(mascara, documento)
{
	var i = documento.value.length;
	var saida = mascara.substring(0,1);
	var texto = mascara.substring(i)
	if (texto.substring(0,1) != saida){
		documento.value += texto.substring(0,1);
	}
}

function Trim(strTexto)
{
	return strTexto.replace(/^s+|s+$/g, '');
}

var inputs = document.querySelectorAll("input.apenas-numero");
for(var x=0; x<inputs.length; x++){
	inputs[x].addEventListener("keydown", apenasNumero);
	inputs[x].addEventListener("keypress", apenasNumero);
	inputs[x].addEventListener("keyup", apenasNumero);
}

function apenasNumero(){
	var key;
	var keychar;

	if (window.event)
		key = window.event.keyCode;
	else if (e)
		key = e.which;
	else
		event.preventDefault();	// Prevent character input

	keychar = String.fromCharCode(key);
	if( !(key == 8											// backspace
			|| key == 9										// tab
			|| key == 46									// delete
			|| (key >= 35 && key <= 40)						// arrow keys/home/end
			|| (key >= 48 && key <= 57)						// numbers on keyboard
			|| (key >= 96 && key <= 105)					// number on keypad
			|| (("0123456789").indexOf(keychar) > -1))		// numbers positive
	) {
		event.preventDefault();	// Prevent character input
	}
}

function IsCEP(strCEP)
{
	strCEP = Trim(strCEP);

	if(strCEP.length == 8)
		var objER = /^\d{5}\d{3}$/;
	else if(strCEP.length == 9)
		var objER = /^\d{5}-\d{3}$/;
	else
		return false;

	if(objER.test(strCEP))
		return true;
	else
		return false;
}

function buscaNome(cpf)
{
	var cpfValor = cpf.value;
	if(isCPFValid(cpfValor)){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				var r = xhttp.response;
				if(r.length == 0){
					alert("Usuário não cadastrado!");
				}
				document.getElementById('nomeFiliado').innerHTML = r;
			}
		};
		var cpfTrim = cpfValor.replace(/[^\d]+/g, '');
		xhttp.open("GET", "buscanome.php?cpf="+cpfTrim, true);
		xhttp.send();
	} else
		document.getElementById('nomeFiliado').innerHTML = "";
}

function removeLastTr(id,elem)
{
	var $table = jQuery('#input_fields tbody');
	var $tr = $table.find('tr');
	if( $tr.length >= 2 ){
		if ( confirm("Deseja realmente excluir esse Dependente?")) {
			if( id > 0 ){
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (xhttp.readyState == 4 && xhttp.status == 200) {
						elem.parentElement.parentElement.remove();
					}
				};
				xhttp.open("GET", "excluir_dependente.php?id="+id, true);
				xhttp.send();
			} else {
				elem.parentElement.parentElement.remove();
			}
		}
	}
}
