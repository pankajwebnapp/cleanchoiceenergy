import React, { useState } from 'react';
function Form() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <div className='container bor-top p-tb'>
                <div className='row justify-content-center text-center pb-5'>
                    <div className='col-lg-6'>
                        <img width={'50px'} src={require('../images/impact-icon.png')} />
                        <h3 className='mt-4 mb-3'>Send us a message</h3>
                        <p>We’d love to hear from you. Send us a message below, and a member of our Customer Care team will get back to you by the end of the next business day.</p>
                    </div>
                </div>
                <div className='row justify-content-center text-center'>
                    <div className='col-lg-8'>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-md-12 pb-4'>
                                    <select className='form-control' name='select'>
                                        <option >How can we help?*</option>
                                        <option value="Broker Inquiry">Broker Inquiry</option>
                                        <option value="Customer Question">Customer Question</option>
                                        <option value="Enrollment Process">Enrollment Process</option>
                                        <option value="Partnership Inquiry">Partnership Inquiry</option>
                                    </select>
                                </div>
                                <div className='col-md-6 pb-4'>
                                    <input type="text" className='form-control' name="firstname" value={formData.firstname} onChange={handleChange} placeholder='First Name*' required />
                                </div>
                                <div className='col-md-6 pb-4'>
                                    <input type="text" className='form-control' name="lastname" value={formData.lastname} onChange={handleChange} placeholder='Last Name*' required />
                                </div>
                                <div className='col-md-12 pb-4'>
                                    <input type="email" className='form-control' name="email" value={formData.email} onChange={handleChange} placeholder='Email*' required />
                                </div>
                                <div className='col-md-12 pb-4'>
                                    <textarea name="message" rows="3" className='form-control' value={formData.message} onChange={handleChange} placeholder='Write your message here *' required></textarea>
                                </div>
                                <div className='col-md-12 pb-4'>
                                    <button type="submit" className='btn-green'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
