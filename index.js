let formGroutName = document.querySelector('.formGroutName')
let formGroutEmail = document.querySelector('.formGroutEmail')
let formGroutPass = document.querySelector('.formGroutPass')
let inputName = document.querySelector('#name');
let inputEmail = document.querySelector('#email');
let inputPass = document.querySelector('#pass');

   inputName.addEventListener('blur',function(){
			let rule = inputName.dataset.rule;
			let value = inputName.value;
			let check = /[0-9]/.test(value);
        
			if (check) {
	         formGroutName.classList.add('error');
	         formGroutName.classList.remove('success');
			} else { formGroutName.classList.remove('error');
	               formGroutName.classList.add('success');}

	      if (value === '') {
	      	formGroutName.classList.remove('success');
            formGroutName.classList.remove('error');
	      }     

			});
   inputEmail.addEventListener('blur',function(){
			let rule = inputEmail.dataset.rule;
			let value = inputEmail.value;
			let check = /[0-9]/.test(value);
	        
			if (check) {
	         formGroutEmail.classList.add('error');
	         formGroutEmail.classList.remove('success');
			} else { formGroutEmail.classList.remove('error');
	               formGroutEmail.classList.add('success');}
			 if (value === '') {
	      	formGroutEmail.classList.remove('success');
            formGroutEmail.classList.remove('error');
	      } 

			});
   inputPass.addEventListener('blur',function(){
			let rule = inputPass.dataset.rule;
			let value = inputPass.value;
			let check = /[а-я]/.test(value);
        
			if (check) {
	         formGroutPass.classList.add('error');
	         formGroutPass.classList.remove('success');
			} else { formGroutPass.classList.remove('error');
	               formGroutPass.classList.add('success');}
			
			if (value === '') {
	      	formGroutPass.classList.remove('success');
            formGroutPass.classList.remove('error');
	      } 

			})

