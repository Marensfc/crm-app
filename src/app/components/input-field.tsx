import { Field } from 'formik';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <Field
        id={id}
        {...rest}
        className="p-3 border border-solid border-gray-300 rounded shadow-input outline-none hover:border-slate-900 focus:border-slate-900 transition-border-color ease-in-out duration-200"
      />
    </div>
  );
}
