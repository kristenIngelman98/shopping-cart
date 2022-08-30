let storeItems = document.getElementById("store-items");

let buildStore = () => {
    return (storeItems.innerHTML = storeData.map((item) => {
        let { id, img, name, description, price, addButton } = item;
        console.log(storeItems)
        return `
        <div id=product-id-${id} class="item">
           
            <div class="details">
                <img width="220" src=${img} alt="">
                <div class="text-details">
                <h3>${name}</h3>
                <p>${description}</p>
                <p>${price}</p>
                <button>${addButton}</button>
                </div>
            </div>
        </div>
        `;
    })
    .join(""))
}

buildStore()