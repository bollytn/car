/** @type {import('drizzle-kit').Config} */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials : {
    url: 'postgresql://car_owner:npg_lLA6YxGDPvb0@ep-muddy-sun-a5tysnce-pooler.us-east-2.aws.neon.tech/car?sslmode=require',
  }
}
  