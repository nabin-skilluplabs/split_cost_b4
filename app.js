let unsettledAmount = 120;
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
];

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

showFriends(friends);
showUnsettledAmount(150);
