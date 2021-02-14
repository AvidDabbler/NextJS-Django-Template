import { makeStyles } from '@material-ui/core/styles';


const textInput = makeStyles({
    root: {
        marginBottom: '20px',
        textAlign: 'center'
    },
  });

const purpleButton = makeStyles({
    root: {        
        padding: '8px 15px',
        fontWeight: 500,
        color: 'purple',
        border: 0,
        borderRadius: '6px',
        color: 'white',

    }
})

export {textInput, purpleButton}