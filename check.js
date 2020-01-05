const fs = require("fs");

const uniqArrayCheck = (M) => {
  for (var j = 0, R = true, N = [], J = M.length; j < J; j++)
    (R = R && !N[M[j]]), (N[M[j]] = true);
  return R;
}

fs.readFile("./passLog.txt", "utf8", function(error, data) {
  console.log("Асинхронное чтение файла");
  if (error) throw error;

  const uniq = uniqArrayCheck(data.toString().split(" "));

  console.log(uniq);
 
});
