// src/App.jsx
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <>
      <Header />

      <div className="page-container">
        <aside className="sidebar">
          <Sidebar />
        </aside>

        <main className="main-content">
          <div className="form-wrapper">
            <RegistrationForm />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
