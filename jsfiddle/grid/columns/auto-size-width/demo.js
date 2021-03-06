document.addEventListener("DOMContentLoaded", function() {

  var data = [{
    name: 'Ted',
    surname: 'Smith',
    position: 'Java Developer',
    email: 'ted.smith@gmail.com',
    company: 'Electrical Systems',
    age: 30,
    education: 'High School Of Cambridge',
    knownledge: 'Java, Ruby'
  }, {
    name: 'Ed',
    surname: 'Johnson',
    position: 'C/C++ Market Data Developer',
    email: 'ed.johnson@gmail.com',
    company: 'Energy and Oil',
    age: 35,
    education: 'High School Of Cambridge',
    knownledge: 'C++'
  }, {
    name: 'Sam',
    surname: 'Williams',
    position: 'Technical Analyst',
    email: 'sam.williams@gmail.com',
    company: 'Airbus',
    age: 38,
    education: 'High School Of Cambridge',
    knownledge: ''
  }, {
    name: 'Alexander',
    surname: 'Brown',
    position: 'Project Manager',
    email: 'alexander.brown@gmail.com',
    company: 'Renault',
    age: 24,
    education: 'High School Of Cambridge',
    knownledge: ''
  }, {
    name: 'Nicholas',
    surname: 'Miller',
    position: 'Senior Software Engineer',
    email: 'nicholas.miller@gmail.com',
    company: 'Adobe',
    age: 33,
    education: 'High School Of Cambridge',
    knownledge: 'Unix, C/C++'
  }, {
    name: 'Andrew',
    surname: 'Thompson',
    position: 'Agile Project Manager',
    email: 'andrew.thompson@gmail.com',
    company: 'Google',
    age: 28,
    education: 'High School Of Cambridge',
    knownledge: ''
  }, {
    name: 'Ryan',
    surname: 'Walker',
    position: 'Application Support Engineer',
    email: 'ryan.walker@gmail.com',
    company: 'Siemens',
    age: 39,
    education: 'High School Of Cambridge',
    knownledge: 'ActionScript'
  }, {
    name: 'John',
    surname: 'Scott',
    position: 'Flex Developer',
    email: 'john.scott@gmail.com',
    company: 'Cargo',
    age: 45,
    education: 'High School Of Cambridge',
    knownledge: 'Flex'
  }, {
    name: 'James',
    surname: 'Phillips',
    position: 'Senior C++/C# Developer',
    email: 'james.phillips@gmail.com',
    company: 'Pro bugs',
    age: 30,
    education: 'High School Of Cambridge',
    knownledge: 'C/C++, Unix'
  }, {
    name: 'Brian',
    surname: 'Edwards',
    position: 'UNIX/C++ Developer',
    email: 'brian.edwards@gmail.com',
    company: 'IT Consultant',
    age: 23,
    education: 'High School Of Cambridge',
    knownledge: 'C/C++ Unix'
  }, {
    name: 'Jack',
    surname: 'Richardson',
    position: 'Ruby Developer',
    email: 'jack.richardson@gmail.com',
    company: 'Europe IT',
    age: 24,
    education: 'High School Of Cambridge',
    knownledge: 'Ruby'
  }, {
    name: 'Alex',
    surname: 'Howard',
    position: 'CSS3/HTML5 Developer',
    email: 'alex.howard@gmail.com',
    company: 'Cisco',
    age: 27,
    education: 'High School Of Cambridge',
    knownledge: 'CSS3/HTML5'
  }, {
    name: 'Carlos',
    surname: 'Wood',
    position: 'Node.js Developer',
    email: 'carlos.wood@gmail.com',
    company: 'HP',
    age: 36,
    education: 'High School Of Cambridge',
    knownledge: 'Node.js'
  }, {
    name: 'Adrian',
    surname: 'Russell',
    position: 'Frontend Developer',
    email: 'adrian.russell@gmail.com',
    company: 'Micro Systems',
    age: 31,
    education: 'High School Of Cambridge',
    knownledge: 'HTML, JavaScript'
  }, {
    name: 'Jeremy',
    surname: 'Hamilton',
    position: 'Scala Developer',
    email: 'jeremy.hamilton@gmail.com',
    company: 'Big Machines',
    age: 30,
    education: 'High School Of Cambridge',
    knownledge: 'Scala'
  }, {
    name: 'Ivan',
    surname: 'Woods',
    position: 'Objective C Developer',
    email: 'ivan.woods@gmail.com',
    company: '',
    age: 24,
    education: 'High School Of Cambridge',
    knownledge: 'Objective C'
  }, {
    name: 'Peter',
    surname: 'West',
    position: 'PHP/HTML Developer',
    email: 'peters.west@gmail.com',
    company: 'Adobe',
    age: 26,
    education: 'High School Of Cambridge',
    knownledge: 'PHP/HTML'
  }, {
    name: 'Scott',
    surname: 'Simpson',
    position: 'Designer',
    email: 'scott.simpson@gmail.com',
    company: 'IBM',
    age: 29,
    education: 'High School Of Cambridge',
    knownledge: 'Adobe PhotoShop'
  }, {
    name: 'Lorenzo',
    surname: 'Tucker',
    position: 'Architect',
    email: 'lorenzo.tucker@gmail.com',
    company: 'Intel',
    age: 29,
    education: 'High School Of Cambridge',
    knownledge: ''
  }, {
    name: 'Randy',
    surname: 'Grant',
    position: 'Engineer',
    email: 'randy.grant@gmail.com',
    company: 'Bridges',
    age: 30,
    education: 'High School Of Cambridge',
    knownledge: ''
  }, {
    name: 'Arthur',
    surname: 'Gardner',
    position: 'Analytic',
    email: 'arthur.gardner@gmail.com',
    company: 'Google',
    age: 31,
    education: 'High School Of Cambridge',
    knownledge: ''
  }, {
    name: 'Orlando',
    surname: 'Ruiz',
    position: 'Unit Testing Developer',
    email: 'orlando.ruiz@gmail.com',
    company: 'Apple',
    age: 32,
    education: 'High School Of Cambridge',
    knownledge: ''
  }];

  new FancyGrid({
    renderTo: 'container',
    title: 'Auto size columns',
    width: 500,
    height: 400,
    data: data,
    columns: [{
      index: 'company',
      title: 'Company'
    }, {
      index: 'name',
      title: 'Name',
      sortable: true
    }, {
      index: 'surname',
      title: 'Sur Name'
    }, {
      index: 'age',
      title: 'Age',
      type: 'number',
      width: 50
    }, {
      index: 'education',
      title: 'Education',
      flex: 1
    }]
  });
});