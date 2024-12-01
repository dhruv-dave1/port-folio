
let links = document.querySelectorAll(".tab-links");
let contents = document.querySelectorAll(".tab-contents");


let openTab = (tabname)=>{
    links.forEach((link)=>{
    link.classList.remove("active-link");
    });

    contents.forEach((content)=>{
        content.classList.remove("active-tab")
    })
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add("active-tab")
}

