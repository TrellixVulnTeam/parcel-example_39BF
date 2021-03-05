export const LoginPage = (render) => {
    const template = /*html*/ `
    <input type="text" name="username" placeholder="Inserisci Username"/>  
    <input type="password" name="pass" placeholder="Inserisci Password" />  
    <input type="submit" name="login"/>  
      `;
    render(template);
  };
  