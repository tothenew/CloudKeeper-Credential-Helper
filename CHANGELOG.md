# Changelog

## [1.0.0] 2022-07-02
- Initial
## [1.0.1] 2022-07-06
- Added support for persistent service worker so that the extension does not shut down automatically in some time.
## [1.0.2] 2022-09-20
- Fixed persistence of service worker to make the extension compatible with tools like Okta, OneLogin, etc.

## [1.1.0] 2022-11-09
- Added SessionDuration feature. The SessionDuration will be picked from the SAML assertion. SessionDuration must be same in IAM Identity Center and the destination IAM Role.