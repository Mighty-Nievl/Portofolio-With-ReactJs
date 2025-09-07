import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Proses kirim data, misal ke API
        alert('Pesan berhasil dikirim!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div id='contact' className="contact-container">
            <h2>Kontak Kami</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nama:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Pesan:</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Kirim</button>
            </form>
        </div>
    );
};

export default Contact;