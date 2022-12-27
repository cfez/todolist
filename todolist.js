function todoList() {
    if (localStorage.length != 0) {
       /* const values = [];*/
        let keys = Object.keys(localStorage);
        keys.sort(function(a, b){return b - a});
        let half = ""
        let i = keys.length;
        while (i--) {
            let id = keys[i];
            let taskCover = id + 1000;
            const value = JSON.parse(localStorage.getItem(id));
            
            createdList(id, taskCover, value[0]);
            
            //values.push(value);

        }

        /*values.forEach(element => {
              document.getElementById("theta").innerHTML += `<div id ="${id}"><li id = "horse"> ${element} </li> <button onclick="removeStorage(${id})">Close</button><button onclick="editStorage(${id})">Edit</button></div>`
          });*/

    }
}



function saveToLocalStorage() {
    let value = document.getElementById("toDoValue").value;
    
    if (value == "" || value == "undefined") {
        alert("It can't be blank");
        return;
    }
    if (value.length < 4) {
        alert("Input more characters");
        return;
    }
    
    let d = new Date();
    let id = d.getTime();
    let taskCover = id + 1000;
    const stoItem = [value, d.getDay(), d.getHours(), d.getMinutes()];
    
    
    localStorage.setItem(id, JSON.stringify(stoItem));
    alert("Saved");
    createdList(id, taskCover, value);
    
}


/* todoItems.addEventListener('click', function(event) {
     removeStorage()
 })*/
;


let isEditActive = false;

function editStorage(id, taskCover) {
    
    if(isEditActive == false){
        isEditActive = true;
    //let taskContainer = document.getElementById(id);
    let eSInputValue = document.getElementById(taskCover);
    let inputValue = eSInputValue.textContent;
    
    eSInputValue.innerHTML = `<input id="edited-input" type="text" value="${inputValue}"/>\
                               <button id="edit-storage-button" onclick="">Edit</button>`;
    let editStorageButton = document.getElementById("edit-storage-button");
    let editedInput = document.getElementById("edited-input");

    editStorageButton.addEventListener('click', function () {
        let newEditedInput = editedInput.value;
        if (newEditedInput === "") {
            alert('should not be empty');
        }
        let editstoreItem= JSON.parse(localStorage.getItem(id))
        let storeItem = [editedInput.value, editstoreItem[1], editstoreItem[2], editstoreItem[3]];
        localStorage.setItem(id, JSON.stringify(storeItem));
        eSInputValue.outerHTML = `<div id ="${taskCover}" class="input-value">${newEditedInput}</div>`;
        isEditActive = false;

    })}
    else{
        alert("Save first");
    }
}

function removeStorage(id, taskCover) {
    let taskContainer = document.getElementById(id);
    taskContainer.remove();
    localStorage.removeItem(id);



}




function toggabledevice() {
    let menuLeft = document.getElementById("leftMenu");
    let Xsign = document.getElementById("closesign");
    let menuIcons = document.getElementById("menu_icons");
    let bodyOverLay = document.getElementById("bodyContainerOverlay");

    if (menuLeft.style.width === "400px") {
        menuLeft.style.width = "0";
        Xsign.style.display = "none";
        menuIcons.style.display = "inline-block";
        bodyOverLay.style.visibility = "hidden";
    } else {
        menuLeft.style.width = "400px";
        Xsign.style.display = "inline-block";
        menuIcons.style.display = "none";
        bodyOverLay.style.visibility = "visible";
    }
}

function arrowToggable(){
    let arrowButton = document.getElementById("arrowDownSign");
    let projectList = document.getElementById("project_list");
    if (projectList.style.display == "none"){
        projectList.style.display = "block";
        arrowButton.style.transform = "rotate(0deg)"
        
    }
    else{
        projectList.style.display = "none";
        arrowButton.style.transform = "rotate(90deg)"
        
    }
}



// function to write and apply the list tag to the users todolist
function createdList(id, taskCover, value){
    document.getElementById("theta").innerHTML += `<li id ="${id}"  class="user-input-list">\
                                                                <div id="user-input-cover">\
                                                                    <div></div>\
                                                                    <button class="circle-button">\
                                                                        <div>\
                                                                            <svg width="24" height="24" class="user-input-circle-svg">\
                                                                                <path fill="currentColor" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path>\
                                                                            </svg>\
                                                                        </div>\
                                                                    </button>\
                                                                    <div id ="${taskCover}" class="input-value">${value}</div>\
                                                                    <button onclick="removeStorage(${id})" class="close-button hidden-button" title="Delete" >\
                                                                        <svg width="20" height="20" version="1.1" viewBox="0 0 24 24.001" id="svg-button-close">\
                                                                            <g transform="translate(-52.565 -79.432)">\
                                                                                  <path d="m67.136 87.785v12.933m-5.1577-12.933v12.933m2.5641-21.136c-0.95081-6e-6 -1.9659 0.27978-2.5211 1.0244-0.55522 0.74466-1.0633 2.6117-1.3173 3.5451s7.9305 0.93348 7.6765-1.4e-5c-0.254-0.9335-0.76199-2.8005-1.3172-3.5451-0.55518-0.74464-1.5701-1.0244-2.5209-1.0244zm-11.977 5.6513h24-24zm5.1765 0.07732s0 15.955 0.28806 16.262c0.28806 0.30677 1.1609 1.2362 1.4149 1.5068s9.9869 0.27053 10.241 0c0.25406-0.27053 1.127-1.2001 1.4151-1.5068 0.28807-0.30674 0.28807-16.262 0.28807-16.262l-13.647-9e-6z" fill="none" stroke="#B8B8B8" stroke-width="1.30024"/>\
                                                                            </g>\
                                                                        </svg>\
                                                                    </button>\
                                                                    <button onclick="editStorage(${id}, ${taskCover})" class="edit-button hidden-button" title="Edit">\
                                                                        <div>\
                                                                            <svg width="20" height="20">\
                                                                                <g fill="none" fill-rule="evenodd">\
                                                                                      <path fill="#B8B8B8" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"></path>\
                                                                                      <path stroke="#B8B8B8" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"></path>\
                                                                                </g>\
                                                                            </svg>\
                                                                        </div>\
                                                                    </button>\
                                                                </div>\    
                                                            </li>`
}