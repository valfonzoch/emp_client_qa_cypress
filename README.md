# empresa banco QA Automation

Suite de automatizacion E2E y API con Cypress para el ecosistema banco CRM.

## Requisitos

- Node.js 20+
- npm 9+
- Google Chrome (para ejecuciones `--browser chrome`)

## Configuracion

1. Instalar dependencias:

```bash
npm install
```

2. Crear `.env` a partir de `.env.example` y completar valores reales:

```bash
cp .env.example .env
```

3. Crear `cypress.env.json` a partir de `cypress.env.json.example` y completar valores reales:

```bash
cp cypress.env.json.example cypress.env.json
```

4. (Opcional) Configurar variables de entorno para CI:

- `CYPRESS_RECORD_KEY`
- `CYPRESS_PROJECT_ID`
- `CYPRESS_BASE_URL`
- `CYPRESS_BASE_URL_CAMPAIGN`
- `CYPRESS_BASE_URL_API_ACCOUNT`
- `CYPRESS_BASE_URL_API_CARD`
- `CYPRESS_BASE_URL_API_PERSON`
- `CYPRESS_BASE_URL_API_DOCUMENT`
- `CYPRESS_BASE_URL_INFORMCONF`
- `VPN_USER`
- `VPN_PASSWORD`
- `VPN_GROUP`
- `VPN_GATEWAY`
- `VPN_SERVERCERT_PIN`
- `KEYCLOAK_CLIENT_SECRET`
- `KEYCLOAK_CLIENT_ID`
- `KEYCLOAK_TOKEN_URL`
- `KEYCLOAK_USER_CLIENT_ID`
- `KEYCLOAK_USER_NAME`
- `KEYCLOAK_USER_PASSWORD`
- `LOGIN_USER_banco`
- `LOGIN_PASSWORD_banco`
- `LOGIN_USER_CAMPAIGNS`
- `LOGIN_PASSWORD_CAMPAIGNS`
- `CONFIGURADOR_ROL_EMAIL`

## Ejecucion de pruebas

- Abrir runner interactivo:

```bash
npm run runner
```

- Ejecutar toda la suite:

```bash
npm test
```

- Ejecutar en Chrome:

```bash
npm run test:chrome
```

- Ejecutar suite de API:

```bash
npm run cy:run:file
```

## Reportes

- Generar reporte Allure:

```bash
npm run report-allure
```

- Abrir reporte Allure:

```bash
npm run abrir-report
```

- Limpiar artefactos de reportes:

```bash
npm run limpiar-reportes-allure
```

## Estructura principal

- `cypress/e2e/features`: specs UI y API
- `cypress/e2e/Pages`: page objects y helpers
- `cypress/fixtures`: datos de prueba
- `cypress/support`: comandos custom y hooks globales
- `azure-pipelines.yml`: pipeline CI

## Buenas practicas del repositorio

- No commitear secretos en codigo, pipeline o fixtures.
- Mantener credenciales en variables de entorno/secret manager.
- Evitar `cy.wait(ms)` fijos cuando se pueda sincronizar por estado o red.
- Preferir selectores estables y mantenibles.