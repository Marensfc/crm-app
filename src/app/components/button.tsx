'use client';

export default function Button({ ...rest }) {
  return (
    <button
      {...rest}
      className="font-medium text-zinc-50 bg-gray-900 px-5 py-2.5 rounded"
    />
  );
}
