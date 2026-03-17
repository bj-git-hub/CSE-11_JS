function calculateResult(){
    const n = document.getElementById("subjects").value;
    let total = 0;
    for(let i=0; i<n;i++){
        let x = parseFloat(prompt("Enter the subject number " + (i +1 )));
        total +=x;
    }
    let average = total/n;
    let grade;
    if(avg>90){
        grade = 'A';
    }
    else if(avg>75){
        grade = 'B';
    }
    else if(avg>60){
        grade = 'C';
    }
    else if(avg>40){
        grade = 'D';
    }
    
    let r;
    if(avg>40){
        r = "pass";
    }
    else{
        r = "fail";
    }

    let result = document.getElementById("result").innerHTML +
    "Total Marks: " + total + "</br>" +"Average Marks: "+ average +"</br>"+ "Grade: "+ "</br>" + grade + "result" + r;
}