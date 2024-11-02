export default [
  {
    context: ['/api', '/oauth2', '/login', '/assets'],
    target: 'http://localhost:8080', // Spring Boot port
    secure: true
  }
]
