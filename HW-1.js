var parser = new DOMParser();

const xmlString = `
<list>
    <student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
    </student>
    <student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
    </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml")

const studentNode = xmlDOM.querySelector("student");
const nameNode = xmlDOM.querySelector("name");
const firstNameNode = nameNode.querySelector("first");
const secondNameNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");

const langAttr = nameNode.getAttribute('lang');

const result = {
    lang: langAttr,
    firstName: firstNameNode.textContent,
    secondName: secondNameNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
  };

console.log('result', result);

