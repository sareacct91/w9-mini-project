const htmlTemplate = ({name, location, favFrontEnd, favFullStack, githubName, linkedInUrl}) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} Portfolio</title>
  <style>

  </style>
</head>
<body>
  <header>
    <h1>${name}</h1>
  </header>
  <main>
    <h2>I am from ${location}</h2>
    <h2>My favorite part of front end dev is ${favFrontEnd}</h2>
    <h2>I prefer ${favFullStack}</h2>
    <h2>My Github name is ${githubName}</h2>
    <h2>My linkedIn profile is <a href="${linkedInUrl}"></a></h2>
  </main>
</body>
</html>`;

module.exports = htmlTemplate