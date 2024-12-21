//your JS code here. If required.
document.getElementById("rish").addEventListener("submit" , function (event){
	event.preventDefault();

	const ageInput = document.getElementById("age").value;
	const nameInput = document.getElementById("name").value;

	if(!ageInput || !nameInput){
		alert("all fields are required.");
		return;
	}
	const age = parseInt(ageInput , 10);
	const name = nameInput;

	const agePromise = new Promise((resolve , reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve(`Welcome ${name}. You are eligible to vote.`);
			}
			else {
				reject(`Sorry, ${name}`. You are not old enough.);
			}
		} , 4000);
	});

agePromise
	.then((message)=> alert(message))
	.catch((error)=> alert(error));	
});