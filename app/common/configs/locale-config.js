module.exports = ['$translateProvider', function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escaped');

    $translateProvider.translations('en', require('../locales/en.json')).translations('ko-KR', require('../locales/ko-KR.json'));

    $translateProvider.useStaticFilesLoader({
        prefix: 'locales/',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('ko-KR');
    $translateProvider.fallbackLanguage('en');
}];
