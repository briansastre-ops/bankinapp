import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid'; // Importando módulos de la biblioteca Plaid

// Configuración de la API de Plaid
const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox, // Configurando el entorno de sandbox de Plaid
  baseOptions: {
    headers: { // Configurando los encabezados de la solicitud
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID, // Incluyendo el ID del cliente desde las variables de entorno
      'PLAID-SECRET': process.env.PLAID_SECRET, // Incluyendo el secreto del cliente desde las variables de entorno
    }
  }
});

// Creando una instancia de la API de Plaid con la configuración definida
export const plaidClient = new PlaidApi(configuration);
