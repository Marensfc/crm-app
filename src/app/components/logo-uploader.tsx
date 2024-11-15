import Image from 'next/image';
import UploadIcon from '../../../public/icons/upload.svg';

interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export default function LogoUploader({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) {
  return (
    <div className="flex items-start gap-5">
      {label && <p>{label}</p>}
      <label
        htmlFor={id}
        className="bg-white w-44 h-44 rounded-full flex flex-col items-center justify-center cursor-pointer border border-dashed border-slate-900"
      >
        <Image src={UploadIcon} width={48} height={48} alt="Upload" />
        {placeholder && <p className="text-sm text-gray-500">{placeholder}</p>}
        <input
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
          {...rest}
        />
      </label>
    </div>
  );
}
