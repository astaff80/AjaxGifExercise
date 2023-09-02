console.log("Let's get this party started!");

const form = document.querySelector("form");

const search = document.querySelector("#search");

const list = document.querySelector("ul");

let r;

async function getGif() {
	const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=U6twQG3Dn8yEUhICN1IjBOR27BIDrQUc`);
	console.log(response);
	console.log(response.data.data[0]);
	const GIFurl = response.data.data[0].source;

	const newitem = document.createElement("li");
	const newdiv = document.createElement("div");
	const newgif = document.createElement("IMG");

	newgif.src = GIFurl;

	//newgif.width = 200;
	//newgif.height = 200;
		
	newdiv.append(newgif);
	newitem.append(newdiv);
	list.append(newitem);
}


form.addEventListener("submit", function(event){
	event.preventDefault();
	
	getGif();
		
	form.reset();
})

document.addEventListener(".clear", function(event){
	console.log("b");
	for(n of list.children) { list.removeChild(n) }
})