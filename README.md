# Make It Easy - School Lunch Ordering Helper

A browser script that simplifies the school lunch ordering process by providing quick access to common actions and button enhancements.

## Features

- **Quick Action Buttons**: Open all breakfast/lunch modals, add items to cart, and go to checkout
- **Button Enhancement**: Make existing meal selection buttons bigger and more clickable
- **Smart Checkout Integration**: Copy of the original checkout button with real-time disabled state monitoring
- **Persistent Modal**: Stays open for multiple actions, only closes when appropriate
- **Floating Reopen Button**: Easy access to reopen the modal if accidentally closed
- **Customizable**: Option to hide the floating reopen button

## Installation & Usage

### Method 1: Browser Console (Recommended)
1. Navigate to your school's lunch ordering website
2. Open browser developer tools (F12 or right-click anywhere and select "Inspect element")
3. Go to the Console tab
4. Copy and paste the entire `makeItEasy.js` script
5. Press Enter to execute
6. The "Make It Easy" modal will appear automatically

### Method 2: Bookmarklet
1. Copy the script content
2. Create a new bookmark with this URL (replace `SCRIPT_CONTENT` with the actual script):
   ```javascript
   javascript:(function(){SCRIPT_CONTENT})();
   ```
3. Click the bookmark while on the lunch ordering page

## How to Use

### Main Actions

#### 🍳 Open All Breakfasts
- Opens all breakfast meal selection modals at once
- Useful for quickly opening all Breakfast Modals
- Overlay Modal stays open for additional actions

#### 🍽️ Open All Lunches  
- Opens all lunch meal selection modals at once
- Useful for quickly browsing all lunch options
- Overlay Modal stays open for additional actions

#### 🛒 Add All to Cart
- Adds all currently open meal modals to your cart
- Overlay Modal stays open for additional actions

#### 🛍️ Review Order (Checkout)
- Copies the original checkout button functionality
- Maintains all validation and disabled state logic
- Automatically closes the modal when clicked
- Button appearance changes based on cart state (eg items are in the cart)

### Utility Features

#### 🔧 Make Meal Buttons Bigger
- Enhances existing meal selection buttons on the page
- Adds padding, margins, and visual improvements
- Makes buttons more clickable
- Shows confirmation message when completed

#### ❌ Hide Reopen Button
- Checkbox option to hide the floating reopen button
- Useful if the button interferes with other page elements
- Setting persists until page refresh (in which case you will need to paste the code in the console again)

### Modal Controls

#### Close Options
- **X Button**: Top-right corner of modal
- **Cancel**: Text link at bottom of modal  
- **Click Outside**: Click anywhere outside the modal area
- **Review Order**: Automatically closes when going to cart page

#### Reopen Button
- Appears in bottom-right corner when modal is closed
- Click to reopen the "Make It Easy" modal
- Can be hidden using the checkbox option

## Workflow Examples

### Basic Ordering
1. Open the script in console
2. Click "Open All Lunches" to see all options
3. Click "Add All to Cart" to add selections
4. Click "Review Order" to go to checkout

### Enhanced Experience
1. Open the script in console
2. Click "Make Meal Buttons Bigger" for better visibility
3. Use "Open All Breakfasts" and "Open All Lunches" as needed
4. Add items to cart with "Add All to Cart"
5. Proceed to checkout with "Review Order"

## Technical Details

### Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Uses modern ES6+ features

### Dependencies
- No external libraries required

### Performance
- Lightweight script with minimal performance impact
- Uses MutationObserver for efficient state monitoring
- Automatically cleans up event listeners when modal closes

## Troubleshooting

### Modal Doesn't Appear
- Ensure you're on the correct lunch ordering page
- Check browser console for error messages
- Try refreshing the page and running the script again

### Buttons Don't Work
- Verify you're on a page with meal selection options
- Check that the page has loaded completely
- Look for console error messages

### Checkout Button Issues
- The checkout button copies the original button's state
- If disabled, it means the original checkout button is also disabled
- Ensure you have items in your cart before checking out

### Reopen Button Interference
- Use the "Hide reopen button" checkbox in the modal
- The button can be moved by modifying the CSS in the script

## Customization

### Modifying Button Colors
Edit the color values in the `createButton` function:
```javascript
const openBreakfastsBtn = createButton('Open All Breakfasts', openBreakfasts, 'rgb(248, 148, 6)');
```

### Changing Modal Title
Modify the title text in the `createModal` function:
```javascript
title.textContent = 'Make It Easy';
```

### Adjusting Button Sizes
Modify the padding values in the `makeButtonsBigger` function:
```javascript
link.style.padding = '10px 15px';
link.style.marginBottom = '10px';
```

## Support

This script is designed to work with HotLunchOnline v6.1.4 lunch ordering systems. If you encounter issues:

1. Check the browser console for error messages
2. Ensure you're on the correct page with meal selection options
3. Try refreshing the page and pasting the script again
4. Verify your browser supports modern JavaScript features

## License

This script is free to use and modify as you please
