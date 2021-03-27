var answer = document.getElementById('resp');
const numbers = '0123456789';
const lowers = 'abcdefghijklmnopqrstuvwxyz';
const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const characters = ';./?,]{-+(!})$[%&*"`^~º°>|_<';

function create(pass = 10){
	let password = '';
	let join = [numbers, lowers, uppers, characters].join().split('');
	for(let cont = 0; cont < pass; cont++){
		password += join[parseInt(Math.random() * join.length)];
		
	}
	return password;
};

function gerar(){	
	let mark = document.getElementsByName('box');
	if (mark[0].checked) {
		answer.innerHTML = create(4);

	}else if (mark[1].checked) {
		answer.innerHTML = create(6);

	}else if (mark[2].checked) {
		answer.innerHTML = create(8);

	}else if (mark[3].checked) {
		answer.innerHTML = create(10);

	}else{
		alert('Selecione a quantidade de digitos!')
	}
}
