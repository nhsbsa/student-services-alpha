NHS prototype kit
Visit the NHS prototype kit site to download the latest version and read the documentation.

About the NHS prototype kit
The NHS prototype kit enables you to make interactive prototypes that will look like pages on NHS.UK. The prototypes you make are a great way to show ideas to others and for conducting user research.

Security
If you publish your prototypes online, they must be protected by a username and password. This is to prevent members of the public finding prototypes and thinking they are real services.

You must protect user privacy at all times, even when using prototypes. Prototypes made with the kit look like NHS.UK, but do not have the same security provisions. Always make sure you are handling user data appropriately.

Installation instructions
Install guide (non technical)
Developer friendly install guide (technical)
Running the kit
Start the kit with npm run watch.

Contribute
If you want to contribute to the NHS prototype kit, by reporting bugs, fixing bugs, suggesting new features or writing documentation, then read our contributing guidelines.

Development environment
Before running Gitpod, you must install the Gitpod.io application on your GitHub account.

Gitpod also requires access to public repositories. Enable this via Gitpod integrations. (Click on the 3 dots to edit permissions for your GitHub account. Gitpod may pre-select permissions. You need read/write access to code in the repos.)

Using your own GitHub credentials you can create, change, commit and push to branches on our Gitpod container via the "ready to code" button below.

Gitpod ready-to-code

Read an introduction to Gitpod (on Gitpod's website).

Release lifecycle
The below is only for maintainers of the prototype kit source code - these instructions aren't relevant if you're building your own prototype using the kit.

Testing
Run unit tests locally with npm run test.

Making changes
Merge required changes via pull requests into main branch. As you do so, document changes in the CHANGELOG.md under an 'Unreleased' header at the top.
Releasing
Open a new pull request which changes the version number in package.json and package-lock.json and which updates the 'Unreleased' header in the CHANGELOG.md to the new version number and release date. Merge this into main.
Visit the Create a new release page on GitHub. In the 'Choose a tag' dropdown, create a new tag for the new version number, prefixed with a v. Use the same format for the release title. You can use the 'Generate release notes' feature to generate some initial release notes, and then edit these as needed. Make sure the "Set as latest release" checkbox is checked. Publish the release (or save as draft if you’re not ready).
Update the prototypeKitVersion value in the package.json of the prototype kit website - this will update the 'Download' link to point to the new zip file.
Add some details about the new release to the What’s new page on the prototype kit website
Announce the new release on the Service Manual Slack, NHS England Slack, and any other appropriate locations
Code Analysis
Code analysis results can be found in SonarQube.

Support
The NHS prototype kit is maintained by NHS England. Email us, open a Github issue or get in touch on the NHS digital service manual Slack workspace.
