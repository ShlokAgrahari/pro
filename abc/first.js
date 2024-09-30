const URL="https://cat-fact.herokuapp.com/facts";
const factval=document.querySelector("#fact");
const data=async ()=>{
    console.log("getting data");
    let response=await fetch(URL);
    console.log(response);
    let ans=await response.json();
    factval.innerText=ans[0].text;
};