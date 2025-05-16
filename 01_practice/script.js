const btnSubmit = document.getElementById("btnSubmit");
const noteForm = document.getElementById("noteForm");

noteForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const title = event.target.elements.dataTitle.value;
    const date = event.target.elements.dataTime.value;
    const content = event.target.elements.dataContent.value;
    document.getElementById("notePreview").innerHTML = 
    `<article>
        <strong>Title: <span>${title}</span></strong>
        <br>
        <strong>Date: <span>${date}</span></strong>
        <p>${content}</p>
    </article>`;
})