import { Routes, Route } from "react-router-dom";
import ShoppingListPage from "./pages/ShoppingListPage";
import BillPage from "./pages/BillPage";
import { io } from "socket.io-client";
import { useEffect } from "react";
function App() {
  //   useEffect(() => {
  //     // Connect to the Socket.io server
  //     const socket = io("http://localhost:3000"); // Node.js server URL

  //     // Check for connection success
  //     socket.on("connect", () => {
  //       console.log("Connected to Socket.io server:", socket.id);
  //     });

  //     // Check for the connection success message from the server
  //     socket.on("connectionSuccess", (data) => {
  //       console.log(data.message); // Should log 'You are connected!'
  //     });

  //     // Clean up the socket connection on component unmount
  //     return () => {
  //       socket.disconnect();
  //     };
  //   }, []);
  return (
    <>
      <div className=" p-4 w-full h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<ShoppingListPage />} />
          <Route path="/bill" element={<BillPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
