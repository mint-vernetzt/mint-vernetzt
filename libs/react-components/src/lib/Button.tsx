/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <button className="border border-blue-600 hover:border-blue-800 rounded-md bg-blue-500 hover:bg-blue-700 px-4 py-2 text-md text-white">
      Button
    </button>
  );
}

export default Button;
