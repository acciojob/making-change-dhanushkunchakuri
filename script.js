const makeChange = (c) => {
  // your name here
	let arr=[25,10,5,1];
	ler res={q: 0, d: 0, n: 0, p: 0};
	let i=0;
	while(c!=0 && i<arr.length){
		let count=Math.floor(c/arr[i]);
		c-=count*arr[i];
		if(arr[i] === 25) res.q=count;
		if(arr[i] === 10) res.d=count;
		if(arr[i] === 5) res.n=count;
		if(arr[i] === 1) res.p=count;
		i++;
	}
	return res;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
