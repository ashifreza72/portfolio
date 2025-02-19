export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Ashif_Resume.pdf';
  link.download = 'Ashif_Resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
