export const whatsAppLink = () => {
  const isMobile = typeof window !== 'undefined' ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) : false;
  const whatsappNumber = "558296612000";
  const encodedMessage = encodeURIComponent("Olá, Gostaria de agendar uma aula experimental!");
  const baseLink = isMobile ? "https://api.whatsapp.com/send?phone=" : "https://web.whatsapp.com/send?phone=";
  const fullLink = `${baseLink}${whatsappNumber}&text=${encodedMessage}`;

  return fullLink;
}