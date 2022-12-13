// // // import React, { useState } from "react";


// // // function App() {

// // //     const [counter, setCounter] = useState(0);

// // //     // method 1 : functional update method, should be used when the new value depends on the older value (RECOMMENDED)
// // //     function increase() {
// // //         setCounter(oldCounterValue => oldCounterValue + 1);
// // //     }
// // //     function decrease() {
// // //         setCounter(oldCounterValue => oldCounterValue - 1);
// // //     }

// // //     // method 2 : direct update method, should be used when the new value does not depend on the older value
// // //     // function increase() {
// // //     //     setCounter(counter + 1);
// // //     // }
// // //     // function decrease() {
// // //     //     setCounter(counter - 1);
// // //     // }

// // //     return (
// // //         <div>
// // //             <h1>Counter: {counter}</h1>
// // //             <button onClick={increase}>Inc the counter!</button>
// // //             <button onClick={decrease}>Dec the counter!</button>
// // //         </div>
// // //     );
// // // }

// // // export default App;

// // // =====================================
// // // import React, { useState } from "react";


// // // const quotes = [
// // //     "I am the one who knocks!",
// // //     "Say my name!",
// // //     "I see dead people.",
// // //     "Hasta la vista, baby.",
// // //     "You're gonna need a bigger boat.",
// // // ]
// // // function App() {

// // //     const [quote, setQuote] = useState(quotes[0]);
// // //     function randomQuote() {
// // //         setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
// // //     }

// // //     return (
// // //         <div>
// // //             <div className="App">{quote}</div>
// // //             <button onClick={randomQuote}>Click Me !</button>
// // //         </div>
// // //     );
// // // }

// // // export default App;


// // // ========================================
// // import React, { useState, useEffect } from "react";


// // function App() {

// //     const [counter, setCounter] = useState(0);
// //     useEffect(() => {
// //         console.log("useEffect ran", counter);
// //     }, [counter]); // only run when counter changes (dependency array)
// //     // useEffect is a hook that runs when the component is rendered (or re-rendered) for the first time and every time it is re-rendered usecase: fetch data from an API and set it to state (or do something else)

// //     function increase() {
// //         setCounter(oldCounterValue => oldCounterValue + 1);
// //     }
// //     function decrease() {
// //         setCounter(oldCounterValue => oldCounterValue - 1);
// //     }

// //     return (
// //         <div>
// //             <h1>Counter: {counter}</h1>
// //             <button onClick={increase}>Inc the counter!</button>
// //             <button onClick={decrease}>Dec the counter!</button>
// //         </div>
// //     );
// // }

// // export default App;

// // ===============================
// import React, { useState } from "react";


// function App() {

//     const [task, setTask] = useState("");
//     const [todos, setTodos] = useState(["task1", "task2", "task3"]);

//     function createTodo(event) {
//         event.preventDefault();
//         setTask(""); // clear the input field
//         setTodos(prevTodos => [...prevTodos, task]);
//     }
//     // function onKeyEnter(e) {
//     //     if (e.keyCode === 13) {
//     //         createTodo();
//     //     }
//     // }
//     // using form is better than using onKeyEnter
//     return (
//         <div>
//             <form >
//                 <h1>Best To Do App</h1>
//                 <input
//                     // onKeyDown={onKeyEnter}
//                     type="text"
//                     value={task}
//                     onChange={(e) => setTask(e.target.value)} />

//                 <button onClick={createTodo}>Click to add</button>
//             </form>

//             <ul>
//                 {todos.map((todo, index) => <li key={index}> {todo}</li>)}
//             </ul>
//         </div>
//     );

// }

// export default App;
