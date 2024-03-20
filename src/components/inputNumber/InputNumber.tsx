import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
}

export default function InputNumber({ errorMessage, onChange, ...rest }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if ((/^\d+$/.test(value) || value === '') && onChange) {
      onChange(event)
    }
  }
  return (
    <div className='mt-2'>
      <input
        onChange={handleChange}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
        {...rest}
      />
      <div className='block text-sm font-medium leading-6 text-red-600 absolute'> {errorMessage}</div>
    </div>
  )
}
