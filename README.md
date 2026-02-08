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

A new addon for Plone

## Features

TODO: List our awesome features

## Installation

Install collective.datepickerpattern with `pip`:

```shell
pip install collective.datepickerpattern
```

And to create the Plone site:

```shell
make create-site
```

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


### Add features using `plonecli` or `bobtemplates.plone`

This package provides markers as strings (`<!-- extra stuff goes here -->`) that are compatible with [`plonecli`](https://github.com/plone/plonecli) and [`bobtemplates.plone`](https://github.com/plone/bobtemplates.plone).
These markers act as hooks to add all kinds of subtemplates, including behaviors, control panels, upgrade steps, or other subtemplates from `plonecli`.

To run `plonecli` with configuration to target this package, run the following command.

```shell
make add <template_name>
```

For example, you can add a content type to your package with the following command.

```shell
make add content_type
```

You can add a behavior with the following command.

```shell
make add behavior
```

```{seealso}
You can check the list of available subtemplates in the [`bobtemplates.plone` `README.md` file](https://github.com/plone/bobtemplates.plone/?tab=readme-ov-file#provided-subtemplates).
See also the documentation of [Mockup and Patternslib](https://6.docs.plone.org/classic-ui/mockup.html) for how to build the UI toolkit for Classic UI.
```

## License

The project is licensed under GPLv2.

## Credits and acknowledgements 🙏

Generated using [Cookieplone (0.9.10)](https://github.com/plone/cookieplone) and [cookieplone-templates (5977d2c)](https://github.com/plone/cookieplone-templates/commit/5977d2c5ee4c55c17418ad755abcdb10dedb9eb5) on 2026-02-08 14:45:44.251432. A special thanks to all contributors and supporters!
