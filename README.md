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

This is a minimal [Typescript](https://www.typescriptlang.org) / [React](https://reactjs.org) / [MobX](https://mobx.js.org) project built with [Parcel](https://parceljs.org/)

Key files include:

* api.tsx - contains models and mock API calls for all domain objects and actions in the application
* index.tsx - entrypoint for the application, registers routes for each of the screens
* WireSummary.tsx - implementation of the `Wire Summary` screen
* WireDetail.tsx - implementation of the `Wire Detail` screen

### Quickstart

* Clone this repository to your local development environment
* Install [Node v12 LTS](https://nodejs.org/en/download/)
  * You may use the preferred installation method for your development environment
  * You may try using older or newer major versions of Node, however we have only tested this on Node v12 so you will have to fix any issues you encounter on your own
* Install dependencies via `npm install`
* Start the local devserver via `npm run start`
* View the app by pointing your browser to the URL output in the previous step

## Demo Styling Exercise

This is a two part visual styling exercise, both with the same goal - to improve the first impression of this application formed while running through a demo of the key user stories.

The first part of this exercise is style the `Wire Summary` page as you see fit ahead of time, making any changes, using any libraries, and changing any portion of the UI and UX at your discretion.

The second part of this exercise is a 1-hour time-boxed on-premise exercise where you apply equivalent styling changes to the `Wire Detail` page and talk through the changes you have made and how they tie into your preferred UX.

##### Preparation

Before the exercise begins, you should do the following:

* Set up your development environment, clone this repository, and complete the Quickstart instructions
* Skim through the code in this repository and get comfortable with how [Typescript](https://www.typescriptlang.org) and [React](https://reactjs.org) are used

Acceptable things you may choose to do (but are neither required nor expected to do) ahead of the exercise include:
* Research, download, install, configure, and test standardized stylesheets, icon libraries, UI component libraries, and/or frameworks that you intend to use
  * Make sure any dependencies you install do NOT affect the initial visual experience or functionality of the app
* Sketch out possible designs / layouts
* Bookmark helpful public tutorials and documentation which you may want to reference during this exercise
* Make a todo-list of proposed changes which you intend to make


##### Exercise Part One - Complete Ahead of Time

The first part of this exercise consists of fixing the style of the `Wire Summary` page so that it continues to cover all of the user stories which have been mentioned earlier, but leaves a better first impression during a demo than the current page.

Typical candidates may spend 2-4 hours on this portion of the exercise, including working through the quickstart, installing libraries and utilities, and taking a first pass at styling. 

You are free to spend as much or as little time on this exercise as you would like, and to choose your split between isntalling / configuring / learning reusable component libraries and widget toolkits vs. making changes specific to this application and page. 

Please keep track of how much time you have spent on this portion of the exercise and roughly what you spent it on. The main goal here isn't to produce the best possible first impression, but rather to demonstrate what you personally consider to be an optimal tradeoff between time invested and quality produced for what is a representative "small" unit of work.


##### Exercise Part Two - Complete ON-site

The second part of this exercise consists of live-editing the `Wire Detail` page to make it stylistically consistent with the changes you made to the `Wire Summary` page ahead of time, as well as explaining some of the changes you have made to the `Wire Summary` page.

For this portion of the exercise, you should come prepared with the application and your preferred development environment set up on your laptop. During this exercise, you are free to use any publicly available resources which you normally would expect to use as part of your day-to-day work. IE: Google / StackOverflow is 110% okay.

The main goal of this portion of the exercise is to demonstrate the marginal cost of bringing an additional page up to your stylistic standards after you have completed all of your initial setup.


##### Evaluation Criteria

The main purpose of this exercise is to evaluate your ability to identify and implement changes that have a very high perceived quality to developer effort ratio. This includes looking at both the specific changes to the app you make as well as the specific off-the-shelf libraries / stylesheets / tools you choose to incorporate.

A secondary purpose of this exercise is to help us get a sense of your "zero effort" default design aesthetic. That is to say, in the presence of functional requirements but the absence of any concrete UI or UX specification or resource allocation, in what direction do you take the UI and UX.

Part of this exercise will involve time management - it is up to you choose the level of effort to invest ahead of time, with a preference for investing less time and focusing only on the highest impact changes.

We are specifically NOT evaluating you on the code quality, completeness, or production-readiness of your actual changes. Responsiveness, accessibility, internationalization, and any other aspect of your changes which doesn't obviously manifest itself during a basic walkthrough of the enumerated user stories is generally considered out-of-scope for this exercise.

We also are NOT evaluating you on your familarity with the languages, tools, and frameworks used in this sample application. You just need to have enough familiarity with them to complete the exercise. In other words, if you replace `foo` with `(foo as any)` just to make the Typescript compiler stop complaining, we won't judge. 
