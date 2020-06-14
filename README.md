# Matts Wikis

## Setup
_run these from the root dir_

1. Initial setup (npm installs)
```
npm run setup
```
2. Create DB Schema
```
node server/db/seed
```
3. Boot up the app
```
npm run dev
```

## Loose Ends / Nice To Have's

1. Updates to a wiki are not updated in the search table
2. Refresh of a search page does not persist the results in the query
3. Support for uploading images
4. Better Changelog descriptions
5. Ability to edit page names
6. Show Broken Links
7. Validation to prevent multiple pages with the same title/slug
8. Notification Handler (e.g. on save of an edit)
9. Better logging on the API calls
10. Setup Babel on the server
11. Unit Tests / E2E Tests
12. Docker