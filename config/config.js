module.exports = {
  development: {
    'database': 'specification_form_validation_development',
    'username': 'postgres',
    'password': 'password',
    'dialect': 'postgres',
  },
  test: {
    'use_env_variable': 'DATABASE_URL',
    'dialect': 'postgres',
  },
  production: {
    'use_env_variable': 'DATABASE_URL',
    'dialect': 'postgres',
  },
}
