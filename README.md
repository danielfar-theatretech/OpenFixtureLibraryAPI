<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/danielfar-theatretech/OpenFixtureLibrary">
    <img src="./assets/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Open Fixture Library</h3>

  <p align="center">
    A free library of DMX enabled devices
    <br />
    <a href="https://github.com/danielfar-theatretech/OpenFixtureLibrary"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/danielfar-theatretech/OpenFixtureLibrary">View Demo</a>
    ·
    <a href="https://github.com/danielfar-theatretech/OpenFixtureLibrary/issues">Report Bug</a>
    ·
    <a href="https://github.com/danielfar-theatretech/OpenFixtureLibrary/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

There are so many DMX fixtures out there; however, I couldn't find any free libraries that really suited my needs, and had all the information I required. So I created this one. I want to create a repository of fixtures so vast and informative that it'll be the last one you ever need!

Here's why:

* Your time should be focused on creating something amazing.
* You shouldn't be wasting time researching and building your own massive library of fixtures

Of course, this repository won't be able to contain every fixture ever! So I'll be adding more and more as much as I can. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This library was built by hand, by real people (so there might be a few mistakes). Feel free to suggest a change or open an issue if you spot any.

There are no libraries or frameworks used, it's just pure json data. An NPM module and online API will be available in the near future.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

* Using NPM

  ```sh
  npm install openfixturelibrary
  ```

* Directly from Github

   ```sh
   git clone https://github.com/danielfar-theatretech/OpenFixtureLibrary.git
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

All profiles are separated into their own files, so you can use them as-is if you wish.

Or if you are using the NPM module, fixtures are contained within objects named after the manufacturer.

* e.g.
  
```js
const OpenFixtureLibrary = require("openfixturelibrary");
const myProfile = OpenFixtureLibrary.Fixtures.Equinox.FusionSpotMKII;
```

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

* [ ] Create Changelog
* [ ] Increase number of supported fixtures
* [ ] Include physical dimensions
* [ ] Include links to manufacturers page, specification, demo videos etc


See the [open issues](https://github.com/danielfar-theatretech/OpenFixtureLibrary/issues) for a full list of proposed fixtures (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b addition/lovelyNewFixture`)
3. Commit your Changes (`git commit -m 'Add some lovelyNewFixture'`)
4. Push to the Branch (`git push origin addition/lovelyNewFixture`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` file for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

No official contact information yet, sorry if this inconveniences you.

Project Link: [https://github.com/danielfar-theatretech/OpenFixtureLibrary](https://github.com/danielfar-theatretech/OpenFixtureLibrary)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

No-one to put here yet, but your name could be featured!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/danielfar-theatretech/OpenFixtureLibrary.svg?style=for-the-badge
[contributors-url]: https://github.com/danielfar-theatretech/OpenFixtureLibrary/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/danielfar-theatretech/OpenFixtureLibrary.svg?style=for-the-badge
[forks-url]: https://github.com/danielfar-theatretech/OpenFixtureLibrary/network/members
[stars-shield]: https://img.shields.io/github/stars/danielfar-theatretech/OpenFixtureLibrary.svg?style=for-the-badge
[stars-url]: https://github.com/danielfar-theatretech/OpenFixtureLibrary/stargazers
[issues-shield]: https://img.shields.io/github/issues/danielfar-theatretech/OpenFixtureLibrary.svg?style=for-the-badge
[issues-url]: https://github.com/danielfar-theatretech/OpenFixtureLibrary/issues
[license-shield]: https://img.shields.io/github/license/danielfar-theatretech/OpenFixtureLibrary.svg?style=for-the-badge
[license-url]: https://github.com/danielfar-theatretech/OpenFixtureLibrary/blob/master/LICENSE
