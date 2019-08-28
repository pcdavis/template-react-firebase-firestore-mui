import React from 'react'



//This is a react hook that gets used in the sign in form
//authType is a number (0 or 1) that identifies if the user is signing in(0) or creating a new account(1), which determines if a username is part of validation errors
function useFormValidation(initialState, validate, authenticateUser, authType){
    const [values, setValues] = React.useState(initialState)
    const [errors, setErrors] = React.useState({})
    const [isSubmitting, setSubmitting] = React.useState(false)

    //React.useEffect gives you access to lifecycle events to check for changes or do things when things render. You give it a callback function (arrow in this case), and that will run whenever their is a change to any items in the second array argument (in this case - chnages to errrors)
    React.useEffect(() => {
        if(isSubmitting){
            const noErrors = Object.keys(errors).length === 0;
            if(noErrors){
                authenticateUser()
                setSubmitting(false)
            } else {
                setSubmitting(false)
            }
        }
    }, [errors])

    //handleInputChange gets passed to login form to use 
    function handleInputChange(event){
        
        event.persist();//use this when updating state - it's a react thing to deal with react's synthetic event system. details here: https://medium.com/trabe/react-syntheticevent-reuse-889cd52981b6  
        setValues(previousValues => ({
            ...previousValues,
            [event.target.name]: event.target.value
        }))
    }

    function handleBlur(){
        const validationErrors = validate(values, authType);
        setErrors(validationErrors)
    }

    function handleSubmit(event){
        event.preventDefault();
        const validationErrors = validate(values, authType);//this comes in as an argument to useFormValidation. It's one of multiple possible functions I can choose (e.g. validateLogin or validateCreateLink) that runs validation checks on the input data 

        //object.keys turns object into an array of keys to see if there are any errors returned
        if(Object.keys(validationErrors).length === 0){
            //if length === 0 then there are no validation errors and you can authenticate - else skip to setErrors below to add errors object to state that gets returned from useFormValidation for use in the UI
            console.log({values})
            //authenticateUser comes in as an argument from useFormValidation (it's either the register or login function preloaded with email, password, username)
            const response = authenticateUser()
            console.log('response from inside useFormValidation handleSubmit', response)
        }  else {
            setErrors(validationErrors);
            setSubmitting(true)
            console.log('you have errors: ', validationErrors)
        } 
            
    }

    //return an object with keys that can be destructured in other modules
    return { handleInputChange, handleBlur, handleSubmit, values, errors, isSubmitting }
}

export default useFormValidation;
