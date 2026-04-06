function Calculateresult(){
    const n=document.getElementById("subjects").value
    let total=0;
    let i;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("enter the subject number"+(i+1)))
        total+=x;
    }
    let average=total/n;
    let grade;
    if(average>90){
        grade='A';
    }
    else if(average>75){
        grade='B';
    }
    else if(average>60){
        grade='C';
    }
    else if(average>35){
        grade='D';
    }
    else{
        grade='F';
    }
    let r;
    if (average>35){
        r="pass";
    }
    else{
        r="fail";
    }
let 
result=document.getElementById("result").innerHTML="Total Marks: "+total+
"</br>"+ "Average Marks: "+average+"</br>" + "Grade: "+grade+"</br>" + "Result: "+r+"</br>" 
}