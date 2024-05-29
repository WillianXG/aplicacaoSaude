import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './form.css'; // Importe o arquivo CSS

const MyForm = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  return (
    <div className="form-container">
      <h3>Envie sua mensagem</h3>
      <br/>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'O campo está vazio';
          }
          if (!values.email) {
            errors.email = 'Email inválido';
          }
          if (!values.message) {
            errors.message = 'A mensagem não pode estar vazia';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setIsSubmittingForm(true); // Ativa o indicador de carregamento
          fetch('https://formsubmit.co/ajax/contatositeanacelia@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then(response => response.json())
            .then(data => {
              if (data.success) {
                setStatusMessage('Email enviado com sucesso!');
              } else {
                setStatusMessage('Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.');
              }
            })
            .catch(error => {
              console.error('Erro ao enviar email:', error);
              setStatusMessage('Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.');
            })
            .finally(() => {
              setIsSubmittingForm(false); // Desativa o indicador de carregamento
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" placeholder="Nome" className="field-input" />
            <ErrorMessage name="name" component="div" className="error-message" />
            <Field type="email" name="email" placeholder="Email" className="field-input" />
            <ErrorMessage name="email" component="div" className="error-message" />
            <Field as="textarea" name="message" placeholder="Digite sua Mensagem" className="message-input" />
            <ErrorMessage name="message" component="div" className="error-message" />
            <button type="submit" disabled={isSubmitting} className="submit-button">
              {isSubmittingForm ? 'Enviando...' : 'Enviar'}
            </button>
          </Form>
        )}
      </Formik>
      {statusMessage && <h1 className='success-message'>{statusMessage}</h1>}
    </div>
  );
};

export default MyForm;
