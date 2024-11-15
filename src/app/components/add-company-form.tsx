import { Formik, Field, Form } from 'formik';
import LogoUploader from './logo-uploader';
import { useId } from 'react';
import InputField from './input-field';

type CompanyFieldsInitialValues = {
  logo: string;
  status: string;
  country: string;
  name: string;
  category: string;
  date: string;
  description: string;
};

const initialValues: CompanyFieldsInitialValues = {
  logo: '',
  status: '',
  country: '',
  name: '',
  category: '',
  date: '',
  description: '',
};

export default function AddCompanyForm() {
  const handleSubmit = (values: CompanyFieldsInitialValues) =>
    console.log(values);

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <p className="text-xl font-semibold mb-[42px]">Add new company</p>
          <div className="flex gap-7 items-end mb-10">
            <div className="flex flex-col gap-5">
              <LogoUploader
                label="Logo"
                placeholder="Upload photo"
                id={useId()}
                name="logo"
              />
              <InputField
                label="Status"
                id={useId()}
                name="status"
                placeholder="Title"
              />
              <InputField
                label="Country"
                id={useId()}
                name="country"
                placeholder="Description"
              />
            </div>
            <div className="flex flex-col gap-5">
              <InputField
                label="Name"
                id={useId()}
                name="name"
                placeholder="Title"
              />
              <InputField
                label="Category"
                id={useId()}
                name="category"
                placeholder="Title"
              />
              <InputField
                label="Joined date"
                id={useId()}
                name="date"
                placeholder="14.02.2021"
              />
              <InputField
                label="Description"
                id={useId()}
                name="description"
                placeholder="Description"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-zinc-50 font-medium bg-gray-900 p-2.5 w-full rounded hover:bg-gray-800 focus:bg-gray-800 transition-[background-color] ease-in-out duration-200"
          >
            Add company
          </button>
        </Form>
      </Formik>
    </div>
  );
}
