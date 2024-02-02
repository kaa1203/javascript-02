const oldToadShop = {
    potions: [
        {
            id: 1,
            image: "./images/health-potion.PNG",
            name: "Health Potion",
            stock: 1,
            price: 350,
        },
        {
            id: 2,
            image: "./images/mana-potion.PNG",
            name: "Mana Potion",
            stock: 25,
            price: 300,
        },
        {
            id: 3,
            image: "./images/stamina-potion.PNG",
            name: "Stamina Potion",
            stock: 10,
            price: 300,
        },
        {
            id: 4,
            image: "./images/speed-potion.PNG",
            name: "Speed Potion",
            stock: 30,
            price: 250,
        },
        {
            id: 5,
            image: "./images/super-potion.PNG",
            name: "Super Potion",
            stock: 15,
            price: 500,
        }
    ],

    potionSold(potion) {
        const { name, stock, id , src, price} = potion;
        console.log(potion)
        let index = potions.findIndex(potion => potion.id == id);
        potions[index].stock -= 1;
        // console.log(potions[index].stock -= 1);
        potions.splice(index, 1, { id: id, name: name, stock: stock, src: src, price: price });
    }
}

const tbody = document.querySelector("tbody");
const shop = document.querySelector(".shop-table");
const speechBubble = document.querySelector(".speech-bubble");
const yes = document.querySelector("#yesBtn");
const no = document.querySelector("#noBtn");
// const pepe = document.querySelector("#dealer");


let potions = oldToadShop.potions;

potions.map((potion, index) => {
    const { image, name, stock, price } = potion;
    const tds =
    `<tr data-src="${image}" data-name="${name}" data-stock="${stock}" data-price="${price}" data-id="${index + 1}">
        <td><img src='${image}' alt='potion' class="potion image"></td>
        <td>${name}</td>
        <td>${stock}</td>
        <td>${price}</td>
        <td><a href="#/" class="button link buy-button" id="buyBtn${index + 1}">Buy</a></td>
    </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", tds);
});

yes.addEventListener("click", () => {
    shop.classList.remove("is-hidden");
    speechBubble.classList.add("is-hidden");
});

no.addEventListener("click", () => speechBubble.innerText = "Your loss kid, you will not find these kind of deals anywhere. Talk to me again, if you change your mind.");

const inventory = {
    bag: [
        
    ],
    gold: 10000,
}

document.querySelectorAll(".buy-button").forEach((btn) => {
    btn.addEventListener("click", () => {
        const potion = btn.parentNode.parentNode.dataset;
        oldToadShop.potionSold(potion);
        console.log(potions);
    });
});
