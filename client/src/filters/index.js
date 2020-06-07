export function slugIt(slug) {
  
  if (slug.indexOf(' ') >= 0) {
    return slug.replace(/\s/g, '-').toLowerCase();
  } else if (slug.indexOf('-') >= 0) {
    return slug.toLowerCase().replace(/-/g, ' ');
  } else {
    return slug.toLowerCase();
  }
} 