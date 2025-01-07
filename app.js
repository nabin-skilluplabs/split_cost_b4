let totalAmount = 889;
let friends = [
  {
    firstName: 'Alex',
    lastName: 'Lee',
    mobile: '0420400163',
    email: 'alex.lee@gmail.com',
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    mobile: '0420400183',
    email: 'bob.smith@gmail.com',
  },
  {
    firstName: 'Charlie',
    lastName: 'Trump',
    mobile: '0420400283',
    email: 'charlie.trump@gmail.com',
  },
  {
    firstName: 'Donald',
    lastName: 'Trump',
    mobile: '0420400383',
    email: 'donald.trump@gmail.com',
  },
];

let shoppingItems = [
  {
    title: 'Grocery shopping',
    amount: 50,
    date: new Date(),
    isSettled: false,
  },
  {
    title: 'Aldi shopping',
    amount: 150,
    date: new Date(),
    isSettled: true,
  },
  {
    title: 'Picnic',
    amount: 450,
    date: new Date(),
    isSettled: true,
  },
];

const submitButtonElement = document.querySelector("input[type='submit']");
submitButtonElement.addEventListener('click', handleForm);

function handleForm(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const amount = document.getElementById('amount').value;
  if (!title || !amount) {
    return;
  }
  let shoppingItem = {
    title,
    amount: parseFloat(amount),
    date: new Date(),
    isSettled: false,
  };

  shoppingItems.unshift(shoppingItem);
  clearFormElements();

  refreshData(shoppingItems);
}

function getTotalAmount(shoppingItems) {
  const total = shoppingItems.reduce((total, item) => {
    if (!item.isSettled) {
      return total + item.amount;
    }
    return total;
  }, 0);
  return total;
}

function clearFormElements() {
  document.getElementById('title').value = '';
  document.getElementById('amount').value = '';
}
function showShoppingItems(shoppingItems) {
  const shoppingItemsElement = document.getElementById('shopping_items');
  let shoppingListElements = '';
  for (let shoppingItem of shoppingItems) {
    let shoppingItemElement = `<div  class="${
      shoppingItem.isSettled ? 'settled' : ''
    }">
        <div><h3>${shoppingItem.title}</h3>
            <time>${shoppingItem.date}</time>
        </div>
        <div>$${shoppingItem.amount}</div>
    </div>`;
    shoppingListElements += shoppingItemElement;
  }
  shoppingItemsElement.innerHTML = shoppingListElements;
}

// Function to display friends
function showFriends(friends) {
  const friendsElement = document.getElementById('friends');
  let friendListElements = '';
  for (let friend of friends) {
    let friendElement = `<div title="${friend.firstName} ${friend.lastName}"></div>`;
    friendListElements = friendListElements + friendElement;
  }
  friendsElement.innerHTML = friendListElements;
}

// Function to show unsettled amount
function showUnsettledAmount(unsettledAmount) {
  const unsettledAmountElement = document.getElementById('unsettled_amount');
  unsettledAmountElement.innerHTML = unsettledAmount;
}

const settleNowBtn = document.getElementById('settle_now_btn');
settleNowBtn.addEventListener('click', handleSettleNow);

function handleSettleNow() {
  shoppingItems = shoppingItems.map((item) => {
    item.isSettled = true;
    return item;
  });
  refreshData(shoppingItems);
}

function refreshData(shoppingItems) {
  showShoppingItems(shoppingItems);
  const totalAmount = getTotalAmount(shoppingItems);
  let unsettledAmount = totalAmount && totalAmount / friends.length;
  showUnsettledAmount(unsettledAmount);
}

showFriends(friends);
refreshData(shoppingItems);
