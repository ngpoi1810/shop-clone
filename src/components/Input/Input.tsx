import type { UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  errorMessage?: string
  id?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
}

export default function Input({ type, placeholder, errorMessage, id, name, register }: Props) {
  return (
    <div className='mt-2'>
      <input
        id={id}
        type={type}
        autoComplete='on'
        placeholder={placeholder}
        className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        {...register(name)}
      />
      <div className='block text-sm font-medium leading-6 text-red-600 absolute'> {errorMessage}</div>
    </div>
  )
}
