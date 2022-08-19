import BackgroundImage from './assets/background.png';

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
    height: '50rem',
    backgroundImage:`url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto auto',
    backgroundPosition:' center center',
  },
  description: {
    display: 'grid',
    justifyContent: 'center',
    padding: 'auto',
    paddingTop: '2rem',
  },
  logo:{
    width: '100%',
    paddingLeft: 'auto',
    paddingRight: 'auto',
  },
  form:{
    width:'30%',
    height: '50%',
    marginRight: 'auto' ,
    marginLeft: 'auto' ,
  }
}



