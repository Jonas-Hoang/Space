let getRow = document.getElementsByClassName("row")[3];
let getImg = document.getElementsByClassName("imgsrc");
let clickLink = document.getElementById("loadMore");
let getOPImg = document.getElementsByClassName("ourProjectImg");
let getDPImg = document.getElementsByClassName("detailProjectImg");
let getPImgs = document.getElementsByClassName("p-img");
let getPNames = document.getElementsByClassName("p-name");
let getPPositions = document.getElementsByClassName("p-work-position");
n = 0;
clickLink.onclick = () =>{
    $.getJSON('https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/gallery', function(data) {
        for(i = n+4; i< n+8; i++){
            data_id = data[i].id;
            let link = data[i].srcImg;
            createSquare(link);
        }
        n+=4;
    })
}
getPersonel();
getData("gallery",getImg);
getData("ourproject",getOPImg);
getData("ourproject",getDPImg);
function createSquare(link){
    const div = document.createElement("div");
    div.setAttribute("class","col-12 col-md-6 col-lg-3");
    const divImgage = document.createElement("div");
    divImgage.setAttribute("class","img-container");

    const imgage = document.createElement("img");
    imgage.setAttribute("class","col-12 imgsrc");
    imgage.setAttribute("src",link);
    imgage.setAttribute("alt","");

    const pname = document.createElement("p");
    pname.innerHTML = ("Foam");

    const spdate = document.createElement("span");
    spdate.innerHTML = ("Nov 9, 2015");
    

    div.appendChild(divImgage);
    divImgage.appendChild(imgage);
    divImgage.appendChild(pname);
    divImgage.appendChild(spdate);
    
    getRow.append(div);
}
function getData(dataURLname,somthing){
    $.getJSON('https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/'+dataURLname, function(data) {
        for(i = 0; i<somthing.length;i++){somthing[i].src = data[i].srcImg;}}
    )
}
function getPersonel(){
    let dataURLname = "personel"
    $.getJSON('https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/'+dataURLname, function(data) {
        for(i = 0; i<getPImgs.length;i++){getPImgs[i].src = data[i].srcImg;getPNames[i].textContent = data[i].name;getPPositions[i].textContent = data[i].position;}})
}