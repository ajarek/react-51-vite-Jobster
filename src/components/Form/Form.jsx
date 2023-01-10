import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Form.css'

export const Form = ({ onSubmit, label, nameInput }) => {
  const schema = yup.object().shape({
    name: nameInput ? yup.string().required() : null,
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'form'}
    >
      {nameInput ? (
        <input
          type='text'
          placeholder='👤Name...'
          {...register('name')}
        />
      ) : null}
      {nameInput ? <p>{errors.name?.message}</p> : null}
      <input
        type='text'
        placeholder='✉️Email...'
        {...register('email')}
      />
      <p>{errors.email?.message}</p>
      <input
        type='password'
        placeholder='🔒Password...'
        {...register('password')}
      />
      <p>{errors.password?.message}</p>
      <input
        type='submit'
        value={label}
      />
    </form>
  )
}
export default Form
