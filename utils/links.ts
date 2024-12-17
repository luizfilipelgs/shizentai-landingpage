export const whatsAppLink = () => {
  const whatsappNumber = "558296612000";
  const encodedMessage = encodeURIComponent("Olá, gostaria de agendar uma aula experimental!");
  const fullLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

  return fullLink;
};


export const schedulingLink = 'https://agendamento.nextfit.com.br/8a0f553b-2dbf-4bd2-bc99-d2feee05f69e'
export const plansLink = 'https://venda.nextfit.com.br/e21ffd6f-89b0-4d7a-8157-526d01081bae/contratos'