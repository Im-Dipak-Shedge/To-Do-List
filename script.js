function deleted(itemIndex) {
  console.log("deleted", itemIndex);
  itemJsonArraystr = localStorage.getItem("itemJson");
  itemJsonArray = JSON.parse(itemJsonArraystr);
  //deleting item index from the array
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  update();
}

function getAndUpdate() {
  tit = document.getElementById("title").value;
  desc = document.getElementById("description").value;
  if (localStorage.getItem("itemJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    // console.log("Item added");
    // document.getElementById("title").value = " ";
    // document.getElementById("description").value = " ";
    // document.getElementById("title").placeholder = "Enter Title ";
    // document.getElementById("description").placeholder = "Enter Description";
    location.reload();
    // tit.placeholder = "Enter Title";
    // desc.placeholder = "Enter Description";
  } else {
    itemJsonArraystr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    // console.log("hello");
    // document.getElementById("title").value = " ";
    // document.getElementById("description").value = " ";
    // document.getElementById("title").placeholder = "Enter Title";
    // document.getElementById("description").placeholder = "Enter Description";
    location.reload();

    // tit.placeholder = "Enter Title";
    // desc.placeholder = "Enter Description";
  }

  update();
}

function update() {
  if (localStorage.getItem("itemJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    console.log("Item added");
  } else {
    itemJsonArraystr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArraystr);
  }
  // populate the table
  tableBody = document.getElementById("tableBody");
  str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn btn-primary" onclick="deleted(${index})" >Delete</button></td>
  </tr>
    `;
  });
  tableBody.innerHTML = str;

  // tit = document.getElementById("title");
  // desc = document.getElementById("description");
}

function cleared() {
  warning = confirm("Do you really want to clear list?");
  if (warning == true) {
    localStorage.clear();
    update();
    console.log("cleared");
  } else {
    return;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  add = document.getElementById("add");
  add.addEventListener("click", getAndUpdate);
  update();
});
