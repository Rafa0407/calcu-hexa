(function(){
	'use strict'

	angular.module('design').controller('MainController', MainController);

	MainController.$inject = ['$scope'];
	function MainController(){
		let vm = this;
		vm.s1;
		vm.s2;
		vm.r1;
		vm.r2;

		vm.resultadoSumaHexa;
		vm.resultadoSumaDec;
		vm.resultadoResHexa;
		vm.resultadoResDec;

		//SCRIPT CONVERTIR BINARIO A DECIMAL
		vm.convertir_binario = function (valor){
			var array = [];
			var numeros = valor.split("");
			var entero = 0;
			var contador = 0;
			for(var i = numeros.length-1; i>=0;i--){
				if(numeros[i] == 0){
					array[i] = 0;
				}
				else{
					array[i] = Math.pow(2,contador);
				}
				contador++;
			}
			for(var a = 0; a < array.length; a++){
				entero += array[a];
			}
			return entero;
		}

		//SCRIPT CONVERTIR DECIMAL A BINARIO
		vm.convertir_entero = function (valor){
			let resul_div = [];
			let entradas = 0;
			let resultado_binario = '';
			while(valor > 0){
				let residuo = parseInt(valor % 2);
				valor = parseInt(valor/2);
				resul_div[entradas] = residuo;
				entradas++;
			}
			for (var i = resul_div.length - 1; i >= 0; i--) {
				resultado_binario += resul_div[i];
			}
			return resultado_binario;
		}


		// conversion de hexa a distintas bases, tomado de https://gist.github.com/faisalman/4213592 

			
				let ConvertBase = function (num) {
					return {
						from : function (baseFrom) {
							return {
								to : function (baseTo) {
									return parseInt(num, baseFrom).toString(baseTo);
								}
							};
						}
					};
				};
					
				// binary to decimal
				ConvertBase.bin2dec = function (num) {
					return ConvertBase(num).from(2).to(10);
				};
				
				// binary to hexadecimal
				ConvertBase.bin2hex = function (num) {
					return ConvertBase(num).from(2).to(16);
				};
				
				// decimal to binary
				ConvertBase.dec2bin = function (num) {
					return ConvertBase(num).from(10).to(2);
				};
				
				// decimal to hexadecimal
				ConvertBase.dec2hex = function (num) {
					return ConvertBase(num).from(10).to(16);
				};
				
				// hexadecimal to binary
				ConvertBase.hex2bin = function (num) {
					return ConvertBase(num).from(16).to(2);
				};
				
				// hexadecimal to decimal
				ConvertBase.hex2dec = function (num) {
					return ConvertBase(num).from(16).to(10);
				};
				
				this.ConvertBase = ConvertBase;

			vm.sumaHexa = function (sum1, sum2){
				if(sum1 && sum2 != undefined){
					let suma = parseInt(ConvertBase.hex2dec(sum1)) + parseInt(ConvertBase.hex2dec(sum2)); 
					vm.resultadoSumaDec = suma; 
					let hexa = ConvertBase.dec2hex(suma);
					vm.resultadoSumaHexa = hexa.toUpperCase();
				}
				else{
					vm.resultadoSumaDec = 0;
					vm.resultadoSumaHexa = 0;
					alert("Valores Inválidos");
				}

			}

			vm.restaHexa = function(res1, res2){
				if(res1 && res2 != undefined){
					let resta = parseInt(ConvertBase.hex2dec(res1)) - parseInt(ConvertBase.hex2dec(res2));
					vm.resultadoResDec = resta;
					let hexa = ConvertBase.dec2hex(resta);
					vm.resultadoResHexa = hexa.toUpperCase();	
				}
				else{
					vm.resultadoResDec = 0; 
					vm.resultadoResHexa = 0;
					alert("Valores Inválidos");
				}

			}

			
	
		
}
})();
