-- SQLite
INSERT INTO wiki (page_name, page_slug, page_content, created_at, updated_at)
VALUES ('page2', 'page_2', 'this is content', DateTime('now'), DateTime('now'));


UPDATE wiki 
SET page_name = 'page3',
page_slug = 'page_3'
WHERE wiki_id = 3;

DELETE FROM wiki
WHERE rowid = 3;

SELECT wiki_id, page_name from wiki;


SELECT rowid, page_name, page_slug, page_content FROM wikis WHERE rowid = 11;

