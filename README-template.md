# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learnt a lot of things which I'll list below 👇 
- Usage of arrays and objects 
- Understanding the DOM better 
- Finding out how forms work and creating my own validation rules
- Use of Regular Expressions (regex)
- How to create a new page after submission using the template element 
- Designing with the Mobile-first workflow
- Error identification and debugging 
- Effective usage of media queries 
- Little yet adequate use of animations

To see how you can add code snippets, see below:

```html
  <template id="success-template">
      <main class="success-section">
        <img src="images/icon-success.svg" alt="Success" width="20px" height="20px" class="success">
        <div class="success-msg">
          <h1 class="header">Thanks for subscribing!</h1>
          <p class="done">A confirmation email has been sent to <span class="user-email">ash@loremcompany.com.</span>Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <button class="dismiss" onclick="location.reload()">Dismiss message</button>
      </main>
  </template>
```
```css
	.shake {
		animation: shake 0.8s ease-in-out;
	}
	
	@keyframes shake {
		0% {
			transform: translateX(-5px);
		}
		
		25% {
			transform: translateX(5px);
		}
		
		50% {
			transform: translateX(-5px);
		}
		
		75% {
			transform: translateX(5px);
		}
		
		100% {
			transform: translateX(0px);
		}
	}
```
```js
emailInput.addEventListener('input', () => {
    // CRITICAL: Get the CURRENT value inside the listener
    const emailval = emailInput.value;
    
    const validationRules = [
    {
        test: (val) => /\s/.test(val),
        message: "Email cannot contain spaces."
    },
    {
        test: (val) => !val.includes('@'),
        message: "Email must contain an '@' symbol."
    },
    {
        test: (val) => {
            const parts = val.split('@');
            if (parts.length < 2) return false; // Let the '@' rule handle this
            const domain = parts[1];
            const domainParts = domain.split('.');
            const tld = domainParts[domainParts.length - 1];
            console.log(tld)
            return !domain.includes('.') ||
                domain.startsWith('.') ||
                domain.endsWith('.') ||
                tld.length < 2;
        },
        message: "Email must have a valid domain extension (e.g., .com or .io)."
    },
    {
        test: (val) => /[A-Z]/.test(val),
        message: "Email should not have capital letters."
    }];
    
    // Filter rules that return true (the "active" errors)
    const activeErrors = validationRules.filter(rule => rule.test(emailval));
    
    // 3. Output the results
    if (activeErrors.length > 0) {
        // Map the messages and join them with a break or comma 
        // so you see ALL of them, not just the last one.
        
        subscribe.disabled = true
        errors.innerText = activeErrors.map(err => err.message).join(" ");
    } else {
        // If no errors, clear the text
        subscribe.disabled = false
        errors.innerText = 'Email is valid✅';
    }
});
```

### Continued development

Looking for better ways to display errors to the user than the method I used



### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Github - [Triple K](https://github.com/triplekdev)
- Frontend Mentor - [@triplekdev](https://www.frontendmentor.io/profile/triplekdev)
- Twitter - [@3plkk](https://x.com/3plkk)