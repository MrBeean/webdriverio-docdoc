# README

`docdoc` test task (test framework: webdriverIO + mocha) for QA automation engineer.
Tests run in headless mode, to chage it - use config file `main-config.js`

        node -v #=> v12.18.3

## Folder structure

- `config` folder (main config file for wdio.conf.js, also can be used in specs)
- `test` folder (contain specs and page objects files)

## Use it

- Download or clone project
- Open it in console
        
        npm install
- then
        
        npm test
- to review the report

        allure generate allure-results && allure open
