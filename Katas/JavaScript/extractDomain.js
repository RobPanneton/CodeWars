function domainName(url) {
  return url.split("http").length === 1 && url.split("www").length === 1
    ? url.split(".")[0]
    : url.split("www").length !== 1
    ? url.split(".")[1].split(".")[0]
    : url.split("//")[1].split(".")[0];
}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName("ax9rnik-o5wjw8uy05lkjbx0zv.org"));

//   Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"
