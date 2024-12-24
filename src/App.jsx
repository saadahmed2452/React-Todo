import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const setNewTodo = () => {
    if (value.trim() === "") return; // Prevent adding empty todos
    if (editingIndex !== null) {
      // If editing, update the specific todo
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = value;
      setTodos(updatedTodos);
      setEditingIndex(null); // Reset editing state
    } else {
      setTodos([...todos, value]); // Add a new todo
    }
    setValue(""); // Clear the input field
  };

  const handleEdit = (index) => {
    setValue(todos[index]); // Load the value into the input field
    setEditingIndex(index); // Set the editing index
  };

  const handleDelete = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index); // Remove the specific todo
    setTodos(filteredTodos);
  };

  return (
    <section className="h-screen w-full bg-black text-white">
      <div className="flex justify-center items-center h-20 bg-gray-900">
        <h1 className="font-medium text-4xl mt-4">REACT TO_DO APP </h1>
      </div>
      <div className="mt-10 h-auto w-full flex justify-center ">
        <div className="w-1/2 flex justify-center items-center border gap-2 p-2 bg-gray-900">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter what you want"
            required
          />
          <button
            type="button"
            onClick={setNewTodo}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 mt-2 py-2.5 w-1/4 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 "
          >
            {editingIndex !== null ? "Update" : "Enter"}
          </button>
        </div>
      </div>

      <div className="relative flex justify-center mt-2 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Our products
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"></p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((ele, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {ele}
                </td>
                <td className="px-6 py-4 flex gap-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default App;

// import { useState } from "react";

// function App() {
//   // const [state, setstate] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const [value, setValue] = useState("");

//   const setNewTodo = () => {
//     const allTodos = [...todos, value];
//     setTodos(allTodos);
//     setValue("");
//   };

//   return (
//     <section className="h-screen w-full bg-black text-white">
//       <div className="flex justify-center items-center h-20 bg-gray-900 ">
//         <h1 className="font-medium text-4xl mt-4">REACT TO_DO APP </h1>
//       </div>
//       <div className="mt-10 h-auto w-full flex justify-center">
//         <div className="w-1/2 flex justify-center items-center  border gap-2 p-2">
//           <label
//             htmlFor="first_name"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           />
//           <input
//             type="text"
//             value={value}
//             onChange={(e) => {
//               setValue(e.target.value);
//             }}
//             id="first_name"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Enter what you want"
//             required
//           />
//           <button
//             type="button"
//             onClick={setNewTodo}
//             className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 mt-2 py-2.5 w-1/4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
//           >
//             Enter
//           </button>
//         </div>
//       </div>

//       <div className="relative flex justify-center mt-2 overflow-x-auto shadow-md sm:rounded-lg ">
//         <table className="w-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
//             Our products
//             <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
//               Browse a list of Flowbite products designed to help you work and
//               play, stay organized, get answers, keep in touch, grow your
//               business, and more.
//             </p>
//           </caption>
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 Product name
//               </th>

//               <th scope="col" className="px-6 py-3">
//                 <span className="sr-only">Edit</span>
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody id="dataTable">
//           {todos.map((ele, index) =>(
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//               <th
//                 scope="row"
//                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//               >

//               </th>

//               <td className="px-6 py-4 text-right">
//                 <a
//                   href="#"
//                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//                 >
//                   Edit
//                 </a>
//               </td>
//               <td className="px-6 py-4 text-right">
//                 <a
//                   href="#"
//                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//                 >
//                   Delete
//                 </a>
//               </td>
//             </tr>

//           ))}
//           </tbody>
//         </table>
//       </div>

//     </section>
//   );
// }

// export default App;
