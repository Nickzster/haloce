# Welcome to the Halo Custom Edition Website!

In this project's current state, it represents a simple landing page. This will not necessairly be the case in the future, as Halo Custom Edition has many projects and community members, and I have many ideas for this website.

Some possible additions include:

- Project Pages
- News Section (Keeping the community up to date)
- User Profiles
- User engagement (Comments, Likes, etc.)

If you don't want to contribute with code, please consider making a contribution in [our discord server](https://discord.gg/73zHwAz)!

If you want to contribute, please read the following sections:

# Lisence

Since Halo is owned and lisenced by Microsoft, this repository will have a Microsoft Public License.

# Code of Conduct

This should be self-explanatory. In case it isn't, heres some rules:

1. Be Respectful to everyone who contributes in this repository.
2. Provide constructive criticism for everyone's contributions.
3. Do not be destructive to this code base.

# Contributing

Now to the good stuff...

## Set up your environment: Global Environment

Note: I am assuming that most users who contribute to this repository is an active member in the Halo Custom Edition community, which probably means you are running windows. I am recommending the use of WSL (Specifically Ubuntu). Please follow [this guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to configure WSL for your machine.

In order to develop for Halo Custom Edition's website, you will need to install some stuff:

- Node.js (you can find it [here](https://nodejs.org/en/))
- NPM (comes with Node.js)
- Yarn (see below for instructions)
- Git
- VSCode (you can find it [here](https://code.visualstudio.com/))

After everything is installed, you can run

```sh
npm i -g yarn
```

to install Yarn.

When you enter VSCode, please install the recommended extensions:

- Prettier

Some other extensions I like that help me read code easier:

- Bracket Pair Colorizer
- Indent-Rainbow

You should be ready to go now.

## Set up your environment: Project Setup

Setting up the project on your local machine is very easy. There are three simple steps to do this:

1. Fork the repository
2. Clone your fork via `git`
3. Run `yarn` to install the dependencies.

## Knowledge Material

To help navigate your way around the codebase, it will be easier if you are familiar with the following tools:

- [Javascript](https://www.w3schools.com/js/default.asp) - Primary Development Language
- [React](https://reactjs.org/) - Primary Front End Framework
- [React Hooks](https://reactjs.org/hooks)
- Basic [HTML](https://www.w3schools.com/html/default.asp) / [CSS](https://www.w3schools.com/css/default.asp)

This list is subject to change, as the website grows.

## Making your changes

You should be ready to make some changes. To make the editing process as easy as possible, I have a workflow that I follow:

1. Open my terminal
2. `cd` into haloce
3. Open Visual Studio Code [via the command line](https://code.visualstudio.com/docs/editor/command-line) : `code .`
4. `cd` into website.
5. use `yarn start` to start the development server
6. Make my changes and watch as they appear on the development server!

## Pull Requests

When you've made some changes, and are ready to merge them in, please make a pull request. When making a pull request, please provide the following:

- A screenshot of your changes reflected on the website

I will check it out and Merge it in if I like it.

Please do not make any PR's to the gh-pages branch. They will be deleted.

# Thank you

Thank you for your contribution to Halo Custom Edition's website!
