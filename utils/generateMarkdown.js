function generateMarkdown(data) {
  let licenseBadge = '';
  if (data.license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }

  if (data.license === 'ISC') {
    licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }

  if (data.license === 'GNU') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }

  if (data.license === `PERL`) {
    licenseBadge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
  }

  if (data.license === `IBM`) {
    licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
  return `
  # **${data.title}**
  ${licenseBadge}
  ## **Table of Contents** 
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Test](#Test)
  * [License](#License)
  * [Contributions](#Contributions)
  * [Contact Me](#ContactUs)
  ## Description 
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Test 
  ${data.test}
  ## License
  ${data.title} is licensed under ${data.license}
  ## Contributions 
  ${data.contribute}
  Remember to ALWAYS PULL REQUEST
  ## ContactUs 
 Having Issues? Have Any Extra Questions? Contact Us:
 Email Us:  ${data.email}
 Check Us out on GitHub: github.com/${data.github}. 
`;
};

module.exports = generateMarkdown;
