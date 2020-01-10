# Arcesium UI Exercise


## Overview

This repository contains a simple unstyled but otherwise functional application which is representative of the types of applications Arcesium develops.

Please be sure to review all of the common information as well as the details of the specific exercise which you have been asked to prepare for.

### Application Intro

This application is a simplified mobile-friendly wire payment approval webapp which is desgined to be viewed on a standard mobile phone screen in portrait mode.

Terminology:

* `Wire` - represents a transfer of money from one account to another. For the purpose of this application, a wire is a stateful object which can either be pending approval, approved, or rejected
* `Approver` - the end user of this application who makes the decision of which `Wire` payments to approve or reject

This webapp contains two screens - a `Wire Summary` screen which shows a list of `Wire` payments along with some basic information, and a `Wire Detail` screen which shows additional information about a single `Wire` payment.

Key user stories implemented by the application include:

* A wire `Approver` can click on a link in an e-mail or go to a bookmarked URL and view a list of all `Wire` payments currently pending their approval in the `Wire Summary` screen
* A wire `Approver` can click on a link associated with each entry on the `Wire Summary` screen and get taken to a `Wire Detail` screen which contains more details about that specific `Wire` payment which is pending their approval
* A wire `Approver` can click on a link associated with a specific `Wire` from an e-mail or external application and get taken directly to a `Wire Detail` screen which contains details about that specific `Wire` payment, regardless of whether it's pending approval, approved, or rejected
* A wire `Approver` can approve or reject any `Wire` payment which is pending approval
* A wire `Approver` may optionally include a comment along with any approval or rejection action
* A wire `Approver` may also simply comment on any `Wire` payment without taking any other action, regardless of whether or not it's pending approval
* Once a wire `Approver` approves or rejects a `Wire`, it is no longer visible on the `Wire Summary` screen but details of it may be viewed with a direct link to the `Wire Detail` screen
* A wire `Approver` should be able to select multiple `Wire` payments in the `Wire Summary` screen and approve, reject, or comment on them all as a single action


### Repository Intro

This is a minimal [React](https://reactjs.org/) project built with [Parcel](https://parceljs.org/)

Key files include:

* api.tsx - contains [Typescript](https://www.typescriptlang.org/) models and mock API calls for all domain objects and actions in the application
* index.jsx - entrypoint for the application, registers routes for each of the screens
* WireSummary.jsx - implementation of the `Wire Summary` screen
* WireDetail.jsx - implementation of the `Wire Detail` screen

### Quickstart

* Clone this repository to your local development environment
* Install [Node v12 LTS](https://nodejs.org/en/download/)
  * You may use the preferred installation method for your development environment
  * You may try using older or newer major versions of Node, however we have only tested this on Node v12 so you will have to fix any issues you encounter on your own
* Install dependencies via `npm install`
* Start the local devserver via `npm run start`
* View the app by pointing your browser to the URL output in the previous step

## Demo Styling Exercise

This is a 1-hour time-boxed exercise where the goal is to start with the `Wire Summary` and `Wire Detail` pages appearing as they currently do, and change components, layouts, and styles in order to allow your product manager to demo the key user stories of this application to an existing client.

##### Preparation

Before the exercise begins, you must do the following:

* Set up your development environment, clone this repository, and complete the Quickstart instructions

You may optionally research, download, and install (in a disabled manner) any libraries, utilities, or tools which you may find helpful for the 1-hour exercise provided that you do NOT touch the source code of `WiresDetail.jsx` and `WiresSummary.jsx` and you do NOT change the initial visual appearance and experience of the `Wire Summary` and `Wire Detail` screen.

Acceptable things you may choose to do (but are neither required nor expected to do) ahead of the exercise includes:
* Researching, downloading, installing, and testing standardized stylesheets, icon libraries, UI component libraries, and/or frameworks that you intend to use
  * Make sure any dependencies you install do NOT affect the initial visual experience or functionality of the app
* Reading through the source code of this repository
* Sketching out possible designs / layouts
* Bookmarking helpful public tutorials and documentation which you may want to reference during this exercise

Some type of preparation is specifically forbidden, namely:

* Do NOT make any changes at all to the code in `WiresDetail.jsx` and `WiresSummary.jsx`
* Do NOT install any dependency or tool which changes the default rendering of the `Wire Summary` or `Wire Detail` page
* Do NOT write any new code, styles, or snippets that are specific to this application or exercise

##### Exercise

This exercise will consist of a 10-minute window where a "product manager" will walk you through the intended demo script using your local copy of the application running in your development environment.

This will be followed by a 45-minute window in which you will be expect to change any parts of the application as you see fit in order to improve the visual appearence and user experience of the user stories covered by the demo. During this period, you are free to ask questions to either the "product manager" who will be giving the final demo or the "developer" who wrote the initial application. 

You are also free to use any publicly available resources which you normally would expect to use as part of your day-to-day work. IE: Google / StackOverflow is 110% okay. You may also either work in silence or explain your changes as you make them.

During the last 5 minutes, the "product manager" will run through the demo script again using your latest local development copy of the application.



##### Evaluation Criteria

The main purpose of this exercise is to evaluate your ability to identify and implement changes that have a very high perceived quality to developer effort ratio. This includes looking at both the specific changes to the app you make as well as the specific off-the-shelf libraries / stylesheets / tools you choose to incorporate.

A secondary purpose of this exercise is to help us get a sense of your "zero effort" default design aesthetic. That is to say, in the presence of functional requirements but the absence of any concrete UI or UX specification or resource allocation, in what direction do you take the UI and UX.

We are specifically NOT evaluating you on the code quality, completeness, or production-readiness of your actual changes. Responsiveness, accessibility, internationalization, and any other aspect of your changes which doesn't obviously manifest itself during the final demo script is generally considered out-of-scope for this exercise.

Part of this exercise will involve time management - we expect that you will NOT be producing your finest work within these constraints, and that is okay. We do however expect you to work within these time constraints and respect them. That is to say, your local dev copy of the application as of the start of the final demo is what you will be evaluated on - if it is broken, you will NOT be given an opportunity to make "one quick fix". We will provide a 5-minute warning before the final demo begins - you may use that time to wrap up or revert any in-progress changes and ensure your application is in a functional state.


