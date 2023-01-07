import Navigation from '../../components/Navigation/Navigation'
import './Dashboard.css'

const Dashboard = () => {
  const token = localStorage.getItem('ID_TOKEN_KEY')
  
  return (
    <div className='dashboard'>
      
     {token? <Navigation />:<h1 style={{color:'red'}}>Invalid token specified !</h1>}
      
    </div>
  )
}

export default Dashboard
