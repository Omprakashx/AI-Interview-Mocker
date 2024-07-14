/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:AGmDv2Ngi9ky@ep-polished-sun-a43l0epr.us-east-1.aws.neon.tech/AI-Interview-Mocker?sslmode=require',
    }
  };
  