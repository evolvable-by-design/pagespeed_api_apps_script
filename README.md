# Page Speed API querying

Page Speed Insights API Apps Script is an application developed by [IronistM](https://github.com/IronistM). It implements two API changes (see details below) that I use as a use-case to evaluate the evolvable-by-design approach that I created.

In this repository, the evolvable-by-design approach is implemented. Other projects are used as use cases, see the [evolvable-by-design organization](https://github.com/evolvable-by-design/).

> Info: this code does not have a frontend. Yet, the evolvable-by-design approach is applicable here because the two types of changes are the base URL and the type of the returned value. Indeed, only a change of the input parameters require a user interface to let the user input the parameters manually.

### Repositories

- Original repository: [pagespeed_api_apps_script](https://github.com/IronistM/pagespeed_api_apps_script/) ➜ one evolution, v1 to v2: URL + returned model
- [Fork with the evolvable-by-design implementation](https://github.com/evolvable-by-design/pagespeed_api_apps_script)

**Amount of changes:** 2

**Types of changes:** 
* Change model of returned data (n°3)
* Rename method (n°5)

**Commit with the changes:** [cb536a](https://github.com/IronistM/pagespeed_api_apps_script/commit/cb536a8389b6ac2090e5ab53e7f1b8a42a0fd62e)

**Description of the work done:**

1. Fork the project [here](https://github.com/evolvable-by-design/pagespeed_api_apps_script)
2. Create an evolvable-by-design branch from the commit before the one introducing the two evolutions
3. Adapt the application to run locally, because it is initially a Google App Script app ([commit](https://github.com/evolvable-by-design/pagespeed_api_apps_script/commit/ced50c0e0da54bf82f7be0ecf2aab2378c0caa66))
3. Create a mock server for both version of the API along with the v1 documentation, because it is not online anymore ([commit](https://github.com/evolvable-by-design/pagespeed_api_apps_script/commit/169b9f99d876aaec532a1feaccd7448a4a895a55))
4. Implements the evolvable-by-design approach [in a single commit](https://github.com/evolvable-by-design/pagespeed_api_apps_script/commit/9809e38984b9d7f556a36cad1a689bea032b7250)
5. Replay the API evolutions (already done in [the mock server commit](https://github.com/evolvable-by-design/pagespeed_api_apps_script/commit/169b9f99d876aaec532a1feaccd7448a4a895a55))
6. Adapt the server to easily change the version [3dceefd](https://github.com/evolvable-by-design/pagespeed_api_apps_script/commit/3dceefd15a86fe6461ee9436938dcae26df48460)
7. Verify that the client code does not need to be modified in order to continue working -> **SUCCESS**

### Report

- How many evolutions? ➜ 2 (from v1 to v2)
- Types of evolutions ➜ change type of return value (n°3) + rename method (n°5)
- One or several commits? ➜ 1
- How many lines per commit for the original evolution? ➜ 2 (for a 63 lines program)
- How many lines of code to implement the approach on the frontend? ➜ 15
- One or several developers ➜ 1
- If tests, broken? ➜ no tests
- Covered or not covered? Covered

## How to test the evolution

1. Clone the [repository](https://github.com/evolvable-by-design/pagespeed_api_apps_script).
2. Open `server/index.js` and set `const VERSION = 1` in the beginning of the file.
3. Start the server `node server/index.js`.
4. Starts the scripts `node run.js` -> it should display `80` at then end.
5. Stop the server with `ctrl+c` in the window where you launched it.
5. In the `server/index.js` set `const VERSION = 2` in the beginning of the file
6. Start the server `node server/index.js`.
7. Starts the scripts `node run.js` -> it should display `70` at then end.
8. Stop the server with `ctrl+c` in the window where you launched it.

## Original README

# Query page speed api using apps script


Example Google Sheet : https://docs.google.com/a/pamediakopes.gr/spreadsheets/d/1snTlcMwaOqk5Km0MeZ8DIbii-NZvWSoFb_Cuhxd3IEU/edit#gid=0
