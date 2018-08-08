module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///knex_c'
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
