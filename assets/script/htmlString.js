const htmlTemplate = user => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${user.name} Portfolio</title>
  <style>

  </style>
</head>
<body>
  <header>
    <h1>${user.name}</h1>
  </header>
  <main>
    <h2>I am from ${user.location}</h2>
    <h2>My favorite part of front end dev is ${user.favFrontEnd}</h2>
    <h2>I prefer ${user.favFullStack}</h2>
    <h2>My Github user name is ${user.githubName}</h2>
    <h2>My linkedIn profile is <a href="${user.linkedInUrl}"></a></h2>
  </main>
</body>
</html>`;

module.exports = htmlTemplate