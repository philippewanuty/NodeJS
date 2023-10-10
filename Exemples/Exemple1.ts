interface Usuario {
  name: string;
  email: string;
  phone?: string;
}

function sendMail({ email, name, phone }: Usuario) {
  console.log(`Hello ${name} your email is ${email} and your phone is ${phone}`);
}

sendMail({
  email: 'contact@philippewanuty.com',
  name: 'Philippe',
  phone: '84999999999',
});