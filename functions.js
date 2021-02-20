const response2 = pm.response.json();
console.log("Token:", response.access_token);

pm.setEnvironmentVariable("token2", access_token);