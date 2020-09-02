        
        var glycerinKValue= "0.285 W/(m⋅&#176C)";
        var hotplate="55.1 &#176C";
        var gcoldplate="19.7 &#176C";        
        var freshwaterKValue="0.609 W/(m⋅&#176C)";
        var fcoldplate="38.5 &#176C";
        var mercuryKValue="8.4 W/(m⋅&#176C)";
        var mcoldplate="53.9 &#176C";     
        var selectedsample;
        var diameter="82.5 mm";
        var thickness="18 mm" ;
        var waterOn=true;
        var machineOn=true;

        var resultShown=false;

        // code for voltage slider 
        function rangeSlide(value){
            document.getElementById('rangeValue').innerHTML=value;
            document.getElementById('current').innerHTML=Math.round(12/value*100)/100;};

        // code for updating current value in real time
        function currentslide(value){
          document.getElementById('current').innerHTML=value;
        };

        // code for current value
        function currentvalue(){
            var value=document.getElementById('rangeValue').innerHTML;
            var Current=Math.round(12/value*100)/100;
            document.getElementById("current").innerHTML =Current;
        };


        // code to return k value of selected sample

        function finalresult(){
            if (selectedsample=="glycerin") {
                // document.getElementById("demo1").innerHTML =glycerinKValue;
                document.getElementById("demo2").innerHTML=hotplate;
                document.getElementById('demo3').innerHTML=gcoldplate;
                document.getElementById('demo4').innerHTML=thickness;
                document.getElementById('demo5').innerHTML=diameter;  
                resultShown=true; 
            } else if (selectedsample=="freshwater") {
                // document.getElementById("demo1").innerHTML=freshwaterKValue;
                document.getElementById("demo2").innerHTML=hotplate;
                document.getElementById('demo3').innerHTML=fcoldplate;
                document.getElementById('demo4').innerHTML=thickness;
                document.getElementById('demo5').innerHTML=diameter;  
                resultShown=true; 
            } else {
                // document.getElementById("demo1").innerHTML =mercuryKValue;
                document.getElementById("demo2").innerHTML=hotplate;
                document.getElementById('demo3').innerHTML=mcoldplate;
                document.getElementById('demo4').innerHTML=thickness;
                document.getElementById('demo5').innerHTML=diameter; 
                resultShown=true;  
            } ;      
            };


            // code for check boxes

        function displayRadioValue() {
            var selectedradiovalue = document.getElementsByName('sample');   
            for(i = 0; i < selectedradiovalue.length; i++) { 
                if(selectedradiovalue[i].checked){
                  selectedsample=selectedradiovalue[i].value;
                };
            };
            if(waterOn==true && machineOn==true){
                myFunction();
                currentvalue();
                carousel();
                showresults();
                displaygraph();
            } else{
                alert('Please turn on machine/water supply');
            }
        };

        //code for returing random number

        function getDecimal(min, max, decimalPlaces){
          var rand = Math.random()*(max-min) + min;
          var power = Math.pow(10, decimalPlaces);
          return Math.floor(rand*power) / power;
        };

        //code for simulator design

        var myIndex = 0;
        function carousel() {
        var i;
        var x;
        if(selectedsample=="glycerin"){
         x = document.getElementsByClassName("mySlides");
        } else if(selectedsample=="freshwater"){
            x = document.getElementsByClassName("mySlides1");
        } else{
            x = document.getElementsByClassName("mySlides2");
        };  
        for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
         };
        myIndex++;
        if (myIndex > x.length){
            myIndex = x.length};
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 3000); // Change image every 3 seconds
        };

        // check water checkbox is checked or not 

        function watercheck(){
            var watercheckBox = document.getElementById("waterCheckBox");
            if(watercheckBox.checked== true){
                waterOn=true;
            } else{
                waterOn=false;
            }
        };

        // check whether machine checkbox is checked or not

        function machinecheck(){
            var machinecheckBox = document.getElementById("machineCheckBox");
            if(machinecheckBox.checked== true){
                machineOn=true;
            } else{
                machineOn=false;
            }
        };

        // display graph on click
        function displaygraph(){
            setTimeout(delaygraph16sec,16000);
        };

        function delaygraph16sec(){
            document.getElementById("graph").src="images/Graph.png"
        };

        // show final results
        function showresults(){
            setTimeout(delay16sec,16000);
        };

        function delay16sec(){
            finalresult();
        };

        // verify function

        function verify(){
            console.log(resultShown);
            if(resultShown==true ){
                if (selectedsample=="glycerin") {
                    document.getElementById("demo1").innerHTML =glycerinKValue;
                } else if (selectedsample=="freshwater") {
                    document.getElementById("demo1").innerHTML=freshwaterKValue;
                } else {
                    document.getElementById("demo1").innerHTML =mercuryKValue;
                }
            } else{
                document.getElementById("demo1").innerHTML ="N.A";
            }
        }


        // disable button

        // function disablebutton(){
        //     var disablebutton=document.getElementById('btndisable');
        //     disablebutton.setAttribute('disable','disable');
        // }


        function myFunction() {
            document.getElementById("btndisable").disabled = true;
            document.getElementById("btndisable").style.background= "#cccccc";
          }
        
 


