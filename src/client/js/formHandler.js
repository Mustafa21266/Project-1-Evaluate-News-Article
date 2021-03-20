import {checkURL} from './checkURL';
let url;
const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response
    } catch (error) {
        console.log(error)
    }
}
const handleSubmit = async (event) => {
    event.preventDefault();
    document.getElementsByClassName("hide-spinner")[0].classList.remove("hide-spinner");
    url = event.path[1][0].value || '';
    const data = new URLSearchParams();
    if(checkURL(url) & url !== ''){
        data.append("url",url);
        let result = await fetch('http://localhost:8081/add-post',{
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data
        }).then((result)=>{
            return result.json();
        }).then((data)=>{
            for(let key in data){
                if(document.getElementById(key) !== null ){
                    document.getElementById(key).textContent = data[key];
                    document.getElementById(key).classList.add('text-center');    
                }
            }
            document.getElementById("text").textContent = "N/A";
            document.getElementById("loading").classList.toggle("hide-spinner");
        })
            return true;
        }else {
            document.getElementById("loading").classList.add("hide-spinner");
            let errorParaElement = document.getElementById("errorPara");
            errorParaElement.classList.add("alert" ,"alert-danger");
            errorParaElement.innerHTML = 'Invalid url, please try again!';
            return false;
        } 
};

export default handleSubmit;
