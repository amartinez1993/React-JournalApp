import { Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'Email must have an @'],
  password: [ (value) => value.length >= 6 , 'Password must be more than 6 characters'],
  displayName: [ (value) => value.length >= 1 , 'Name is required'],
}

export const RegisterPage = () => {

  const [formSubmitter, setFormSubmitter] = useState(false);

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
   } = useForm(formData, formValidations);


  const onSubmit = (event) => {
      event.preventDefault();
      setFormSubmitter(true);
  }

  return (
    <AuthLayout title="Register">
      <h1>FormValid: { isFormValid ? 'valido' : 'incorrecto'} </h1>
      <form onSubmit={ onSubmit }>
        <Grid container>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField 
                label="Name" 
                type="text" 
                placeholder="Fake Name" 
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitter }
                helperText={ displayNameValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField 
                label="Mail" 
                type="email" 
                placeholder="mail@google.com" 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmitter }
                helperText={ emailValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField 
                label="Password" 
                type="password" 
                placeholder="Password" 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmitter }
                helperText={ passwordValid }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                <Button
                  type="submit" 
                  variant='contained' 
                  fullWidth
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={ RouterLink } color='inherit' to="/auth/login">
              Sign Up
            </Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>

        
  )
}
