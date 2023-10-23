let total = 0;
let itTileShow = false;
function handleClickBtn(target) {
  // const text =
    const selectedItems = document.getElementById("selected-items");
    
    if (!itTileShow) {
        const itemName = target.parentNode.parentNode.childNodes[1].innerText;
          const li = document.createElement("li");
          li.innerText = itemName;
        selectedItems.appendChild(li);
        li.style.display = "block";
        isFinite = true;
    }

  const price =
    target.parentNode.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(price);

  document.getElementById("total").innerText = total;

    const buyBtnS = document.getElementsByClassName("buy-btn");

    
}
