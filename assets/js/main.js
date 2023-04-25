axios
  .delete("https://reqres.in/api/users/3")
  .then((res) => console.log(res)) // Logs result object
  .catch((err) => console.log(err)); // Logs error
