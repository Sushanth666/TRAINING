// Task 1 — Smart Attendance Checker
    // Concept:
    // if else
    // logical operator
    // function
    // Scenario:
    // A student can enter exam hall only if:
    // attendance >= 75
    // fees paid = true
    // Expected:
    // Allowed for Exam
    // Otherwise:
    // Not Allowed

function checkExamEligibility(attendance, feesPaid) {

    if (attendance >= 75 && feesPaid === true) {

        console.log("Allowed for Exam")

    } else {

        console.log("Not Allowed")

    }

}

checkExamEligibility(80, true)






// Task 2 — Mobile Password Strength Checker
    // Concept:
    // string
    // conditions
    // Requirement:
    // Check password:
    // minimum 8 characters
    // should contain number
    // should contain uppercase
    // Example:
    // Abc12345
    // Output:
    // Strong Password


function checkPassword(password) {

    let hasUppercase = false
    let hasNumber = false

    for (let char of password) {

        if (char >= 'A' && char <= 'Z') {

            hasUppercase = true

        }

        if (char >= '0' && char <= '9') {

            hasNumber = true

        }

    }

    if (password.length >= 8 && hasUppercase && hasNumber) {

        console.log("Strong Password")

    } else {

        console.log("Weak Password")

    }

}

checkPassword("Abc12345")






// Task 3 — Find Second Largest Number
    // Concept:
    // loop
    // conditions
    // variables
    // Input:
    // [10,50,80,20,90,70]
    // Output:
    // 80

let numbers = [10, 50, 80, 20, 90, 70]

let largest = 0
let secondLargest = 0

for (let num of numbers) {

    if (num > largest) {

        secondLargest = largest
        largest = num

    } else if (num > secondLargest && num !== largest) {

        secondLargest = num

    }

}

console.log("Second Largest:", secondLargest)





// Task 4 — Bus Seat Booking System
    // Concept:
    // array
    // loop
    // conditions
    // Requirement:
    // Create 10 seats.
    // If seat booked:
    // Seat Already Booked
    // Else:
    // Seat Booked Successfully


let seats = [1,2,3,4,5,6,7,8,9,10]

let bookedSeats = []

function bookSeat(seatNumber) {

    if (bookedSeats.includes(seatNumber)) {

        console.log("Seat Already Booked")

    } else {

        bookedSeats.push(seatNumber)

        console.log("Seat Booked Successfully")

    }

}

bookSeat(5)
bookSeat(5)






// Task 5 — ATM Cash Withdraw Logic
    // Concept:
    // function
    // return
    // conditions
    // Rules:
    // balance = 10000
    // user cannot withdraw more than balance
    // minimum balance should maintain 1000
    // Example:
    // Withdraw:
    // 9500
    // Output:
    // Insufficient Balance


function withdrawAmount(balance, withdraw) {

    if (withdraw > balance) {

        return "Insufficient Balance"

    }

    if ((balance - withdraw) < 1000) {

        return "Minimum Balance Should Maintain 1000"

    }

    return "Withdraw Successful"

}

console.log(withdrawAmount(10000, 11000))






// Task 6 — Product Search Engine
    // Concept:
    // array
    // for of
    // string methods
    // Requirement:
    // Search product from array.
    // Example:
    // ["iphone","samsung","realme","oppo"]
    // Search:
    // realme
    // Output:
    // Product Found


let products = ["iphone", "samsung", "realme", "oppo"]

let searchProduct = "realme"

let found = false

for (let product of products) {

    if (product.toLowerCase() === searchProduct.toLowerCase()) {

        found = true

    }

}

if (found) {

    console.log("Product Found")

} else {

    console.log("Product Not Found")

}






// Task 7 — Voting Eligibility System
    // Concept:
    // nested if
    // logical operators
    // Rules:
    // Person can vote only if:
    // age >= 18
    // has voter id
    // citizenship = Indian


function checkVotingEligibility(age, hasVoterId, citizenship) {

    if (age >= 18) {

        if (hasVoterId === true && citizenship === "Indian") {

            console.log("Eligible to Vote")

        } else {

            console.log("Not Eligible to Vote")

        }

    } else {

        console.log("Not Eligible to Vote")

    }

}

checkVotingEligibility(22, true, "Indian")





// Task 8 — Online Food Order Bill
// Concept:
// function
// parameters
// arithmetic operators
// Requirement:
// Calculate:
// food price
// GST
// delivery charge
// discount
// Final Output:
// Total Bill : ₹450

function calculateBill(foodPrice, gst, deliveryCharge, discount) {

    let gstAmount = (foodPrice * gst) / 100

    let totalBill = foodPrice + gstAmount + deliveryCharge - discount

    console.log("Total Bill : ₹" + totalBill)

}

calculateBill(400, 5, 30, 0)






// Task 9 — Reverse Word Without reverse()
    // Concept:
    // loop
    // string
    // Input:
    // javascript
    // Output:
    // tpircsavaj

let word = "javascript"

let reversedWord = ""

for (let i = word.length - 1; i >= 0; i--) {

    reversedWord += word[i]

}

console.log(reversedWord)






// Task 10 — Mini Instagram Like System
    // Concept:
    // variable
    // function
    // ternary operator
    // Requirement:
    // When user clicks like:
    // Liked ❤️
    // Else:
    // Like 🤍
    // Also maintain total likes count.

let isLiked = false

let totalLikes = 0

function toggleLike() {

    isLiked = !isLiked

    isLiked ? totalLikes++ : totalLikes--

    console.log(isLiked ? "Liked ❤️" : "Like 🤍")

    console.log("Total Likes:", totalLikes)

}

toggleLike()
toggleLike()