// src/components/RegistrationForm.jsx
export default function RegistrationForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    alert(`Submitted: ${name} - ${email}`);
  }

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" required />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />
      </div>

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}
