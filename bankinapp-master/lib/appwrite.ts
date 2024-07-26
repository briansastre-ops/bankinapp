"use server";

import { Client, Account, Databases, Users } from "node-appwrite"; // Importando módulos de Appwrite
import { cookies } from "next/headers"; // Importando cookies desde Next.js

// Función para crear un cliente de sesión
export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) // Configurando el endpoint del cliente
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!); // Configurando el proyecto del cliente

  const session = cookies().get("appwrite-session"); // Obteniendo la sesión de las cookies

  if (!session || !session.value) {
    throw new Error("No session"); // Lanzando un error si no hay sesión
  }

  client.setSession(session.value); // Configurando la sesión en el cliente

  return {
    get account() {
      return new Account(client); // Retornando una instancia de Account usando el cliente configurado
    },
  };
}

// Función para crear un cliente de administrador
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) // Configurando el endpoint del cliente
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!) // Configurando el proyecto del cliente
    .setKey(process.env.NEXT_APPWRITE_KEY!); // Configurando la clave del cliente

  return {
    get account() {
      return new Account(client); // Retornando una instancia de Account usando el cliente configurado
    },
    get database() {
      return new Databases(client); // Retornando una instancia de Databases usando el cliente configurado
    },
    get user() {
      return new Users(client); // Retornando una instancia de Users usando el cliente configurado
    }
  };
}
