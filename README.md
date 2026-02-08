<div align="center">
    <h1 align="center">collective.datepickerpattern</h1>
</div>
<div align="center">
[![PyPI](https://img.shields.io/pypi/v/collective.datepickerpattern)](https://pypi.org/project/collective.datepickerpattern/)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/collective.datepickerpattern)](https://pypi.org/project/collective.datepickerpattern/)
[![PyPI - Wheel](https://img.shields.io/pypi/wheel/collective.datepickerpattern)](https://pypi.org/project/collective.datepickerpattern/)
[![PyPI - License](https://img.shields.io/pypi/l/collective.datepickerpattern)](https://pypi.org/project/collective.datepickerpattern/)
[![PyPI - Status](https://img.shields.io/pypi/status/collective.datepickerpattern)](https://pypi.org/project/collective.datepickerpattern/)


[![PyPI - Plone Versions](https://img.shields.io/pypi/frameworkversions/plone/collective.datepickerpattern)](https://pypi.org/project/collective.datepickerpattern/)

[![CI](https://github.com/collective/collective.datepickerpattern/actions/workflows/main.yml/badge.svg)](https://github.com/collective/collective.datepickerpattern/actions/workflows/main.yml)
![Code Style](https://img.shields.io/badge/Code%20Style-Black-000000)

[![GitHub contributors](https://img.shields.io/github/contributors/collective/collective.datepickerpattern)](https://github.com/collective/collective.datepickerpattern)
[![GitHub Repo stars](https://img.shields.io/github/stars/collective/collective.datepickerpattern?style=social)](https://github.com/collective/collective.datepickerpattern)

</div>

An addon for Plone adding a new Date and Datetime pickers based on [react-aria-components](https://react-aria.adobe.com/DatePicker).

In Plone 6 the date and datetime fields are rendered using browser native widgets.

This, although modern and useful, may create unexpected results for users of browsers untranslated to user languages, or users editing content in multilingual site.

Check [this mockup issue](https://github.com/plone/mockup/issues/1328) for the exact use case we had in a project.

With this add-on, the date and datetime fields will use a JavaScript based picker localized to the language the content is crated on (according to Plone, no wild guessing of languages :))

See some examples:

### English

![date picker in english](docs/en.png)


### Spanish

![date picker in spanis](docs/es.png)


### German

![date picker in german](docs/de.png)


### Basque

![date picker in basqie](docs/eu.png)

### Italian

![date picker in italian](docs/it.png)


### Norge

![date picker in norge](docs/no.png)



## Installation

Install collective.datepickerpattern adding it to your project dependencies

Go to the add-ons controlpanel and install the product from there.


## AI usage declaration

The JavaScript code under `resources` folder has been written mostly with assistance of Google Gemini AI.


## Contribute

- [Issue tracker](https://github.com/collective/collective.datepickerpattern/issues)
- [Source code](https://github.com/collective/collective.datepickerpattern/)

### Prerequisites ✅

-   An [operating system](https://6.docs.plone.org/install/create-project-cookieplone.html#prerequisites-for-installation) that runs all the requirements mentioned.
-   [uv](https://6.docs.plone.org/install/create-project-cookieplone.html#uv)
-   [Make](https://6.docs.plone.org/install/create-project-cookieplone.html#make)
-   [Git](https://6.docs.plone.org/install/create-project-cookieplone.html#git)
-   [Docker](https://docs.docker.com/get-started/get-docker/) (optional)

### Installation 🔧

1.  Clone this repository, then change your working directory.

    ```shell
    git clone git@github.com:collective/collective.datepickerpattern.git
    cd collective.datepickerpattern
    ```

2.  Install this code base.

    ```shell
    make install
    ```


## License

The project is licensed under GPLv2.

## Credits and acknowledgements 🙏

Generated using [Cookieplone (0.9.10)](https://github.com/plone/cookieplone) and [cookieplone-templates (5977d2c)](https://github.com/plone/cookieplone-templates/commit/5977d2c5ee4c55c17418ad755abcdb10dedb9eb5) on 2026-02-08 14:45:44.251432. A special thanks to all contributors and supporters!
