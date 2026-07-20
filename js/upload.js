/* ==========================================
   PolicyChain
   upload.js
========================================== */

const uploadButton = document.getElementById("uploadBtn");

if(uploadButton){

uploadButton.addEventListener("click",uploadDocument);

}

function uploadDocument(){

const documentName=document.getElementById("documentName").value.trim();

const owner=document.getElementById("owner").value.trim();

const remarks=document.getElementById("remarks").value.trim();

const file=document.getElementById("documentFile").files[0];

if(documentName===""){

alert("Enter Document Name");

return;

}

if(owner===""){

alert("Enter Owner Name");

return;

}

if(!file){

alert("Select a File");

return;

}

const reader=new FileReader();

reader.onload=function(e){

const fileContent=e.target.result;

const hash=CryptoJS.SHA256(fileContent).toString();

const block=addInsuranceDocument(

documentName,

owner,

remarks

);

document.getElementById("result").innerHTML=`

<h3>Document Successfully Added</h3>

<p><b>File :</b> ${file.name}</p>

<p><b>Hash :</b><br>${hash}</p>

<p><b>Block Number :</b> ${block.index}</p>

<p><b>Timestamp :</b> ${block.timestamp}</p>

`;

};

reader.readAsBinaryString(file);

                              }
