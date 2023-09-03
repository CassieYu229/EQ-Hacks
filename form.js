function certified(){
    console.log("hello")
    output = document.getElementById("form");
    familySize = document.getElementById("houseSize").value;
    console.log(familySize)
    income= document.getElementById("yearlyIncome").value;
    console.log(income)
    if(familySize =="one" && income=="t1"){
      output.innerHTML = "<div id = 'output'><h1> You are qualified! </h1> <p> You qualify to apply for Medicare! You can proceed to the NYC Health website and fill out the forms for Medicaid. <br> <a href= 'https://nystateofhealth.ny.gov/'>Click Here To Sign Up</a>  or call (800) 541-2831<br> <br> If there is another language you prefer to view the form materials in <a href= 'https://www.ssa.gov/site/languages/en/'> Click Here</a> to go to a selection of translated pages. </p></div>";
    }else if(familySize =="two" && income=="t2"){
     output.innerHTML = "<div id = 'output'><h1> You are qualified! </h1> <p> You qualify to apply for Medicare! You can proceed to the NYC Health website and fill out the forms for Medicaid. <br> <a href= 'https://nystateofhealth.ny.gov/'>Click Here To Sign Up</a>  or call (800) 541-2831<br> <br> If there is another language you prefer to view the form materials in <a href= 'https://www.ssa.gov/site/languages/en/'> Click Here</a> to go to a selection of translated pages. </p></div>";
    }else if(familySize =="three" && income=="t3"){
      output.innerHTML = "<div id = 'output'><h1> You are qualified! </h1> <p> You qualify to apply for Medicare! You can proceed to the NYC Health website and fill out the forms for Medicaid. <br> <a href= 'https://nystateofhealth.ny.gov/'>Click Here To Sign Up</a>  or call (800) 541-2831<br> <br> If there is another language you prefer to view the form materials in <a href= 'https://www.ssa.gov/site/languages/en/'> Click Here</a> to go to a selection of translated pages. </p></div>";
    }else if(familySize =="four" && income=="t4"){
      output.innerHTML = "<div id = 'output'><h1> You are qualified! </h1> <p> You qualify to apply for Medicare! You can proceed to the NYC Health website and fill out the forms for Medicaid. <br> <a href= 'https://nystateofhealth.ny.gov/'>Click Here To Sign Up</a>  or call (800) 541-2831<br> <br> If there is another language you prefer to view the form materials in <a href= 'https://www.ssa.gov/site/languages/en/'> Click Here</a> to go to a selection of translated pages. </p></div>";
    }else if(familySize =="five" && income=="t5"){
      output.innerHTML = "<div id = 'output'><h1> You are qualified! </h1> <p> You qualify to apply for Medicare! You can proceed to the NYC Health website and fill out the forms for Medicaid. <br> <a href= 'https://nystateofhealth.ny.gov/'>Click Here To Sign Up</a>  or call (800) 541-2831<br> <br> If there is another language you prefer to view the form materials in <a href= 'https://www.ssa.gov/site/languages/en/'> Click Here</a> to go to a selection of translated pages. </p></div>";
    }else if(familySize =="six" && income=="t6"){
      output.innerHTML = "<div id = 'output'><h1> You are qualified! </h1> <p> You qualify to apply for Medicare! You can proceed to the NYC Health website and fill out the forms for Medicaid. <br> <a href= 'https://nystateofhealth.ny.gov/'>Click Here To Sign Up</a>  or call (800) 541-2831<br> <br> If there is another language you prefer to view the form materials in <a href= 'https://www.ssa.gov/site/languages/en/'> Click Here</a> to go to a selection of translated pages. </p></div>";
    }else if(familySize =="seven" && income=="t7"){
      output.innerHTML = "<div id = 'output'><h1> You are qualified! </h1> <p> You qualify to apply for Medicare! You can proceed to the NYC Health website and fill out the forms for Medicaid. <br> <a href= 'https://nystateofhealth.ny.gov/'>Click Here To Sign Up</a>  or call (800) 541-2831<br> <br> If there is another language you prefer to view the form materials in <a href= 'https://www.ssa.gov/site/languages/en/'> Click Here</a> to go to a selection of translated pages. </p></div>";
    }else if(familySize =="eight" && income=="t8"){
      output.innerHTML = "<div id = 'output'><h1> You are qualified! </h1> <p> You qualify to apply for Medicare! You can proceed to the NYC Health website and fill out the forms for Medicaid. <br> <a href= 'https://nystateofhealth.ny.gov/'>Click Here To Sign Up</a>  or call (800) 541-2831<br> <br> If there is another language you prefer to view the form materials in <a href= 'https://www.ssa.gov/site/languages/en/'> Click Here</a> to go to a selection of translated pages. </p></div>";
    }else{
      output.innerHTML = "<div id = 'output'><h1> You are NOT qualified! </h1> <p> You do not qualify for Medicare. You can continue to seek out other insurances or call  (800) 541-2831 for assistance. </p></div>";
    }
    
  }