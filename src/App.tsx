import { ChangeEvent, FormEventHandler, useState, useEffect } from 'react';
import FormGroup from './assets/components/FormGroup';
import data from './assets/inputs.json';
import getViteVar from './assets/helpers/getViteVar';
const inputs = data.inputs as InputGroup[];
const port = import.meta.env.VITE_EXPRESS_PORT || 5050;

function App() {
  const [formValues, setFormValues] = useState({});

  // This hook fires on initial render to add the default values of the input groups.
  useEffect(() => {
    inputs
      .filter((input) => {
        return Object.prototype.hasOwnProperty.call(input, 'default');
      })
      .forEach((obj) => {
        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          [obj.id]: getViteVar(obj.default),
        }));
      });
  }, []);

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

    if (Object.keys(formValues).length !== 5) {
      alert('Missing required fields!');
      return;
    }

    const response = await fetch(`http://localhost:${port}/faker`, {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let message;

    if (!response.ok) {
      message = `An error occurred: ${response.statusText}`;
    } else {
      message = await response.text();
    }

    alert(message);
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
