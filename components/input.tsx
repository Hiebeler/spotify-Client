interface InputProps {
  label: string;
  placeholder: string | undefined;
  onChange: (input: string) => void
}

const Input = (props: InputProps) => {
  return (
    <>
      <label className="block text-text_light dark:text-text_dark font-bold">
        {props.label}
      </label>
      <input
        type="text"
        className="bg-gray-50 border-2 border-gray-300 text-foreground_light text-sm rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-foreground_dark"
        placeholder={props.placeholder}
        required
        onChange={(e) => props.onChange(e.target.value)}
      ></input>
    </>
  );
};

export default Input;
