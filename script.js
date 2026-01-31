console.log('Hello World!')

const subscribe = document.getElementById('btn');
const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
const template = document.getElementById('success-template')
const container = document.body

const emailInput = document.getElementById("email");
const form = document.getElementById("mainform");
const errors = document.querySelector(".errors");


form.addEventListener('submit', (event) => {
    const emailval = emailInput.value;
    if (/[A-Z]/.test(emailval) || !emailval.includes('@')) {
        event.preventDefault();
        emailInput.classList.add('shake')
        emailInput.placeholder = 'Enter an email...'
        setTimeout(() => {
            emailInput.placeholder = 'email@company.com'
            emailInput.classList.remove('shake')
        }, 800)
    } else {
        event.preventDefault();
        
        const clone = template.content.cloneNode(true);
        clone.querySelector('.user-email').textContent = emailval + '. ';
        
        container.innerHTML = '';
        container.appendChild(clone);
    }
});

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

