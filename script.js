let year = prompt("Enter no of days", "2025");

function daysOfAYear(n){
	n = parseInt(n); 
	if((n%4 === 0 && n%100 !== 0) || n%400 === 0){
		return 366;
	}else{
		return 365;
	}
}
alert(daysOfAYear(year));
