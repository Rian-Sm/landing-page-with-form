import BackgroundImage from './assets/bg.png';
import phoneImage from './assets/celular.png';
const center = {
  display: 'grid',
  justifyContent: 'center',
  padding: 'auto',
  paddingTop: '2rem'
}
const imagePosition = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto auto',
  backgroundPosition:' center center',
}
export const styles = {
  container: {
    width:'100%',
    height: '100%',
    marginRight: 'auto' ,
    marginLeft: 'auto' ,
    backgroundColor: '#391e4f'
  },
  background:{
    width:'100%',
    height: '100%',
    backgroundImage:`url(${BackgroundImage})`,
    ...imagePosition,
    
  },
  ilustrationPhone:{
    ...center,
    width:'100%',
    height: '25em',
    backgroundImage:`url(${phoneImage})`,
    ...imagePosition,
    marginTop:'1.5em',
  },
  description: {
    ...center,
  },
  logo:{
    width: '100%',
    paddingLeft: 'auto',
    paddingRight: 'auto',
  },
  form:{
    width:'50%',
    height: '50%',
    marginRight: 'auto' ,
    marginLeft: 'auto' ,
  }
}
