# Matts Wikis

## Setup

Initial setup steps:
```
npm run setup
```
Create Schema
```
node server/db/seed
```

Boot up the app
```
npm run dev
```

## Loose Ends / Nice To Have's

1. Updates to a wiki are not updated in the search table
2. Refresh of a search page does not persist the results in the query
3. Ability to have multiple pages with the same title/slug
4. Notification Handler (e.g. on save of an edit)
5. Better logging on the API calls