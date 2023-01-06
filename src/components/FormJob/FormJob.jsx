import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './FormJob.css'

export const FormJob = ({ onSubmit, label }) => {
  
  const schema = yup.object().shape({
    position:  yup.string().required(),
    company: yup.string().required(),
    location: yup.string().required(),
    status: yup.string().required('Selection is required'),
    type: yup.string().required('Selection is required'),
    date: yup.date(),
  })
 const  date= new Date()
  const currentDate=date.toISOString().split('T')[0]
  console.log(currentDate);
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
      <h1>Add Job</h1>
      <input
        type='text'
        placeholder='Position...'
        {...register('position')}
      />
      <p>{errors.position?.message}</p>
      <input
        type='text'
        placeholder='Company...'
        {...register('company')}
      />
      <p>{errors.company?.message}</p>
      <input
        type='text'
        placeholder='Job Location...'
        {...register('location')}
      />
      <p>{errors.location?.message}</p>

      <select
          {...register('status')}
          className='select'
        > 
            <option value='' selected disabled>Status</option>
          <option value='pending'>Pending</option>
          <option value='declined'>Declined</option>
          <option value='interview'>Interview</option>
          </select>
        <p>{errors.status?.message}</p>
        <select
          {...register('type')}
          className='select'
        > 
            <option value='' selected disabled>Job Type</option>
          <option value='full-time'>Full-time</option>
          <option value='part-time'>Part-time</option>
          <option value='remote'>Remote</option>
          <option value='internship'>Internship</option>
          </select>
        <p>{errors.type?.message}</p>
        <input 
        {...register('date')}
        type="hidden" 
         value= {currentDate}
         />
      <input
        type='submit'
        value={label}
      />
    </form>
  )
}
export default FormJob
