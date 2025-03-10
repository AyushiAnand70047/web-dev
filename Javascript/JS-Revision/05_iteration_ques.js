let expenses = [
    {description: "Groceries", amount: 50, category: "Food"},
    {description: "Electricity Bill", amount: 100, category: "Utilities"},
    {description: "Dinner", amount: 30, category: "Food"},
    {description: "Internet Bill", amount: 50, category: "Utilities"}
];

// let expenseReport = expenses.reduce((report,expense)=> {
//     report[expense.category] += expense.amount
//     return report;
// }
// ,{Food: 0, Utilities: 0})

// console.log(expenseReport)

let expenseReport = expenses.reduce((report, expense) => {
    report[expense.category] = (report[expense.category] || 0) + expense.amount
    return report
},{})

console.log("Expense Report ",expenseReport);

let tasks = [
    {description: "Write report", completed: false, priority: 2},
    {description: "Send email", completed: true, priority: 3},
    {description: "Prepare presentation", completed: false, priority: 1},
];

let pendingSortedTask = tasks
.filter((task) => !task.completed)
.sort((a,b) => a.priority - b.priority)

console.log(pendingSortedTask)

let movieRatings = [
    {title: "Movie A", ratings: [4, 5, 3]},
    {title: "Movie B", ratings: [5, 5, 4]},
    {title: "Movie C", ratings: [3, 4, 2]},
];

// let averageRating = movieRatings.map((movie) => {
//     let currRating = 0
//     movie.ratings.forEach((r)=> {
//         currRating += r
//     })
//     return {title: movie.title,avgRating: (currRating/movie.ratings.length).toFixed(2)}
// })

// console.log(averageRating)

let averageRatings = movieRatings.map((movie)=>{
    let total = movie.ratings.reduce((sum,rating) => sum + rating, 0)
    let average = total / movie.ratings.length;
    return {title: movie.title, averageRating: average.toFixed(2)};
})

console.log(averageRatings);