export const whatsAppLink = () => {
  const whatsappNumber = "558296612000";
  const encodedMessage = encodeURIComponent("Olá, gostaria de agendar uma aula experimental!");
  const fullLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

  return fullLink;
};
