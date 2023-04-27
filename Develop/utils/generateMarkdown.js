// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `[Github License] (https://img.shields.io/bage/license-$(license)-yellowgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License

    Licensed under the $(license) license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by $(data.name)
  $(renderBadge(data.license))
  ## Table of Contents
  . [Usage](#usage)
  . [Description](#description)
  . [Requirements](#requirements)
  . [Contact-Me](#contact me)
  . [Contributors](#contributors)
  . [Testing](#Testing)
  
  $(renderLicenseLink(data.License))


  ## Description
  $(data.description)

  ## Requirements
  $(data.requirements)

  ## Usage
  $(data.usage)

  ## Contributors
  $(data.contributors)

  ## Testing
  $(data.test)

  $(renderingLicenseSection(data.license))
`;
}

module.exports = generateMarkdown;
