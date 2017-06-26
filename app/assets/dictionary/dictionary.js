angular.module('ymasben').config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('he', {
        'TITLE': 'איננגר יוגה עם אגי',
        'MANAGER': 'מנהל',
        'MEMBERSHIP': 'מנוי',
        'LESSON': 'שיעור',
        'EXPIRE': 'תפוגת מנוי',
        'SEMINAR': 'סמינר',
        'LINKEDIN':'הכנס עם לינקדאין',
        'FACEBOOK':'הכנס עם פייסבוק'
    });

    $translateProvider.translations('en', {
        'TITLE': 'Aynegar Yoga with Agi',
        'MANAGER': 'manager',
        'MEMBERSHIP': 'membership',
        'LESSON': 'lesson',
        'EXPIRE': 'Expiration Date',
        'SEMINAR': 'seminar',
        'LINKEDIN':'LinkedIn Login',
        'FACEBOOK':'Facebook Login'
    });

    $translateProvider.translations('fr', {
        'TITLE': 'Yoga avec Agi',
        'MANAGER': 'directeur',
        'MEMBERSHIP': 'adhésion',
        'LESSON': 'cours',
        'EXPIRE': 'date d\'expiration',
        'SEMINAR': 'colloque',
        'LINKEDIN':'Connexion de LinkedIn',
        'FACEBOOK':'Connexion de Facebook'

    });

    $translateProvider.preferredLanguage('en');
}]);
