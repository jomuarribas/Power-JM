import './footer.css'

export const footer = () => {
  const footer = document.getElementById('footer');

  const footerDiv = document.createElement('div');
  const footerCopy = document.createElement('p');

  footerCopy.textContent = '© Jonathan Muñoz 2023'

  footer.appendChild(footerDiv);
  footerDiv.appendChild(footerCopy);
};