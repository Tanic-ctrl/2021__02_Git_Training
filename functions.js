const response = pm.response.json();
console.log("Token:", response.access_token);

pm.setEnvironmentVariable("token2", access_token);