(function () {
  'use strict';

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

  const makeButtonsBigger = () => {
    // Get all breakfast and lunch button containers
    const breakfastButtons = document.querySelectorAll(
      '[ng-show="showBreakfast"]'
    );
    const lunchButtons = document.querySelectorAll('[ng-show="showMeals"]');

    // Combine both arrays
    const allMealButtonContainers = [...breakfastButtons, ...lunchButtons];

    // Find all the <a> elements within these containers
    const allMealLinks = [];
    allMealButtonContainers.forEach(container => {
      const link = container.querySelector('a');
      if (link) {
        allMealLinks.push(link);
      }
    });

    console.log(`Found ${allMealLinks.length} meal links to enhance`);

    allMealLinks.forEach(link => {
      // Apply the enhanced styling to the <a> element
      link.style.padding = '10px 15px';
      link.style.marginBottom = '10px';

      // Add a visual indicator that the button has been enhanced
      link.style.transition = 'all 0.2s ease';
      link.style.borderRadius = '6px';

      // Add a subtle highlight effect
      link.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    });

    // Show a brief confirmation
    const originalText =
      document.querySelector('[onclick="makeButtonsBigger"]')?.textContent ||
      'Make Meal Buttons Bigger';
    const link = document.querySelector('[onclick="makeButtonsBigger"]');
    if (link) {
      link.textContent = '✓ Buttons enhanced!';
      link.style.color = '#28a824';
      setTimeout(() => {
        link.textContent = originalText;
        link.style.color = '#2196F3';
      }, 2000);
    }
  };

  // UI Creation Functions
  const createModal = () => {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'lunch-ordering-overlay';
    overlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
  `;

    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    position: relative;
    min-width: 300px;
    max-width: 400px;
    text-align: center;
  `;

    // Create close X button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
    closeButton.onclick = closeModal;

    // Create title
    const title = document.createElement('h2');
    title.textContent = 'Make It Easy';
    title.style.cssText = `
    margin: 0 0 25px 0;
    color: #333;
    font-size: 24px;
    font-weight: 600;
  `;

    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
  `;

    // Create buttons
    const openBreakfastsBtn = createButton(
      'Open All Breakfasts',
      openBreakfasts,
      'rgb(248, 148, 6)'
    );
    const openLunchesBtn = createButton(
      'Open All Lunches',
      openLunches,
      'rgb(45, 105, 135)'
    );
    const addAllToCartBtn = createButton(
      'Add All to Cart',
      addAllToCart,
      '#28a824'
    );

    // Create checkout button (copy of original)
    const checkoutBtn = createCheckoutButton();

    buttonContainer.appendChild(openBreakfastsBtn);
    buttonContainer.appendChild(openLunchesBtn);
    buttonContainer.appendChild(addAllToCartBtn);
    buttonContainer.appendChild(checkoutBtn);

    // Create make buttons bigger link
    const makeButtonsBiggerLink = document.createElement('div');
    makeButtonsBiggerLink.textContent = 'Make Meal Buttons Bigger';
    makeButtonsBiggerLink.style.cssText = `
    color: #2196F3;
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
    margin: 20px 0 15px 0;
    text-align: center;
  `;
    makeButtonsBiggerLink.onclick = () => {
      makeButtonsBigger();
      // Don't close the modal - let users access multiple functions
    };

    // Create checkbox container
    const checkboxContainer = document.createElement('div');
    checkboxContainer.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 15px 0;
    gap: 8px;
  `;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'hide-reopen-checkbox';
    checkbox.style.cssText = `
    width: 16px;
    height: 16px;
    cursor: pointer;
  `;

    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = 'hide-reopen-checkbox';
    checkboxLabel.textContent = 'Hide reopen button';
    checkboxLabel.style.cssText = `
    color: #666;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    margin-top: 9px;
  `;

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkboxLabel);

    // Create cancel text
    const cancelText = document.createElement('div');
    cancelText.textContent = 'Cancel';
    cancelText.style.cssText = `
    color: #666;
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
    margin-top: 10px;
  `;
    cancelText.onclick = closeModal;

    // Assemble modal
    modalContainer.appendChild(closeButton);
    modalContainer.appendChild(title);
    modalContainer.appendChild(buttonContainer);
    modalContainer.appendChild(makeButtonsBiggerLink);
    modalContainer.appendChild(checkboxContainer);
    modalContainer.appendChild(cancelText);
    overlay.appendChild(modalContainer);

    // Add to page
    document.body.appendChild(overlay);

    // Close on overlay click
    overlay.onclick = e => {
      if (e.target === overlay) {
        closeModal();
      }
    };

    return overlay;
  };

  const createButton = (text, onClick, color) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.cssText = `
      background-color: ${color};
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      transition: background-color 0.2s;
    `;

    button.onmouseover = () => {
      button.style.opacity = '0.9';
    };

    button.onmouseout = () => {
      button.style.opacity = '1';
    };

    button.onclick = () => {
      onClick();
      // Don't close the modal - let users access multiple functions
    };

    return button;
  };

  const createCheckoutButton = () => {
    // Find the original checkout button
    const originalCheckoutBtn = document.querySelector(
      '[ng-click="reviewOrder()"]'
    );

    if (!originalCheckoutBtn) {
      console.log('Original checkout button not found');
      return document.createElement('div'); // Return empty div if not found
    }

    // Create a copy of the original button
    const checkoutBtn = originalCheckoutBtn.cloneNode(true);

    // Add data attribute for cleanup
    checkoutBtn.setAttribute('data-checkout-button', 'true');

    // Remove any existing event listeners and add our own
    checkoutBtn.removeAttribute('ng-click');
    checkoutBtn.onclick = () => {
      // Trigger the original button
      originalCheckoutBtn.click();
      // Close modal when going to cart page
      closeModal();
    };

    // Style the button to match our modal design
    checkoutBtn.style.cssText = `
      background-color: #dc3545;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.2s;
      width: 100%;
    `;

    // Set up disabled state watcher
    const updateCheckoutButtonState = () => {
      const isDisabled =
        originalCheckoutBtn.disabled ||
        originalCheckoutBtn.classList.contains('disabled') ||
        originalCheckoutBtn.getAttribute('disabled') !== null;

      checkoutBtn.disabled = isDisabled;

      if (isDisabled) {
        checkoutBtn.style.opacity = '0.6';
        checkoutBtn.style.cursor = 'not-allowed';
        checkoutBtn.style.backgroundColor = '#6c757d';
      } else {
        checkoutBtn.style.opacity = '1';
        checkoutBtn.style.cursor = 'pointer';
        checkoutBtn.style.backgroundColor = '#dc3545';
      }
    };

    // Initial state update
    updateCheckoutButtonState();

    // Set up watcher using MutationObserver to watch for changes
    const observer = new MutationObserver(updateCheckoutButtonState);
    observer.observe(originalCheckoutBtn, {
      attributes: true,
      attributeFilter: ['disabled', 'class']
    });

    // Also watch for changes in the parent elements
    if (originalCheckoutBtn.parentElement) {
      observer.observe(originalCheckoutBtn.parentElement, {
        attributes: true,
        childList: true,
        subtree: true
      });
    }

    // Store observer reference for cleanup
    checkoutBtn._observer = observer;

    return checkoutBtn;
  };

  const closeModal = () => {
    const overlay = document.getElementById('lunch-ordering-overlay');
    if (overlay) {
      // Check if the hide reopen button checkbox is checked
      const hideCheckbox = document.getElementById('hide-reopen-checkbox');
      const shouldHideReopen = hideCheckbox && hideCheckbox.checked;

      // Clean up checkout button observer
      const checkoutBtn = overlay.querySelector('[data-checkout-button]');
      if (checkoutBtn && checkoutBtn._observer) {
        checkoutBtn._observer.disconnect();
      }

      overlay.remove();

      // Only show reopen button if checkbox is not checked
      if (!shouldHideReopen) {
        showReopenButton();
      }
    }
  };

  // Show modal function
  const showEasyButtons = () => {
    // Remove existing modal if present
    closeModal();
    // Hide the reopen button when modal is shown
    hideReopenButton();
    // Create and show new modal
    createModal();
  };

  // Reopen button functions
  const showReopenButton = () => {
    // Remove existing reopen button if present
    hideReopenButton();

    const reopenBtn = document.createElement('button');
    reopenBtn.id = 'reopen-easy-buttons';
    reopenBtn.textContent = 'Reopen Easy Buttons';
    reopenBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color:rgb(45, 105, 135);
    color: white;
    border: none;
    padding: 12px 16px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    transition: all 0.2s ease;
    font-family: Arial, sans-serif;
  `;

    reopenBtn.onmouseover = () => {
      reopenBtn.style.transform = 'translateY(-2px)';
      reopenBtn.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
    };

    reopenBtn.onmouseout = () => {
      reopenBtn.style.transform = 'translateY(0)';
      reopenBtn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    };

    reopenBtn.onclick = showEasyButtons;

    document.body.appendChild(reopenBtn);
  };

  const hideReopenButton = () => {
    const reopenBtn = document.getElementById('reopen-easy-buttons');
    if (reopenBtn) {
      reopenBtn.remove();
    }
  };

  // Auto-show modal when script loads
  showEasyButtons();
})();
