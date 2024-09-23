const openBreakfasts = () => {
  let mealButtons = document.querySelectorAll('[ng-show="showBreakfast"]');

  mealButtons.forEach(mb => {
    let popupLink = mb.querySelector('a');
    console.log('Opening breakfast modal');
    popupLink?.click();
  });
};

const openLunches = () => {
  let mealButtons = document.querySelectorAll('[ng-show="showMeals"]');

  mealButtons.forEach(mb => {
    let popupLink = mb.querySelector('a');
    console.log('Opening lunch modal');
    popupLink?.click();
  });
};

const addAllToCart = () => {
  let popups = document.querySelectorAll('[uib-modal-transclude]');

  popups.forEach(pu => {
    let addToCartButton = pu.querySelector('[ng-click="addToCart()"]');

    if (addToCartButton) {
      console.log('Adding to cart');
      addToCartButton?.click();
    } else {
      let closeButton = pu.querySelector('[ng-click="close()"]');
      console.log('Closing modal');
      closeButton?.click();
    }
  });
};
