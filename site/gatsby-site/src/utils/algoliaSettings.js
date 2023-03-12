module.exports = {
  minWordSizefor1Typo: 4,
  minWordSizefor2Typos: 8,
  hitsPerPage: 30,
  maxValuesPerFacet: 100,
  version: 2,
  searchableAttributes: ['title', 'description', 'text'],
  numericAttributesToIndex: null,
  attributesToRetrieve: null,
  advancedSyntax: true,
  removeStopWords: ['en'],
  unretrievableAttributes: null,
  optionalWords: null,
  attributesForFaceting: [
    'searchable(Submitter)',
    'searchable(authors)',
    'searchable(classifications)',
    'epoch_date_downloaded',
    'epoch_date_modified',
    'epoch_date_published',
    'epoch_date_submitted',
    'epoch_incident_date',
    'searchable(incident_id)',
    'searchable(source_domain)',
    'searchable(submitters)',
    'filterOnly(v1_incident)',
    'flag',
    'is_incident_report',
  ],
  attributesToSnippet: ['description:200', 'text:15'],
  attributesToHighlight: ['description', 'text', 'title', 'incident_title', 'incident_description'],
  paginationLimitedTo: 1000,
  attributeForDistinct: 'incident_id',
  exactOnSingleWordQuery: 'attribute',
  ranking: ['typo', 'geo', 'words', 'filters', 'proximity', 'attribute', 'exact', 'custom'],
  customRanking: ['desc(filename)', 'desc(title)', 'desc(description)', 'desc(text)'],
  separatorsToIndex: '',
  removeWordsIfNoResults: 'none',
  queryType: 'prefixLast',
  highlightPreTag: '<em>',
  highlightPostTag: '</em>',
  snippetEllipsisText: '',
  typoTolerance: 'false',
  alternativesAsExact: ['ignorePlurals', 'singleWordSynonym'],
};