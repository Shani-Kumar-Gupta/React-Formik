import React from 'react';
import {useFormik} from 'formik';

function SimpleForm() {

    // called useFormik hook passing in an object and return object
    // Step 1: pass initial value of form field
    // Step 2: add onChange and value prop for each of the form field
    const formik = useFormik({
        initialValues : {
            name : '',
            email: '',
            channel : ''
        }
    }) 

    return (
        <div>
            <form>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>

                <label htmlFor='email'>E-mail:</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>

                <label htmlFor='channel'>Channel:</label>
                <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm
