-- SQLite
INSERT INTO wikis (page_name, page_slug, page_content, created_at, updated_at)
VALUES ('page1', 'page_2', 'this is content', DateTime('now'), DateTime('now'));


UPDATE wikis 
SET page_name = 'page3',
page_slug = 'page_3'
WHERE rowid = 3;

DELETE FROM wikis
WHERE rowid = 3;

SELECT rowid, page_name from wikis;