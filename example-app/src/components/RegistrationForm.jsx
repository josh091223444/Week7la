// src/components/RegistrationForm.jsx
export default function RegistrationForm() {
  function handleSubmit(e) {
    e.preventDefault(); 


    const formData = new FormData(e.target);

  
    const data = Object.fromEntries(formData.entries());

   
    const output = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join(" — ");

    alert(`Submitted: ${output}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" required />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />
      </div>

      {/* Example of adding more fields */}
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" id="age" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
