function generateMarkdown(data) {
  const licenseBadge = {
    None: " ",
    Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    Boost: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    Eclipse: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    IBM: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    Mozilla: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    Perl: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  }
  let badge = licenseBadge[data.license]
  
  return `# ${data.title}
  ${badge}
  
 ## About
 ${data.about}


 ## Table of Contents:
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#Contributing)
5. [Tests](#tests)
6. [Questions](#questions)


 ## ${data.title}
 ![screenshot](${data.screenShot}) \n
 ${data.ssDesc}


 ## Installation
 ${data.installation}


 ## Usage
 ${data.usage}
  
 
 ## License
 ${data.license}


 ## Contribution Guidelines
 ${data.contribution}


 ## Test Instructions
 ${data.instructions}

 ## Questions? Contact Me:
 --![Author's Github](${data.github}) \n
 --Email me: ${data.email}

 Thank you for visiting!
 `;
}

module.exports = generateMarkdown;