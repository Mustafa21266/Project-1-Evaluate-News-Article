import handleSubmit from './js/formHandler'
//Bootstrap
import 'bootstrap';
// TODO include your scss file here
import './styles/style.scss';
window.addEventListener('DOMContentLoaded', () => {
    // TODO: get the button for submit
    const submitBTN = document.getElementsByClassName("btn-submit");
    console.log(submitBTN)
    // TODO: add event listener to it when the click to call handleSubmit function
    submitBTN[0].addEventListener('click', handleSubmit)
    let articleURLElement = document.getElementById("article-url");
    articleURLElement.addEventListener("keydown",()=>{
        let errorParaElement = document.getElementById("errorPara");
        if(errorParaElement.innerHTML.length > 0){
            errorParaElement.innerHTML = '';
            errorParaElement.classList.remove("alert" ,"alert-danger")
        }
    })
})
export { handleSubmit }
