# README
QA automation engineer test task for `docdoc`.
Tets run in headless mode, to chage it use config file `main-config.js`

## File structure
- `config` folder (main config file for wdio.conf.js, also can be used in specs)
- `test` folder (contain specs and page objects files)
- `prettierrc.json` use it with `Prettier - Code formatter`

## Use it
- Download or clone project
- Open it in console
        
        npm install
- then
        
        npm test

- to review the report

        allure generate allure-results && allure open   
