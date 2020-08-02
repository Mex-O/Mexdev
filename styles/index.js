	function valid(){
	var btn=document.getElementById('btn');
	var name=document.getElementById('name');
	var email=document.getElementById('emaill');
	var subject=document.getElementById('subject');
	var text=document.getElementById('textarea');
	var demo1=document.getElementById('demo1');
	var demo2=document.getElementById('demo2');
	var demo3=document.getElementById('demo3');
	var demo4=document.getElementById('demo4');
	var joy=document.getElementById('joy');

	if(name.value<=4||name.value==""){
		demo1.innerHTML="*This field requires more than four char.";
	}
	if(email.value==""){
		demo2.innerHTML="*Please fill in your email.";
	}
	if(subject.value==""){
		demo3.innerHTML="*Pls fill in this field.";
	}
	if(text.value==""){
		demo4.innerHTML="*Pls fill in this field.";
	}
	else{
		joy.style.display='block';
			window.open("mailto:niyiolamicheal@gmail.com")
		
	}

	}

	var mybutton = document.getElementById("myBtn");
	window.onscroll = function() {scrollFunction()};
	function scrollFunction(){
		if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
			mybutton.style.display="block";
		}
		else{
			mybutton.style.display="none";
		}

		}
	
	function topFunction(){
		document.body.scrollTop=0;
		document.documentElement.scrollTop=0;
	}