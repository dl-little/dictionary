import { ChangeEvent, FormEventHandler, useState } from 'react';
import FormGroup from './assets/components/FormGroup';
import data from './assets/inputs.json';
const inputs = data.inputs as InputGroup[];

function App() {
  const [formValues, setFormValues] = useState({});

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5050/faker', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <main className="p-4 h-full flex flex-col justify-center items-center [&>*:not(:first-child)]:mt-4">
      <h1>Faker Maker</h1>
      <form
        className="max-w-[768px] w-full [&>*:not(:first-child)]:mt-4"
        onSubmit={handleSubmit}
      >
        {inputs.map((group) => {
          return (
            <FormGroup key={group.id} input={group} handleInput={handleInput} />
          );
        })}
        <button
          type="submit"
          value="Create Entries"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default App;
